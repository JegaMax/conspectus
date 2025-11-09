import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(20).max(2000),
});

const REQUIRED_ENV = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO",
];

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Provided information is invalid.",
          errors: parsed.error.flatten(),
        },
        { status: 422 },
      );
    }

    const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

    if (missingEnv.length > 0) {
      console.warn(
        `[contact] Missing SMTP configuration: ${missingEnv.join(", ")}`,
      );
      return NextResponse.json(
        {
          message:
            "Contact service is not configured yet. Please set SMTP environment variables.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:
        process.env.CONTACT_FROM ??
        `"Portfolio" <${process.env.SMTP_USER as string}>`,
      replyTo: `${parsed.data.name} <${parsed.data.email}>`,
      to: process.env.CONTACT_TO,
      subject: `Website contact from ${parsed.data.name}`,
      text: [
        `Name: ${parsed.data.name}`,
        `Email: ${parsed.data.email}`,
        "",
        parsed.data.message,
      ].join("\n"),
    });

    return NextResponse.json({
      message: "Message delivered successfully.",
    });
  } catch (error) {
    console.error("[contact] Unable to send message", error);
    return NextResponse.json(
      {
        message:
          "We couldn't deliver your message. Please email me directly at jega7354@gmail.com.",
      },
      { status: 500 },
    );
  }
}

"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import type { ContactContent } from "@/types/portfolio";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { z } from "zod";

type ContactSectionProps = {
  content: ContactContent;
};

type FormState = "idle" | "loading" | "success" | "error";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please provide a valid email address."),
  message: z.string().min(20, "Share at least 20 characters about your project."),
});

export function ContactSection({ content }: ContactSectionProps) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleChange =
    (field: "name" | "email" | "message") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      }
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setFeedback("");

    const parsed = formSchema.safeParse(formValues);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setStatus("loading");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message ?? "Unable to send message right now.");
      }

      setStatus("success");
      setFeedback("Thank you! Your message is on its way. I'll get back to you shortly.");
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Something went wrong. Please try again later.",
      );
    }
  };

  return (
    <SectionContainer id="contact" background="surface" withPadding={false}>
      <ContactShell>
        <LeftColumn>
          <SectionHeading
            eyebrow="Contact"
            title={content.title}
            subtitle={content.subtitle}
            align="left"
          />
          <Availability>{content.availability}</Availability>

          <ChannelGrid>
            {content.channels.map((channel) => (
              <ChannelCard
                key={channel.label}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <IconWrapper>
                  <channel.icon size={20} />
                </IconWrapper>
                <ChannelText>
                  <ChannelLabel>{channel.label}</ChannelLabel>
                  <ChannelValue href={channel.href} target={channel.external ? "_blank" : undefined}>
                    {channel.value}
                  </ChannelValue>
                </ChannelText>
              </ChannelCard>
            ))}
          </ChannelGrid>

          <SocialRow>
            {content.socials.map((social) => (
              <SocialLink
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon>
                  <social.icon size={18} />
                </SocialIcon>
                <span>{social.label}</span>
              </SocialLink>
            ))}
          </SocialRow>
        </LeftColumn>

        <FormColumn>
          <FormCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                value={formValues.name}
                onChange={handleChange("name")}
                placeholder="How should I address you?"
                $hasError={Boolean(errors.name)}
                required
              />
              {errors.name ? <ErrorMessage>{errors.name}</ErrorMessage> : null}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange("email")}
                placeholder="name@company.com"
                $hasError={Boolean(errors.email)}
                required
              />
              {errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="contact-message">Project details</Label>
              <TextArea
                id="contact-message"
                name="message"
                value={formValues.message}
                onChange={handleChange("message")}
                placeholder="Share project goals, timelines, or anything else you'd like me to know."
                rows={6}
                $hasError={Boolean(errors.message)}
                required
              />
              {errors.message ? <ErrorMessage>{errors.message}</ErrorMessage> : null}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={status === "loading"}
              whileHover={status === "loading" ? undefined : { y: -3 }}
              whileTap={status === "loading" ? undefined : { scale: 0.96 }}
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </SubmitButton>

            {feedback ? (
              <Feedback $state={status}>
                {feedback}
              </Feedback>
            ) : null}
          </FormCard>
        </FormColumn>
      </ContactShell>
    </SectionContainer>
  );
}

const ContactShell = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: clamp(2rem, 6vw, 3rem);
  width: min(1120px, 92vw);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 4rem);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: clamp(2.2rem, 8vw, 3.2rem);
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Availability = styled.p`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;

const ChannelCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.2rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 8, 14, 0.72);
`;

const IconWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: ${({ theme }) => theme.radii.full};
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.08);
`;

const ChannelText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelLabel = styled.span`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.18em;
`;

const ChannelValue = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.95rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(8, 8, 14, 0.55);
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
`;

const SocialIcon = styled.span`
  display: inline-flex;
`;

const FormColumn = styled.div`
  display: flex;
  align-items: stretch;
`;

const FormCard = styled(motion.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: clamp(2rem, 5vw, 2.6rem);
  border-radius: ${({ theme }) => theme.radii.large};
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(7, 7, 10, 0.88);
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const Label = styled.label`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Input = styled.input<{ $hasError: boolean }>`
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : "rgba(255, 255, 255, 0.12)"};
  background: rgba(8, 8, 14, 0.75);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(82, 242, 215, 0.15);
  }
`;

const TextArea = styled.textarea<{ $hasError: boolean }>`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : "rgba(255, 255, 255, 0.12)"};
  background: rgba(8, 8, 14, 0.75);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 180px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(82, 242, 215, 0.15);
  }
`;

const SubmitButton = styled(motion.button)`
  align-self: flex-start;
  padding: 0.85rem 1.8rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  background: linear-gradient(
    135deg,
    rgba(93, 95, 239, 0.95),
    rgba(82, 242, 215, 0.8)
  );
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.danger};
`;

const Feedback = styled.span<{ $state: FormState }>`
  font-size: 0.9rem;
  color: ${({ theme, $state }) =>
    $state === "success"
      ? theme.colors.accent
      : $state === "error"
        ? theme.colors.danger
        : theme.colors.textMuted};
`;

## Jegatheesh – Conspectus Portfolio

Next.js 16 (App Router) rebuild of the Conspectus portfolio with a performance-first, animation-rich experience powered by Styled Components and Framer Motion.

### ✨ Highlights
- Animated hero, section reveals, and hover interactions crafted with Framer Motion.
- Sticky navigation with active-section tracking via IntersectionObserver.
- Fully responsive layout with theme-driven styling and reusable section components.
- Optimised imagery using `next/image` and static data powering SSG + dynamic project routes.
- Functional contact form backed by a configurable SMTP integration.

### 🧱 Tech Stack
- Next.js 16 with the App Router and TypeScript
- Styled Components with custom theming + global styles
- Framer Motion for transitions and micro-interactions
- Lucide icons, Zod validation, Nodemailer SMTP delivery

### 🚀 Local Development
```bash
npm install
npm run dev
```
The app runs on [http://localhost:3000](http://localhost:3000).

Useful scripts:
- `npm run lint` – run ESLint with the Next.js/TypeScript config
- `npm run build` – create an optimised production build
- `npm start` – run the production build locally

### 🔐 Environment Variables (Contact Form)
Create a `.env.local` file in the project root:
```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_TO=recipient@example.com
# Optional: override the sender address
CONTACT_FROM=portfolio@example.com
```
- `SMTP_PORT` 465 enables TLS (`secure: true`). Use 587 or 25 for STARTTLS/plain and the transport will switch automatically.
- Until these variables are supplied, the API returns `503` and the UI shows a friendly fallback asking users to email directly.

### 📦 Content Management
All portfolio copy, skills, timelines, and project metadata live in `src/data/portfolio.ts`. Update this single source of truth to refresh both the landing page and the generated project detail routes.

### ☁️ Deployment
1. **Vercel (recommended)**  
   - Push to GitHub/GitLab/Bitbucket  
   - Import the repo in Vercel and configure the environment variables above  
   - Vercel automatically detects Next.js and sets `npm run build` / `npm run start`

2. **Netlify**  
   - Build command: `npm run build`  
   - Publish directory: `.next`  
   - Enable Next.js runtime in the site settings  
   - Add the SMTP environment variables under Site Configuration → Environment

3. **Container / Custom Hosting**  
   - `npm run build`  
   - Serve with `npm start` behind your preferred process manager or container runtime

### 🧪 Lighthouse & Performance Notes
- Images are served through Next.js image optimisation with AVIF/WebP fallbacks enabled in `next.config.ts`.
- Styled Components rendering is handled server-side via a custom registry to avoid hydration mismatches.
- Animations honour the preferred-reduced-motion media query by relying on Framer Motion defaults, making the experience accessible.

---
Questions, tweaks, or deployments? Reach out via the contact section once your SMTP credentials are wired up. Took extra care so you only need to adjust content, not plumbing. Enjoy shipping! 🎉

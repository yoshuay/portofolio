# Product Requirements Document (PRD)
## Yoshua Yanottama - AI-Powered Professional Portfolio

### 1. Executive Summary
The product is an interactive, AI-powered professional portfolio for Yoshua Yanottama, a Senior Learning & Development (EdTech) Leader. The platform serves as a dynamic resume and case study showcase, designed to engage recruiters, hiring managers, and potential collaborators. It differentiates itself from standard static portfolios by integrating a Gemini-powered AI chatbot capable of answering specific questions about Yoshua's experience, philosophy, and qualifications.

### 2. Target Audience
*   **Recruiters & Talent Acquisition:** Looking for quick summaries of experience and impact.
*   **Hiring Managers (EdTech, L&D):** Seeking deep dives into design philosophy, project case studies, and leadership capabilities.
*   **Industry Peers & Collaborators:** Looking for media coverage, thought leadership, and contact information.

### 3. Core Features & Functionality

#### 3.1. Global UI/UX
*   **Dark Theme Aesthetic:** Premium, modern dark mode UI utilizing glass-morphism (`glass-panel`), high-contrast typography, and subtle hover animations.
*   **Responsive Design:** Mobile-first approach scaling up to ultra-wide desktop displays.
*   **Navigation:** Fixed Navbar for easy access to core sections (Experience, Projects, Media, Contact).

#### 3.2. Page Sections
*   **Hero Section (`<Hero />`):** 
    *   High-impact introduction.
    *   Clear value proposition as an EdTech & Learning Leader.
    *   Primary Call-to-Action (CTA) buttons.
*   **Design Philosophy:** 
    *   Highlights the core approach to instructional design.
    *   Displays 3 key pillars (e.g., Target, Users, Lightbulb/Ideation) mapped from `PERSONAL_INFO.philosophy`.
*   **Projects Showcase (`<ProjectSection />`):** 
    *   Grid/List of key initiatives.
    *   Highlights problem, solution, and measurable impact.
*   **Professional Experience (`#experience`):** 
    *   Chronological timeline of roles.
    *   Displays Company, Location, Period, Role, and "Selected Impact" bullet points.
*   **Media Coverage (`#media`):** 
    *   External validation section.
    *   Cards linking to articles, interviews, or features about Yoshua's work.
*   **Contact Section (`<Contact />`):** 
    *   Methods to get in touch (email, LinkedIn, etc.).

#### 3.3. Interactive & AI Features
*   **AI Recruiter Chatbot (`<Chatbot />`):**
    *   Floating action button (FAB) in the bottom corner.
    *   Powered by `@google/genai` (Gemini API).
    *   Context-aware: Pre-prompted with Yoshua's resume and data to answer questions like "What is Yoshua's experience with AR/VR?" or "How does he measure learning impact?"
*   **Settings Panel (`<SettingsPanel />`):**
    *   Floating trigger button on the right side.
    *   Allows users to customize their viewing experience (e.g., toggle themes, adjust layout density, or toggle AI features).

### 4. Content Inventory (Data Layer)
Managed primarily via `data.ts`:
*   **`PERSONAL_INFO`**: Name, title, contact links, and design philosophy array.
*   **`EXPERIENCE`**: Array of objects containing `role`, `company`, `location`, `period`, and `achievements` (string array).
*   **`MEDIA_COVERAGES`**: Array of objects containing `title`, `description`, `url`, and thumbnail references.
*   **`PROJECTS`**: (Assumed to be in `data.ts` or `ProjectSection.tsx`) Array of case studies.

### 5. Technical Architecture
*   **Framework:** React 19 (Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (with custom utility classes like `.glass-panel`)
*   **Icons:** Lucide React
*   **AI Integration:** `@google/genai` SDK (Gemini API)
*   **Deployment:** GitHub Pages (via GitHub Actions)

### 6. TBD (To Be Determined) / Future Enhancements
The following items require further definition, content population, or technical implementation:

*   **[TBD] Contact Form Backend:** Does the `<Contact />` component use a `mailto:` link, or does it need a backend service (e.g., Formspree, EmailJS, or a custom Express route) to handle form submissions?
*   **[TBD] Settings Panel Capabilities:** Define the exact customization options available in `<SettingsPanel />` (e.g., Light/Dark mode toggle, font size adjustments, language localization).
*   **[TBD] Chatbot Guardrails:** Define strict system instructions for the Gemini chatbot to prevent hallucinations, ensure it stays in character as Yoshua's assistant, and gracefully handles off-topic questions.
*   **[TBD] Project Content:** Finalize the exact case studies, metrics, and imagery for the `<ProjectSection />`.
*   **[TBD] Analytics:** Integration of Google Analytics or Vercel Analytics to track portfolio views, resume downloads, and chatbot engagement.
*   **[TBD] Resume Download:** Add a distinct, easily accessible button to download a PDF version of the resume.
*   **[TBD] SEO Optimization:** Add Open Graph tags, meta descriptions, and structured data to `index.html` for better search engine visibility and social sharing previews.

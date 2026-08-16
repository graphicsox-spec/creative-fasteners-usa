# Creative Fasteners USA Homepage

Responsive single-page homepage built with React, Vite, and TypeScript.

## Requirements

- Node.js 20 or newer
- pnpm 9 or newer

## Local development

```bash
pnpm install
pnpm dev
```

Open the local URL printed in the terminal, normally `http://localhost:5173`.

## Production build

```bash
pnpm build
pnpm preview
```

The optimized production output is generated in `dist/`. This folder is intentionally excluded from Git.

## Project structure

```text
creative-fasteners-usa/
├─ docs/                         Project notes
├─ public/
│  └─ assets/
│     ├─ brand/                  Website logos and favicon
│     ├─ images/industries/      Industry imagery
│     └─ media/hero/             Hero videos and poster
├─ source-assets/                Local raw/editable assets; excluded from Git
├─ src/
│  ├─ components/
│  │  ├─ layout/                 Header and footer
│  │  ├─ sections/               Homepage section components
│  │  └─ ui/                     Shared presentation components
│  ├─ content/                   Editable homepage data
│  ├─ hooks/                     Reusable React hooks
│  ├─ styles/                    Global design system and responsive CSS
│  ├─ App.tsx                    Homepage composition
│  └─ main.tsx                   Application entry point
├─ index.html                    Metadata and app mount point
└─ package.json                  Scripts and dependencies
```

## Replace brand assets

- Header logo: `public/assets/brand/logo-color.svg`
- Footer logo: `public/assets/brand/logo-white.svg`
- Favicon: `public/assets/brand/favicon.svg`

Keep the filenames unchanged to replace these assets without editing code. Logo usage is in `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`.

## Replace hero media

- Slide 1: `public/assets/media/hero/precision-fasteners-featured.mp4`
- Slide 2: `public/assets/media/hero/precision-fasteners-01.mp4`
- Slide 3: `public/assets/media/hero/precision-fasteners-02.mp4`
- Shared poster: `public/assets/media/hero/precision-fasteners-poster.webp`

Use muted, web-optimized MP4 files. Mobile visitors and visitors who prefer reduced motion receive the poster-first experience.

## Add or edit hero slides

Edit the `heroSlides` array in `src/content/homepage.ts`. Add one object for each future slide:

```ts
{
  id: 'unique-id',
  eyebrow: 'SHORT CATEGORY LABEL',
  headline: 'SLIDE HEADLINE',
  description: 'Short supporting message.',
  video: '/assets/media/hero/your-file.mp4',
  poster: '/assets/media/hero/your-poster.webp',
}
```

Slider arrows, pagination, and the counter are rendered only when multiple slides are configured.

## Update homepage content

Most editable content is centralized in `src/content/homepage.ts`, including navigation, hero slides, the trust strip, capabilities, quality steps, industries, and differentiators.

Longer section copy and homepage composition are in `src/App.tsx`. Design variables, typography, spacing, and responsive rules are in `src/styles/global.css`.

## RFQ integration still required

The RFQ form currently performs browser-side validation only. It does not claim to transmit or store information.

Before launch, connect `handleSubmit` in `src/components/sections/RFQForm.tsx` to an approved secure backend or form service. The integration should include:

- Encrypted submission and file upload
- Server-side validation
- Spam protection
- Confirmed email or CRM routing
- Privacy, retention, and failure handling
- A success state only after the server confirms receipt

## Client verification still required

Confirm contact details, privacy wording, available capabilities, materials, finishes, quality-system language, and any certification claims before publication. No certification badges, customer logos, or unverified statistics are included.

## Git hygiene

Commit the application files, `public/assets/`, documentation, and lockfile. Do not commit `node_modules/`, `dist/`, environment files, or the raw client files stored in `source-assets/`.

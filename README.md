# OnlineMihna — Employer Demo Flow

A production-style employer onboarding demo built for [OnlineMihna](https://onlinemihna.com). Features a 7-day free trial landing page, signup form with validation, and mock employer dashboard.

## Live Demo

🔗 **[View Live →](https://onlinemihna-employer-demo.vercel.app)**

## Tech Stack

| Layer      | Technology               |
| ---------- | ------------------------ |
| Framework  | Next.js 16 (App Router)  |
| Language   | TypeScript               |
| Styling    | Tailwind CSS + shadcn/ui |
| Forms      | React Hook Form + Zod    |
| Icons      | Lucide React             |
| Theming    | next-themes              |
| Deployment | Vercel                   |

## Features

- Landing page with 7-day free trial value proposition
- Employer signup form with client-side Zod validation
- Mock employer dashboard with job post stats and trial countdown
- Responsive design (mobile-first)
- Dark / light mode

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── dashboard/
│       └── page.tsx
├── features/
│   ├── landing/
│   │   ├── components/
│   │   └── index.ts
│   └── dashboard/
│       ├── components/
│       ├── data/
│       └── index.ts
├── shared/
│   ├── components/
│   ├── lib/
│   ├── types/
│   └── hooks/
└── components/
    └── ui/
```

## Getting Started

```bash
git clone https://github.com/Belal-sk99/onlinemihna-employer-demo.git
cd onlinemihna-employer-demo
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Author

**Belal Alkahlout** — [belalkahlout.com](https://belalkahlout.com) · [GitHub](https://github.com/Belal-sk99)

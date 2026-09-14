# Fayek Ahanaf - Personal Portfolio Website

A futuristic, dark-mode, production-ready personal portfolio built for **Fayek Ahanaf** - Computing & Information Systems student at Daffodil International University, web developer (Shopify/WordPress, 3+ years), photographer/videographer ("Perfect Click"), and AI/electronics builder.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database / Contact Submissions:** [Supabase](https://supabase.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment Target:** [Vercel](https://vercel.com/)

---

## 📁 Directory Structure & Content Customization

All personal information, bio, photography gallery items, projects, and contact info are strictly decoupled into the `data/` folder so you can update text and images without touching component logic:

```
├── data/
│   ├── siteConfig.ts     # Name, bio, email, phone, education, experience, leadership, skills
│   ├── projects.ts       # Project cards (CircuitMind AI, Smart Home, PID LFR, Shopify/WP)
│   └── photography.ts    # "Perfect Click" services, gallery photos & captions
├── components/           # Modular UI & section components
├── lib/
│   ├── supabase.ts       # Contact form database submission handler
│   └── utils.ts          # Utility functions
├── public/
│   ├── resume.pdf        # REPLACE ME with your real resume PDF
│   └── images/           # Drop your local photos here
└── .env.example          # Template for Supabase URL and Anon Key
```

---

## 🛠️ Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Setup Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build Production Bundle:**
   ```bash
   npm run build
   ```

---

## ⚡ Supabase Setup (Contact Form)

Execute the following SQL query inside your Supabase SQL Editor to create the `contact_submissions` table:

```sql
create table public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.contact_submissions enable row level security;

-- Allow public insert permissions for portfolio contact form
create policy "Allow public contact submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);
```

---

## 🌐 Deploying to Vercel

1. Push your repository to **GitHub**.
2. Go to [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Add Environment Variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**. Vercel will automatically build and publish your Next.js site!

---

## 📷 Customizing Photos & Links

Look for `// REPLACE ME` comments across `data/siteConfig.ts`, `data/projects.ts`, and `data/photography.ts` to swap in your real social profile URLs, live demo links, and custom photos!

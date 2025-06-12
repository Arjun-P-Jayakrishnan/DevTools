## 🚀 Dev Tools Website — Your Personal Dev Hub

Welcome to **Dev Tools Website** — your very own digital workbench for managing notes, tasks, and essential developer utilities, all in one place. Whether you're jotting down ideas, organizing your to-dos, or running quick JSON checks, this platform is designed to supercharge your development workflow.

Built with modern web technologies and a focus on simplicity, scalability, and speed — because your time as a developer is too valuable for anything less.

---

## ✨ Features That Work For You

### 📚 Personal Library — Store Your Knowledge

- 📝 Create new posts
- ✏️ Edit existing posts
- 📖 View and organize all your posts

### ✅ Personal Task Manager — Keep Track of Your Work

- ➕ Add new tasks
- 🔧 Edit existing tasks
- 📋 View and manage all tasks

### 🛠 Developer Tools — Quick Utilities When You Need Them

- 🔍 JSON Viewer (more tools coming soon!)

---

## 🧰 Built With Modern Tech

- ⚛️ **Frontend**: Next.js (React)
- 🔗 **Backend**: Supabase (Database, API, Server Actions)
- 🔐 **Authentication**: Clerk
- 🎨 **Styling**: TailwindCSS
- 🧩 **UI Components**: shadcn/ui
- ☁️ **Deployment**: Vercel

---

## 📂 Project Structure

```bash
DevTools/
│
├── app/                # Next.js app directory (routes, layouts, pages)
│   ├── library/        # Personal library routes
│   ├── tasks/          # Task manager routes
│   ├── tools/          # Developer tools (e.g. JSON viewer)
│   ├── contact/        # Contact
│
├── components/         # Reusable UI components
├── lib/                # Utility functions, Supabase client, helpers
├── middleware.ts       # Clerk authentication middleware
├── public/             # Static assets
├── styles/             # TailwindCSS & global styles
├── .env.local          # Environment variables (not committed)
├── package.json        # Dependencies & scripts
└── README.md           # Project documentation (this file)
```

## 🚀 Getting Started

Follow these steps to get the project up and running locally:

### 1️⃣ Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn** package manager

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Arjun-P-Jayakrishnan/DevTools
cd DevTools
npm run dev
```

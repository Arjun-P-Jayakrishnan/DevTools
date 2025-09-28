import { Library, PhoneCall, Ticket, Wrench } from "lucide-react";

export const NAV_LINKS = [
  {
    href: "/library",
    key: "library",
    label: "Library",
    icon: <Library size={18} />,
  },
  {
    href: "/planner",
    key: "planner",
    label: "Planner",
    icon: <Ticket size={18} />,
  },
  { href: "/tools", key: "tools", label: "Tools", icon: <Wrench size={18} /> },
  {
    href: "/contact",
    key: "contact",
    label: "Contact",
    icon: <PhoneCall size={18} />,
  },
];

export const POST_TEMPLATE = `
  # Project Title

  > A brief description of what this project or document is about.

  ## Table of Contents

  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Data Table](#data-table)
  - [Code Example](#code-example)
  - [Checklist](#checklist)
  - [Image](#image)
  - [Useful Links](#useful-links)
  - [Notes](#notes)

  ---

  ## Overview

  Provide a short overview of the purpose and goals.

  ## Features

  - Feature 1
  - Feature 2
  - Feature 3

  ## Installation


  # Clone the repo
  git clone https://github.com/yourusername/project-name.git

  # Install dependencies
  npm install
`;

export const TASK_LIST_DATA = [
  {
    task_id: "task-id",
    task_title: "title",
    project_id: "Project id",
    status: "started",
    start_date: "start date",
    end_date: "-",
    blockers: "-",
  },
];

export const TASK_LIST_HEADERS = {
  task_id: "Task ID",
  task_title: "Title",
  project_id: "Project ID",
  status: "Status",
  start_date: "Start Date",
  blockers: "Blockers",
};

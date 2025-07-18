# Better - AI-Powered Mortgage Application

## Project Overview

This project, named "Better," is a Next.js application designed to simplify and accelerate the homeownership journey. It features an AI-powered mortgage platform offering lower rates, higher approval chances, and a lightning-fast process from pre-approval to closing. The application includes a detailed mortgage calculator, a multi-step loan application (pre-approval) process, and informational pages about the company's mission and values.

## Features

* **AI-Powered Mortgage Platform:** A digital-first approach to streamline the mortgage process.
* **Mortgage Calculator:** An interactive tool to calculate monthly mortgage payments based on various factors like home price, down payment, loan term, and interest rates.
* **Multi-Step Pre-Approval Application:** A guided, secure, and fast application process for users to get pre-approved for a loan with no impact on their credit score.
* **Company Information:** Dedicated "About Us" section detailing the company's mission, values (Customer First, Transparency, Excellence, Empathy), leadership team, and impact by numbers (total loans funded, families helped, states served, team members).
* **Responsive Design:** Ensures a seamless user experience across various devices.
* **Modern UI Components:** Utilizes a custom component library for consistent and polished user interfaces.
* **Global Navigation:** Includes a consistent header and footer for easy site navigation.

## Technologies Used

* **Next.js 15.4.1**: A React framework for building full-stack web applications.
* **React 19.1.0 / React DOM 19.1.0**: For building the user interface.
* **TypeScript 5**: For type-safe development.
* **Tailwind CSS 4**: A utility-first CSS framework for rapid UI development, configured via `@tailwindcss/postcss`.
* **shadcn/ui Components**: Used for pre-built, customizable UI components like Button, Card, Input, Label, RadioGroup, and Slider.
* **Lucide React**: For beautiful and customizable open-source icons.
* **`clsx` and `tailwind-merge`**: Utilities for constructing CSS class strings conditionally and merging Tailwind CSS classes intelligently.
* **`tw-animate-css`**: For integrating animations.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd better-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

### Development

To run the project in development mode with Turbopack for faster compilation:

```bash
npm run dev
# or
yarn dev
````

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the result.

### Production Build

To build the application for production:

```bash
npm run build
# or
yarn build
```

This command creates an optimized production build in the `.next` folder.

### Start Production Server

To start the built production application:

```bash
npm start
# or
yarn start
```

## Project Structure

The project follows a standard Next.js application directory structure, with a focus on modularity and reusability:

```
.
├── app/
│   ├── (root)/
│   │   ├── about-us/           # About Us page
│   │   │   └── page.tsx
│   │   ├── layout.tsx          # Root layout for main pages
│   │   ├── mortgage-calculator/ # Mortgage Calculator page
│   │   │   └── page.tsx
│   │   └── start/              # Multi-step loan application page
│   │       └── page.tsx
│   ├── globals.css             # Global Tailwind CSS and custom styles
│   ├── layout.tsx              # Main root layout for the entire application (includes Header/Footer)
│   └── page.tsx                # Main landing page
├── components/
│   ├── ui/                     # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── radio-group.tsx
│   │   └── slider.tsx
│   ├── footer.tsx              # Footer component
│   └── header.tsx              # Header component
├── lib/
│   └── utils.ts                # Utility functions (e.g., `cn` for Tailwind class merging)
├── public/                     # Static assets
├── .gitignore                  # Git ignored files
├── components.json             # shadcn/ui components configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Linting

The project uses ESLint for code quality and consistency:

```bash
npm run lint
# or
yarn lint
```

The ESLint configuration extends `next/core-web-vitals` and `next/typescript`. TypeScript build errors and ESLint during builds are ignored in `next.config.ts`.
```
```
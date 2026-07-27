# Personal Portfolio - Nguyễn Đỗ Xuân Trường

A modern, responsive, and premium personal portfolio website built to showcase my skills as a Fullstack Developer Intern.

## Features

- **Modern UI**: Dark mode by default with glassmorphism effects and modern typography.
- **Smooth Animations**: Powered by `framer-motion` for page transitions and micro-interactions.
- **Internationalization (i18n)**: Seamless English/Vietnamese language switching via custom React Context.
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices.

## Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Vanilla CSS (CSS Variables, Glassmorphism)
- **Icons:** `lucide-react`, `react-icons`
- **Animations:** `framer-motion`
- **Deployment:** GitHub Pages (`gh-pages`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xuantruong121/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Deployment to GitHub Pages

This project is pre-configured for deployment to GitHub Pages.

1. Ensure your `package.json` has the homepage field or your `vite.config.ts` has the correct `base` path (currently set to `./`).
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This command runs `npm run build` followed by `gh-pages -d dist`, pushing the built files to the `gh-pages` branch.*

## Contact

- **Email**: xtruong121.work@gmail.com
- **LinkedIn**: [Nguyễn Đỗ Xuân Trường](https://www.linkedin.com/in/nguyen-do-xuan-truong-7865b7285/)
- **GitHub**: [xuantruong121](https://github.com/xuantruong121)

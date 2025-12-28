<div align="center">

# ✨ CV Portfolio

A sleek, tiny & modern personal portfolio website to showcase my CV.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 🚀 Features

### 🌍 Internationalization (i18n)

- **Multi-language support** with English and Russian translations
- Smart **language detection** via `Accept-Language` headers
- **Cookie-based** language persistence for returning visitors
- Seamless **language switching** component with flag indicators
- URL-based routing (`/en`, `/ru`) for better SEO

### 🎨 Modern UI/UX

- **Animated blob background** with dynamic, morphing shapes using clip-path animations
- **Glassmorphism design** with backdrop blur effects and semi-transparent cards
- **Custom dark theme** with carefully crafted color palette:
  - Background: `#0f1113`
  - Foreground: `#e9ecef`
  - Accent blob: `#059669` (emerald green)
- **Golos Text** font from Google Fonts with Cyrillic & Latin support
- **Responsive layout** optimized for all screen sizes including short viewports

### ⚡ Performance & DX

- Built on **Next.js 15** with App Router architecture
- **React 19** with Server Components for optimal performance
- **Static Site Generation (SSG)** for blazing-fast page loads

### 🔗 Social Integration

- Direct links to **GitHub** profile
- **Telegram** DM button for quick contact
- **Downloadable CV** (PDF) with one click

### 🛠️ Technical Highlights

- **Middleware-based routing** for automatic language detection and redirects
- **CSS Modules** for scoped, maintainable styles
- **RTL support** ready via i18next `dir()` function
- Type-safe with **full TypeScript** coverage
- Modular **component architecture** (Button, Heading, Paragraph, etc.)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/dominnya/cv.git
cd cv

# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Customization

### Adding a New Language

1. Add the locale code to `src/app/i18n/settings.ts`:

   ```ts
   export const languages = ["en", "ru", "de"]; // Add your locale
   ```

2. Create translation files in `src/app/i18n/locales/{lang}/`

3. Add the flag emoji in `common.json`

### Modifying Theme Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  subtle: "#1b1d20",
  foreground: "#e9ecef",
  background: "#0f1113",
  blob: "#059669", // Change accent color
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

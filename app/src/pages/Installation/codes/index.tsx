// Criando projeto
export const createProject = `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install`;

// Instalando dependências
export const installDependencies = `npm install react react-dom clsx tailwind-merge class-variance-authority lucide-react radix-ui  
npm install -D vite typescript @vitejs/plugin-react @types/react @types/react-dom @types/node tailwindcss @tailwindcss/vite tw-animate-css`;

export const datesAndCalendars = `npm install date-fns react-day-picker`;

export const googleFonts = `npm install @fontsource/fira-sans @fontsource/montserrat`;

export const typographyTokens = `/* * Typography classes */ 
--font-heading: "Fira Sans", sans-serif; 
--font-label: "Fira Sans", sans-serif; 
--font-sans: "Montserrat", sans-serif;`;

// Tailwind CSS configuration
export const activatePlugin = `import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`;

export const tailwindImports = `@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource/fira-sans";
@import "@fontsource/montserrat";

@custom-variant dark (&:is(.dark *));`;

export const tokensAndThemeDefinition = `:root {
  --background: oklch(1 0 0);
  --foreground: oklch(14.1% 0.005 285.823);
  --primary: oklch(60.9% 0.126 221.723);
  --secondary: oklch(54.1% 0.281 293.009);
  --muted: oklch(87.2% 0.01 258.338);
  --border: oklch(96.7% 0.003 264.542);
}

@theme inline {
  --font-heading: "Fira Sans", sans-serif;
  --font-label: "Fira Sans", sans-serif;
  --font-sans: "Montserrat", sans-serif;
}`;

export const importCSS = `import "./style/globals.css";`;

// Aliases configuration
export const typeScriptAliasConfiguration = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`;

export const viteAliasConfiguration = `import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});`;

export const aliasExemple = `import { Button } from "@/components/ui";
import { cn } from "@/utils/cn";`;

export const barrelFileExport = `export * from "@/components/ui/avatar";
export * from "@/components/ui/badge";
export * from "@/components/ui/button";`;

export const barrelFileImport = `import { Avatar, Badge, Button } from "@/components/ui";`;

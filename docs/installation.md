# Instalação

AtomicUI é uma biblioteca local de componentes React para projetos TypeScript com Vite, Tailwind CSS e uma estrutura inspirada em design systems modernos. Este guia descreve os passos necessários para configurar um projeto do zero e usar os componentes do repositório com as mesmas convenções adotadas aqui.

---

# Pré-requisitos

Antes de copiar qualquer componente, confirme que o ambiente atende aos requisitos abaixo:

- Node.js 20+ (LTS recomendado)
- npm (o repositório inclui package-lock.json)
- React 19.2.6
- Vite 8.0.12
- TypeScript ~6.0.2
- Tailwind CSS 4.3.0
- React Router 7.15.0

O projeto atual usa estas tecnologias e dependências diretamente:

- Vite como bundler
- React + TypeScript como base da aplicação
- Tailwind CSS 4 via plugin do Vite
- shadcn-style configuration via arquivo components.json
- fontes do Google carregadas com @fontsource
- ícones via lucide-react

---

# Criando um projeto

Como o repositório atual é baseado em Vite, o fluxo recomendado é:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

Se você estiver iniciando a partir de uma aplicação já existente, basta garantir que ela tenha estrutura semelhante a esta:

```bash
src/
  main.tsx
  App.tsx
  style/globals.css
```

---

# Instalando dependências

## Dependências principais

Para reproduzir o comportamento do AtomicUI, instale as dependências abaixo:

```bash
npm install react@^19.2.6 react-dom@^19.2.6 react-router@^7.15.0

npm install -D vite@^8.0.12 typescript@~6.0.2 @vitejs/plugin-react@^6.0.1 @types/react@^19.2.14 @types/react-dom@^19.2.3 @types/node@^24.12.3

npm install -D tailwindcss@^4.3.0 @tailwindcss/vite@^4.3.0 tw-animate-css@^1.4.0

npm install clsx@^2.1.1 tailwind-merge@^3.6.0 class-variance-authority@^0.7.1 lucide-react@^1.3.0 radix-ui@^1.4.3
```

## Dependências opcionais

Alguns componentes do AtomicUI dependem de bibliotecas adicionais, especialmente os relacionados a datas e calendário:

```bash
npm install date-fns@^4.1.0 react-day-picker@^10.0.1
npm install @fontsource/fira-sans@^5.2.7 @fontsource/montserrat@^5.2.8
npm install dotenv@^17.4.2
```

> Se você quiser copiar apenas um subconjunto dos componentes, instale somente as dependências exigidas por eles. O componente mais completo do repositório, por exemplo, depende de date-fns e react-day-picker.

---

# Configurando o Tailwind CSS

O projeto não usa um arquivo tailwind.config tradicional. A configuração do Tailwind 4 é feita principalmente via plugin do Vite e por imports no CSS global.

## 1. Ative o plugin do Tailwind no Vite

Arquivo: vite.config.ts

```ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## 2. Importe o Tailwind e os estilos globais

Arquivo: src/style/globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@fontsource/fira-sans";
@import "@fontsource/montserrat";

@custom-variant dark (&:is(.dark *));
```

## 3. Defina os tokens e o tema

No mesmo arquivo globals.css, o projeto define variáveis de tema e classes utilitárias com o bloco @theme inline:

```css
:root {
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
}
```

## 4. Importe o CSS global na aplicação

Arquivo: src/main.tsx

```tsx
import "./style/globals.css";
```

Esse import é obrigatório para que as classes, tokens e fontes funcionem corretamente.

---

# Configurando aliases

O projeto usa o alias @ para apontar para a pasta src. Isso é necessário para os imports dos componentes, utilitários e páginas.

## TypeScript

Arquivo: tsconfig.json e tsconfig.app.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Vite

Arquivo: vite.config.ts

```ts
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Esse alias é usado em arquivos como:

```ts
import { Button } from "@/components/ui";
import { cn } from "@/utils/cn";
```

---

# Configurando Design Tokens

Os tokens do AtomicUI ficam centralizados em src/style/globals.css.

## Onde ficam

- src/style/globals.css: definição das variáveis de cor, tipografia, radius e tamanhos de texto
- src/constants/tokens.ts: arquivo simples que expõe a variável de ambiente THEME

## Como funcionam

As variáveis CSS são definidas no bloco :root e depois mapeadas para classes Tailwind no bloco @theme inline. Exemplos:

- --primary
- --secondary
- --success
- --warning
- --danger
- --muted
- --border
- --background
- --foreground

Essas variáveis são utilizadas por componentes como Button, Badge, Input, Heading e outros para manter consistência visual.

## Como customizar

Para trocar a identidade visual do projeto, edite os valores das variáveis no bloco :root. Por exemplo:

```css
:root {
  --primary: oklch(45% 0.15 240);
  --secondary: oklch(60% 0.2 300);
  --border: oklch(90% 0.003 240);
}
```

## Arquivos recomendados para alteração

- src/style/globals.css para cores, fontes e tokens globais
- src/components/ui/* para ajustar a implementação visual de um componente específico
- src/components/structures/* para alterar a composição de layout

---

# Estrutura do projeto

A estrutura relevante para instalação e uso dos componentes é esta:

```text
src/
  components/
    structures/
    ui/
  constants/
  pages/
  style/
    globals.css
  utils/
    cn.tsx
```

Pontos importantes:

- src/components/ui contém os componentes reutilizáveis da biblioteca
- src/components/structures contém blocos de layout e estrutura da interface
- src/style/globals.css é o ponto central de tema e estilo global
- src/utils/cn.tsx contém o helper de composição de classes

---

# Utilitários obrigatórios

Alguns arquivos são essenciais para o funcionamento correto dos componentes.

## cn()

Arquivo: src/utils/cn.tsx

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Esse helper é usado por vários componentes para combinar classes condicionais e evitar conflitos entre classes Tailwind.

## globals.css

Arquivo: src/style/globals.css

Esse arquivo é obrigatório porque nele estão:

- imports do Tailwind
- tokens de tema
- fontes
- classes utilitárias
- base styles do projeto

## Barrel de componentes

Arquivo: src/components/ui/index.tsx

Ele exporta os componentes em uma única camada pública, facilitando imports como:

```ts
import { Button, Input, Badge } from "@/components/ui";
```

---

# Adicionando componentes

Para adicionar um componente do AtomicUI a um projeto, siga este fluxo:

## 1. Copie a pasta do componente

Os componentes estão organizados em pastas como:

```text
src/components/ui/button/
src/components/ui/input/
src/components/ui/datepicker/
src/components/ui/popover/
```

Copie a pasta correspondente para o projeto que você está montando.

## 2. Garanta os arquivos compartilhados

Os componentes dependem de arquivos comuns do projeto:

- src/style/globals.css
- src/utils/cn.tsx
- os aliases @/* configurados
- as dependências listadas acima

## 3. Verifique dependências específicas

Alguns componentes têm dependências extras:

- Button: class-variance-authority, radix-ui, clsx, tailwind-merge
- DatePickerSimple: date-fns, react-day-picker, lucide-react, Popover, Calendar, InputDate
- Popover e outros componentes baseados em Radix: radix-ui

## 4. Importe o componente

Exemplo:

```tsx
import { Button } from "@/components/ui";

export function Example() {
  return <Button variant="primary">Enviar</Button>;
}
```

Se você estiver copiando um componente que depende de outros componentes internos, mantenha a estrutura de pastas intacta para evitar problemas de importação.

---

# Boas práticas

- Não edite componentes diretamente em projetos consumidores sem entender o impacto global.
- Prefira customizar os Design Tokens em src/style/globals.css em vez de reescrever estilos em cada componente.
- Reutilize variantes e classes padronizadas, como as já definidas em Button e outros componentes base.
- Mantenha consistência visual com a paleta e os tamanhos já presentes no projeto.
- Siga a mesma estrutura de pastas usada no AtomicUI para facilitar manutenção e evolução.

---

# Solução de problemas

## Alias @ não funciona

Se os imports com @/ não forem resolvidos:

- confirme que os arquivos tsconfig.json e vite.config.ts possuem o mesmo mapeamento
- reinicie o servidor Vite após alterar a configuração

## Tailwind não aplica classes

Se as classes não estiverem aparecendo:

- confirme que src/style/globals.css está sendo importado em src/main.tsx
- verifique se o plugin @tailwindcss/vite está ativo em vite.config.ts
- certifique-se de que o arquivo começa com @import "tailwindcss";

## Estilos ausentes ou fontes não carregam

Se o visual estiver incompleto:

- verifique se as dependências @fontsource foram instaladas
- confirme que os imports @fontsource/fira-sans e @fontsource/montserrat existem em globals.css
- verifique se o pacote tw-animate-css está instalado

## Erros de importação de componentes

Se um componente não encontrar seus imports:

- instale as dependências específicas do componente
- confira se o arquivo src/utils/cn.tsx existe
- confirme que os aliases @/* apontam corretamente para src

## Problemas de tipagem

Se o TypeScript reportar erros em imports ou props:

- confirme que o tsconfig usa moduleResolution bundler
- maintaina os arquivos tsconfig.app.json e tsconfig.json consistentes
- reinicie a análise do editor após ajustes de configuração

---

# Resumo rápido

Para usar AtomicUI corretamente, o mínimo necessário é:

1. Criar um projeto React + TypeScript com Vite
2. Instalar as dependências listadas acima
3. Configurar o plugin do Tailwind no Vite
4. Importar src/style/globals.css na aplicação
5. Configurar o alias @/* em TypeScript e Vite
6. Copiar os componentes e manter os utilitários compartilhados

Com isso, o projeto passa a suportar a mesma arquitetura de componentes, tokens e estilos usada no repositório AtomicUI.

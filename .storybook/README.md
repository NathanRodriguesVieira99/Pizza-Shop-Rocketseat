# Pasta .storybook 📚

Contém a configuração do Storybook, ferramenta para documentação e visualização isolada de componentes.
Inclui arquivos de setup, addons, preview e main para personalizar o ambiente de desenvolvimento visual.

Exemplo de configuração:

```ts
// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react-vite",
  staticDirs: ["../public"],
  features: {
    backgroundsStoryGlobals: false,
  },
};
export default config;
```

Use o Storybook para visualizar e documentar componentes de forma interativa.

Exemplo de criação de uma story:

```tsx
// src/components/Button.stories.tsx
import { Button } from "./Button";

// Configuração principal da story
export default {
  title: "Components/Button", // Caminho onde o componente aparece no Storybook
  component: Button, // Componente a ser documentado
  args: {
    children: "Clique aqui", // Prop padrão do botão
    variant: "primary",      // Variante padrão
    disabled: false,         // Estado padrão
  },
  argTypes: {
    variant: {
      control: { type: "select" }, // Permite escolher a variante no painel
      options: ["primary", "secondary", "danger"],
    },
    disabled: { control: "boolean" }, // Permite alternar entre habilitado/desabilitado
  },
};

// Variação padrão do botão
export const Default = {};

// Variação do botão desabilitado
export const Disabled = {
  args: {
    disabled: true,
    children: "Desabilitado",
  },
};
```

> **Dica:** Use o Storybook 📚 para criar cenários visuais e testar variações dos componentes de forma isolada.

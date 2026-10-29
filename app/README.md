# Aplicação Atomic UI

## Visão geral

`app/` contém a aplicação web do repositório: uma SPA React para apresentar a documentação, os exemplos e o catálogo de componentes do Atomic UI. Ela não está configurada como pacote publicável independente.

Tecnologias principais: React 19, TypeScript, Vite, React Router, Tailwind CSS 4 e Radix UI. Storybook, Vitest e Playwright dão suporte às histórias e aos testes em navegador.

## Pré-requisitos

- Node.js `^20.19.0` ou `>=22.12.0`, conforme o requisito do Vite instalado.
- npm e acesso à internet para instalar as dependências. O repositório inclui `package-lock.json`; use `npm ci` para instalar a partir do lockfile.
- Não há serviços externos, backend ou credenciais necessários para iniciar a aplicação, conforme a configuração e o código atuais.

## Instalação e execução local

Na raiz do repositório:

```bash
cd app
npm ci
npm run dev
```

O Vite utiliza a porta padrão `5173` (não há outra porta configurada). Acesse [http://localhost:5173](http://localhost:5173).

### Variáveis de ambiente

Não há arquivo `.env.example`. `src/constants/tokens.ts` lê `VITE_THEME`, mas não foi encontrado outro uso dessa constante nem uma lista de valores aceitos. A variável não é documentada como requisito para iniciar a aplicação.

Se uma alteração local precisar dessa configuração, crie `app/.env` com o valor definido pelo projeto. O arquivo `.env` é ignorado pelo Git; não inclua segredos em variáveis `VITE_*`, pois elas podem ser expostas no cliente.

## Scripts disponíveis

Execute estes scripts a partir de `app/`:

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Executa a verificação de tipos com `tsc -b` e gera a versão de produção. |
| `npm run lint` | Verifica o código com ESLint. |
| `npm run preview` | Serve localmente a versão já compilada. Execute `npm run build` antes. |
| `npm run storybook` | Inicia o Storybook na porta `6006`. |
| `npm run build-storybook` | Gera a versão estática do Storybook. |

O `package.json` não define `npm test`. O Vitest está configurado com o plugin de testes do Storybook e Playwright para Chromium; é possível executar essa configuração com `npx vitest run`.

## Estrutura do projeto

```text
app/
├── public/                 # Arquivos estáticos servidos sem processamento
├── src/
│   ├── assets/             # Recursos importados pela aplicação
│   ├── components/
│   │   ├── structures/     # Estruturas compartilhadas, como layout e navegação
│   │   └── ui/             # Componentes reutilizáveis, organizados por domínio
│   ├── constants/          # URLs e tokens
│   ├── hooks/              # Diretório reservado; não há hooks próprios atualmente
│   ├── pages/              # Dashboard, documentação, instalação e páginas de componentes
│   ├── stories/            # Histórias do Storybook por componente
│   ├── style/              # Estilos globais e tokens CSS
│   ├── types/              # Tipos compartilhados
│   └── utils/              # Funções utilitárias compartilhadas
├── .storybook/             # Configuração do Storybook
├── package.json            # Dependências e scripts
├── package-lock.json       # Lockfile npm
└── vite.config.ts          # Plugins, alias e configuração de testes
```

## Arquitetura e convenções

### Rotas e páginas

As rotas são declaradas em `src/routes.tsx` com `createBrowserRouter`. O `DefaultLayout` envolve as páginas principais por meio de rotas filhas; dashboard, documentação, instalação e catálogo de componentes são carregados sob demanda com `lazy`. Os segmentos de URL ficam em `src/constants/urls.ts`.

Para acrescentar uma página, crie-a em `src/pages/`, exporte o componente e registre seu carregamento lazy em `routes.tsx`. Para novas URLs, reutilize ou acrescente a constante correspondente em `constants/urls.ts`. A rota curinga já direciona caminhos não encontrados para a página de erro.

Não há fluxo de autenticação ou autorização implementado.

### Componentes e estilos

Os componentes reutilizáveis ficam em `src/components/ui/<domínio>/` e são exportados pelo barrel `src/components/ui/index.tsx`. Os componentes podem ser compostos; quando aplicável, usam primitivas do Radix UI, variantes tipadas com Class Variance Authority (`cva`) e `cn` (`src/utils/cn.tsx`) para combinar classes Tailwind.

Ao adicionar um componente, siga os arquivos e exports existentes no domínio correspondente e exponha-o pelo barrel. Mantenha estilos alinhados aos tokens em `src/style/` e às convenções de classes já usadas.

### Estado, integrações e formulários

O estado observado é local aos componentes, usando hooks do React. Não foi encontrada uma solução de estado global, cliente HTTP, integração de API ou serviço externo na aplicação atual. Se um recurso futuro exigir API, não há um padrão de cliente estabelecido: alinhe a abordagem antes de adicionar uma nova integração.

Há componentes de formulário, mas não foi encontrada biblioteca ou convenção própria para gerenciamento, validação ou schemas. Reutilize os controles existentes e os tipos das props; não presuma a existência de uma camada de formulários compartilhada.

### Hooks, utilitários e testes

`src/hooks/` ainda não contém hooks próprios. Coloque funções compartilhadas em `src/utils/` e mantenha lógica específica junto ao componente ou página que a utiliza. O alias `@/` aponta para `src/` e deve ser usado nos imports internos.

As histórias ficam em `src/stories/`, agrupadas por componente, e são descobertas pela configuração em `.storybook/main.ts`. O Vitest usa o addon de testes do Storybook e executa as histórias em Chromium via Playwright; não há uma suíte independente nem script `test` no `package.json`.

## Como contribuir

1. **Páginas e rotas:** coloque a página em `src/pages/`, siga o padrão de exportação da seção correspondente e registre seu carregamento lazy em `src/routes.tsx`. Centralize novos segmentos em `src/constants/urls.ts`.
2. **Componentes:** implemente em `src/components/ui/<domínio>/`, reutilize primitivas e utilitários existentes, exporte o componente em `src/components/ui/index.tsx` e atualize a página de catálogo/documentação pertinente, se aplicável.
3. **Hooks e utilitários:** mantenha lógica específica perto de quem a utiliza; extraia para `src/hooks/` ou `src/utils/` quando houver reutilização real. Use imports pelo alias `@/`.
4. **API:** não existe camada de API atual. Para adicionar uma integração, primeiro defina e documente o padrão de cliente e tratamento de erros com o restante da equipe.
5. **Formulários:** componha os controles disponíveis. Como não há biblioteca ou padrão de schema configurado, confirme a necessidade e a abordagem antes de introduzir uma dependência.
6. **Testes e exemplos:** adicione ou ajuste histórias em `src/stories/` para demonstrar estados e variantes. Execute `npx vitest run` para a configuração de testes do Storybook.
7. **Verificações:** antes de enviar a alteração, execute `npm run lint` e `npm run build`; para mudanças visuais ou de componentes, confira também as histórias com `npm run storybook`.

Não há fluxo de branches, commits ou pull requests documentado especificamente para `app/`; siga o processo acordado para o repositório.

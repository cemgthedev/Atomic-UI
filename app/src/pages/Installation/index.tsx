import { Button, Divider, Heading, Label, Text } from "@/components/ui";
import {
  activatePlugin,
  aliasExemple,
  barrelFileExport,
  barrelFileImport,
  createProject,
  datesAndCalendars,
  googleFonts,
  importCSS,
  installDependencies,
  tailwindImports,
  tokensAndThemeDefinition,
  typeScriptAliasConfiguration,
  typographyTokens,
  viteAliasConfiguration,
} from "@/pages/Installation/codes";
import { copy } from "@/utils/copy";
import { Copy } from "lucide-react";

export function Installation() {
  return (
    <section className="scroll-progress min-h-[calc(100vh-73px)] max-h-[calc(100vh-73px)] w-full px-4 md:px-8 flex flex-col overflow-auto">
      {/* Instalação */}
      <div id="instalacao" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Instalação</Heading>
          <Text className="indent-8">
            {" "}
            Este guia descreve os passos necessários para configurar um projeto
            do zero e usar os componentes do repositório com as mesmas
            convenções adotadas aqui.
          </Text>
        </div>
      </div>

      {/* Pré requisitos */}
      <div id="pre-requisitos" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Pré-requisitos</Heading>
          <Text className="indent-8">
            {" "}
            Antes de copiar qualquer componente, confirme que o ambiente atende
            aos requisitos abaixo:
          </Text>
        </div>

        <Divider size="xs" />

        <div className="flex flex-col gap-2">
          <Label size="sm">Pacotes</Label>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Node.js 20 ou superior (LTS recomendado)</li>
            <li>Projeto React com Vite</li>
            <li>TypeScript</li>
            <li>Tailwind CSS 4</li>
          </ul>
        </div>
      </div>

      {/* Criando projeto */}
      <div id="criando-projeto" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Criando projeto</Heading>
          <Text className="indent-8">
            {" "}
            Como o repositório atual é baseado em Vite, o fluxo recomendado é:
          </Text>
        </div>

        <Divider size="xs" />

        <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
          <pre className="w-full overflow-auto scrollbar-thin mr-1">
            <code>{createProject}</code>
          </pre>
          <Button
            startContent={<Copy size={20} className="text-zinc-600" />}
            onClick={() => copy(createProject)}
            className="bg-transparent border-none p-0"
          />
        </div>
      </div>

      {/* Instalando dependências */}
      <div id="dependencias" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Instalando dependências</Heading>
          <Text className="indent-8">
            {" "}
            Para reproduzir o comportamento do AtomicUI, instale as dependências
            abaixo:
          </Text>
        </div>

        <Divider size="xs" />

        <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
          <pre className="w-full overflow-auto scrollbar-thin mr-1">
            <code>{installDependencies}</code>
          </pre>
          <Button
            startContent={<Copy size={20} className="text-zinc-600" />}
            onClick={() => copy(installDependencies)}
            className="bg-transparent border-none p-0"
          />
        </div>

        <Text className="indent-8">
          {" "}
          Alguns componentes do AtomicUI utilizam bibliotecas adicionais.
          Instale apenas as dependências exigidas pelos componentes que pretende
          utilizar.
        </Text>

        <div className="flex flex-col gap-2">
          <Label size="sm">Datas e calendário</Label>
          <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
            <pre className="w-full overflow-auto scrollbar-thin mr-1">
              <code>{datesAndCalendars}</code>
            </pre>
            <Button
              startContent={<Copy size={20} className="text-zinc-600" />}
              onClick={() => copy(datesAndCalendars)}
              className="bg-transparent border-none p-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label size="sm">Fontes do google</Label>
          <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
            <pre className="w-full overflow-auto scrollbar-thin mr-1">
              <code>{googleFonts}</code>
            </pre>
            <Button
              startContent={<Copy size={20} className="text-zinc-600" />}
              onClick={() => copy(googleFonts)}
              className="bg-transparent border-none p-0"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Text>
            {" "}
            Caso utilize outras fontes, basta atualizar os tokens tipográficos
            em `src/style/globals.css`:
          </Text>
          <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
            <pre className="w-full overflow-auto scrollbar-thin mr-1">
              <code>{typographyTokens}</code>
            </pre>
            <Button
              startContent={<Copy size={20} className="text-zinc-600" />}
              onClick={() => copy(typographyTokens)}
              className="bg-transparent border-none p-0"
            />
          </div>
        </div>
      </div>

      {/* Configurando Tailwind CSS */}
      <div id="tailwindcss" className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-1">
          <Heading>Configurando o Tailwind CSS</Heading>
          <Text className="indent-8">
            {" "}
            O projeto não usa um arquivo tailwind.config tradicional. A
            configuração do Tailwind 4 é feita principalmente via plugin do Vite
            e por imports no CSS global.
          </Text>
        </div>

        <Divider size="xs" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label size="sm">1. Ative o plugin do Tailwind no Vite</Label>
            <Text className="indent-8">Arquivo: vite.config.ts</Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{activatePlugin}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(activatePlugin)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label size="sm">2. Importe o Tailwind e os estilos globais</Label>
            <Text className="indent-8">Arquivo: src/style/globals.css</Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{tailwindImports}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(tailwindImports)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label size="sm">3. Defina os tokens e o tema</Label>
            <Text className="indent-8">
              {" "}
              No mesmo arquivo globals.css, o projeto define variáveis de tema e
              classes utilitárias com o bloco @theme inline:
            </Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{tokensAndThemeDefinition}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(tokensAndThemeDefinition)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label size="sm">4. Importe o CSS global na aplicação</Label>
            <Text className="indent-8">Arquivo: src/main.tsx</Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{importCSS}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(importCSS)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Configurando aliases */}
      <div id="aliases" className="flex flex-col gap-3 pt-4 pb-16">
        <div className="flex flex-col gap-1">
          <Heading>Configurando aliases</Heading>
          <Text className="indent-8">
            {" "}
            O projeto usa o alias @ para apontar para a pasta src. Isso é
            necessário para os imports dos componentes, utilitários e páginas.
          </Text>
        </div>

        <Divider size="xs" />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label size="sm">TypeScript</Label>
            <Text className="indent-8">
              Arquivos: tsconfig.json e tsconfig.app.json
            </Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{typeScriptAliasConfiguration}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(typeScriptAliasConfiguration)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label size="sm">Vite</Label>
            <Text className="indent-8">Arquivo: vite.config.ts</Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{viteAliasConfiguration}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(viteAliasConfiguration)}
                className="bg-transparent border-none p-0"
              />
            </div>
            <Text className="indent-8">
              {" "}
              O alias é utilizado em arquivos como:
            </Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{aliasExemple}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(aliasExemple)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label size="sm">Barrel file</Label>
            <Text className="indent-8">
              Arquivo: src/components/ui/index.tsx
            </Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{barrelFileExport}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(barrelFileExport)}
                className="bg-transparent border-none p-0"
              />
            </div>
            <Text className="indent-8">
              {" "}
              Ele exporta os componentes em uma única camada pública,
              facilitando imports como:
            </Text>
            <div className="w-full flex justify-between p-3 bg-muted-100 border border-muted-200 rounded-lg">
              <pre className="w-full overflow-auto scrollbar-thin mr-1">
                <code>{barrelFileImport}</code>
              </pre>
              <Button
                startContent={<Copy size={20} className="text-zinc-600" />}
                onClick={() => copy(barrelFileImport)}
                className="bg-transparent border-none p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

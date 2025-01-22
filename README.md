<div align="center">
  <br />
  <a href="https://convit3-digital.vercel.app">
   <img src="./public/logo.svg" alt="Project Banner">
  </a>

  <h3 align="center" style="font-weight: bold; font-size: 28px;" >
    CONVITE<span style="color: #2F80ED">3</span> DIGITAL
  </h3>

  <div align="center">
    Crie e gerencie o convite do seu evento de forma rápida e fácil, sem complicações.
  </div>

  <br />
  <div>
    <img src="https://img.shields.io/badge/Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/PostgreSQL-black?style=for-the-badge&logoColor=white&logo=postgresql&color=000000" alt="postgresql" />
  </div>

</div>

## 📋 <a name="table">Índice</a>

1. 🤖 [Introdução](#introduction)
2. ⚙️ [Tecnologia Utilizadas](#tech-stack)
3. 🔋 [Funcionalidades](#features)
4. 🤸 [Início Rápido](#quick-start)
5. 🕸️ [Trechos (Código para copiar)](#snippets)
6. 🚀 [Mais](#more)

## <a name="introduction">🤖 Introdução</a>

Convite Digital é uma aplicação para gerenciamento de eventos, que permite criar eventos, enviar convites e gerenciar participantes de forma simples e eficiente. O acesso é feito através de um link mágico enviado ao e-mail. Desenvolvido com Next.js, TypeScript, ShadCN, Tailwind CSS e PostgreSQL, o projeto combina tecnologias modernas para garantir alto desempenho e uma experiência intuitiva.

#### 🌐 Acesse em: [https://convit3-digital.vercel.app](https://convit3-digital.vercel.app)

## <a name="tech-stack">⚙️ Tecnologia Utilizadas</a>

- **[Next.js](https://nextjs.org/)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[NextAuth](https://authjs.dev)**
- **[ShadCN](https://ui.shadcn.com)**
- **[Tailwind CSS](https://tailwindcss.com)**
- **[Prisma ORM](https://www.prisma.io)**
- **[PostgreSQL](https://www.postgresql.org)**
- **[React Hook Form](https://react-hook-form.com)**
- **[Zod](https://zod.dev)**

## <a name="features">🔋 Funcionalidades</a>

👉 **Acesso simplificado**: Faça login rapidamente utilizando um link mágico enviado para seu e-mail. Sem complicações, sem senhas.

👉 **Criação de eventos**: Crie eventos personalizados com detalhes como título, imagem, data, local e descrição.

👉 **Link de convites**: Compartilhe convites diretamente com os participantes para que possam confirma ou não de forma prática e eficiente.

👉 **Gerenciamento de participantes**: Acompanhe a lista de convidados, confirme presenças e mantenha o controle do seu evento.

## <a name="quick-start">🤸 Quick Start</a>

Siga estas etapas para configurar o projeto localmente na sua máquina.

**Pré-requisitos**

Certifique-se de ter o seguinte instalado em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/pt)
- [Npm](https://www.npmjs.com) (Geralmente instalado com node.js)

**Clonando o Repositório**

```bash
git clone https://github.com/Joclelsonr/nextjs-convit3-digital.git
cd nextjs-convit3-digital
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install
```

**Configurar variáveis ​​de ambiente**

Crie um novo arquivo chamado `.env` na raiz do seu projeto e adicione o seguinte conteúdo:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/database
EMAIL_SERVER=smtp://user:password@smtp.example.com
EMAIL_FROM=noreply@example.com
AUTH_SECRET=####################
```

**Executando o Projeto**

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

## <a name="snippets">🕸️ Trechos</a>

<details>
  <summary><code>types/index.d.ts</code></summary>

```typescript
import { Event as PrismaEvent, Guest } from "@prisma/client";

declare global {
  type EventGuest = PrismaEvent & {
    guests: Guest[];
  };
}
```

</details>

## <a name="more">🚀 Mais</a>

**Implementações Futuras**:

- **Exclusão de Evento**: Permitir a exclusão de eventos, removendo todos os dados relacionados.
- **Notificações por E-mail**: Enviar notificações por e-mail para os participantes sobre alterações no evento.
- **Integração com Calendários**: Integração com calendários para facilitar a visualização e o compartilhamento do evento.
- **Compartilhamento de Eventos**: Permitir o compartilhamento de eventos em redes sociais e outras plataformas.
- **Integração com APIs de Mídias Sociais**: Permitir a integração com APIs de mídias sociais para compartilhamento de eventos.

<br />
<br />

Sinta-se à vontade para contribuir ou relatar problemas na seção de [issues](https://github.com/Joclelsonr/nextjs-convit3-digital/issues).

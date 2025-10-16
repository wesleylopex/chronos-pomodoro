<div align="center">
  <h1>⏱️ Chronos Pomodoro</h1>
  <p>Uma aplicação moderna de timer Pomodoro para gerenciar seu tempo e aumentar sua produtividade</p>
  
  <p>
    <a href="https://chronos.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/🌐_Ver_Demo-Live-success?style=for-the-badge" alt="Ver Demo">
    </a>
  </p>
</div>

<br />

## 📋 Sobre o Projeto

**Chronos Pomodoro** é uma aplicação web completa desenvolvida para auxiliar no gerenciamento de tempo utilizando a técnica Pomodoro. O projeto foi construído com foco em código limpo, arquitetura escalável e experiência do usuário.

A aplicação permite que os usuários:
- ⏰ Iniciem sessões de foco com timer personalizável
- ☕ Façam pausas curtas e longas entre ciclos
- 📊 Visualizem histórico completo de tarefas
- ⚙️ Configurem tempos personalizados para foco e descanso
- 🎨 Alternem entre tema claro e escuro
- 🔔 Recebam notificações sonoras ao final de cada ciclo

<br />

## 🚀 Tecnologias Utilizadas

<div align="center">

### Core
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Components-161618?style=for-the-badge&logo=radixui&logoColor=white)

### Gerenciamento de Estado & Forms
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.65.0-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4.1.12-3E67B1?style=for-the-badge&logo=zod&logoColor=white)

### Routing & Notificações
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Sonner](https://img.shields.io/badge/Sonner-2.0.7-000000?style=for-the-badge&logo=react&logoColor=white)

### Tooling
![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![SWC](https://img.shields.io/badge/SWC-Compiler-orange?style=for-the-badge&logo=swc&logoColor=white)

</div>

<br />

## 🏗️ Arquitetura e Padrões

O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento:

### 📁 Estrutura de Pastas Organizada
```
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Context API para gerenciamento de estado global
├── pages/          # Páginas da aplicação
├── types/          # Definições TypeScript
├── utils/          # Funções utilitárias
├── workers/        # Web Workers para timer em background
└── styles/         # Estilos globais
```

### 🎯 Padrões Implementados
- **Context API + useReducer**: Gerenciamento de estado global eficiente
- **Web Workers**: Timer executado em thread separada para performance
- **Compound Components**: Componentes compostos para maior flexibilidade
- **Custom Hooks**: Lógica reutilizável encapsulada
- **TypeScript Strict Mode**: Tipagem forte em todo o projeto
- **Validação com Zod**: Validação de formulários type-safe
- **Atomic Design**: Componentes organizados por nível de complexidade

<br />

## 🎨 Features Técnicas

### ⚡ Performance
- Build otimizado com **Vite** e **SWC**
- Code splitting automático
- Lazy loading de rotas
- Web Workers para processamento em background

### 🎭 UI/UX
- Design system baseado em **shadcn/ui**
- Componentes acessíveis com **Radix UI**
- Tema claro/escuro com **next-themes**
- Animações suaves com **Tailwind CSS**
- Toast notifications com **Sonner**

### 🔒 Qualidade de Código
- **TypeScript** para type safety
- **ESLint** com regras customizadas
- Validação de formulários com **Zod**
- Commit message linting
- Componentização e reutilização

<br />

## 💻 Como Executar

```bash
# Clone o repositório
git clone https://github.com/wesleylopex/chronos-pomodoro.git

# Entre na pasta do projeto
cd chronos-pomodoro

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

<br />

## 🏃 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o linter
```

<br />

## 🌐 Deploy

A aplicação está hospedada na **Vercel** com CI/CD automático:

**[🔗 Acessar Aplicação](https://chronos.vercel.app)**

<br />

## 📝 Funcionalidades Principais

### 🏠 Página Inicial
- Timer visual com contagem regressiva
- Formulário para criar nova tarefa
- Controles para iniciar/pausar timer
- Indicador do ciclo atual (foco/descanso)

### 📜 Histórico
- Listagem completa de tarefas concluídas
- Status de cada tarefa (completa, interrompida, em andamento)
- Filtros e busca
- Interface responsiva com tabela

### ⚙️ Configurações
- Personalização do tempo de foco (25min padrão)
- Configuração de pausas curtas (5min padrão)
- Configuração de pausas longas (15min padrão)
- Validação de formulários

<br />

## 🧠 Aprendizados e Desafios

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- Gerenciamento de estado complexo com Context API e useReducer
- Implementação de Web Workers para melhor performance
- Validação avançada de formulários com React Hook Form e Zod
- Criação de design system escalável
- Deploy e CI/CD com Vercel
- Boas práticas de TypeScript

<br />

## 👨‍💻 Autor

Desenvolvido com ❤️ por **Wesley Lopes**

<div align="center">
  
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://chronos.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesleylopex)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wesleylopex)

</div>

<br />

## 📄 Licença

Este projeto é de código aberto e está disponível para fins de portfólio e aprendizado.

---

<div align="center">
  <p>⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!</p>
</div>

# Planejamento da Plataforma Akademos

## 1. Visão Geral e Identidade Visual (Estética Divina Grega)
A Akademos não é apenas mais uma plataforma de cursos; é um santuário de aprendizado de alto nível. Para nos diferenciarmos de concorrentes como Kiwify e Hotmart, a plataforma terá um foco profundo na **conexão humana** e na **jornada do conhecimento**.

**Diretrizes Visuais:**
*   **Cores:** Tons de branco marmorizado, dourado (ouro leve e fosco) para destacar CTAs, azul profundo ou vinho clássico (bordô) para criar contraste e elegância.
*   **Tipografia:** Fontes Serifadas elegantes para títulos (ex: *Playfair Display*, *Cinzel* ou *Merriweather*) que remetam à gravura clássica, combinadas com fontes Sans-Serif modernas e legíveis para o corpo do texto (ex: *Inter*, *Lato* ou *Montserrat*).
*   **Elementos Gráficos:** Texturas sutis de mármore, pilares estilizados, efeitos de luz (iluminação divina/conhecimento) e design minimalista e amplo (bastante *white space*). O ambiente deve transmitir sabedoria, excelência e exclusividade. Adicionaremos toques de "Glassmorphism" (Efeito de Vidro Suave) nos elementos flutuantes para dar um ar etéreo e moderno que contrasta elegantemente com a solidez clássica.

## 2. Arquitetura do Projeto (Angular)
O projeto será desenvolvido utilizando **Angular** (versão mais recente, focando em Standalone Components para maior modularidade).
A arquitetura seguirá os princípios do *Domain-Driven Design (DDD)* adaptado para o frontend, garantindo que a plataforma seja escalável.

**Estrutura de Diretórios Proposta:**
- `agents/`: Pasta centralizada e dedicada aos agentes automatizados e validadores (Fora das instâncias das features).
- `core/`: Serviços globais, interceptors, guards, configurações de tema e estado.
- `shared/`: Componentes visuais reutilizáveis (botões dourados, cards de mármore, inputs), pipes e diretivas.
- `features/`: Módulos ou domínios independentes da aplicação.

## 3. Agentes de Validação e Documentação (A Harmonia do Sistema)
Para garantir que a base de código evolua de forma sólida, coesa e que mantenha o altíssimo nível exigido, a lógica dos nossos agentes (que habitarão `agents/`) seguirá o seguinte escopo de trabalho contínuo:
*   **Agente Guardião do Design System:** Responsável por checar se introduções de UI seguem estritamente as variáveis de layout. Validará a aplicação das cores douradas e de mármore, espaçamentos, fontes serifadas e o uso adequado de Glassmorphism, prevenindo adições "genéricas".
*   **Agente Guardião da Arquitetura:** Validará a integridade do código estrutural. Checará por imports circulares, a correta divisão entre `core`, `shared` e `features`, e garantirá a correta modularidade dos Standalone Components propostos.
*   **Agente Escriba (Documentador):** Para cada nova feature, este agente extrairá e sintetizará o propósito técnico e negocial, formatando e atualizando a documentação base da plataforma para assegurar um histórico impecável.

## 4. Gitflow e Metodologia
Cada etapa será implementada de forma iterativa, garantindo a solidez antes de avançar para a próxima. O modelo adotado será o **Gitflow**:
*   `main`: Produção.
*   `develop`: Ambiente de testes e integração.
*   `feature/*`: Ramos dedicados para cada nova funcionalidade (ex: `feature/landing-page`, `feature/auth`).

## 5. Etapas de Desenvolvimento (Roadmap)

### Fase 1: Fundação e A Primeira Impressão
*   **Setup Inicial:** Criação do projeto Angular, configuração de linting, formatação e arquitetura base.
*   **Design System Base:** Configuração de tipografias, paleta de cores (mármore e dourado) e componentes globais (Navbar, Footer, Botões).
*   **A Jornada da Landing Page (Scrollytelling):** O desenvolvimento da Landing Page seguirá uma abordagem imersiva estilo *Apple Product Page*, guiando o usuário por 6 cenas principais através de *scroll-driven animations* (utilizando GSAP e ScrollTrigger):
    1.  **O Protagonista:** Foco absoluto no usuário ("O centro do conhecimento é você").
    2.  **A Excelência:** Apresentação elegante da curadoria de cursos com efeito *parallax*.
    3.  **O Legado:** O usuário como aprendiz e mestre ("Aprenda. Transforme. Ensine.").
    4.  **A Fortaleza:** Transmitir segurança absoluta, focada na propriedade intelectual e nas transações.
    5.  **O Motor:** Mostrar a leveza e a genialidade invisível da plataforma ("Zero atrito").
    6.  **O Desfecho (Bento Grid):** Síntese final das funcionalidades e o Call to Action para "Iniciar a Jornada".

### Fase 2: Identidade e Acesso (Autenticação)
*   **Fluxo de Autenticação:** Login, Cadastro e Recuperação de Senha.
*   **Perfil do Usuário (O Cidadão de Akademos):** Tela para professores e alunos, onde os deuses e aprendizes (metaforicamente) exibem seus conhecimentos e jornadas.

### Fase 3: O Templo do Saber (Exploração de Cursos & Curadoria) - ✅ *Catálogo Concluído*
*   **Catálogo e Vitrine Magna:** Lista de cursos com cards elegantes "Glassmorphism", carrossel iterativo de "Destaques no Olimpo", sistema de busca unificada inteligente e listagem de "Mestres Renomados". ✅
*   **Detalhes do Curso:** Uma página inspiradora que converte o visitante em aluno, com descrições, vídeo introdutório e avaliações. ⏳ *(Planejado)*

### Fase 3.5: O Oráculo (Dashboard de Progressão e Insights) - 📍 *Próximo Grande TODO*
*   Um dashboard unificado e avançado para Aprendizes e Mentores acompanharem o progresso, engajamento e jornada intelectual. O layout e a estratégia de gamificação para essa tela ainda exigirão uma sessão densa de Brainstorming criativo e arquitetural.

### Fase 4: O Anfiteatro (Consumo de Conteúdo)
*   **Player de Cursos:** O ambiente principal de aprendizado. Com comentários nativos, divisões por módulos e anotações atreladas ao tempo do vídeo.

### Fase 5: O Tesouro (Pagamentos)
*   **Checkout Diferenciado:** Sistema de pagamentos seguro, oferecendo uma experiência fluida, contínua e sem atritos.

### Fase 6: O Fórum (Conexão e Comunidade)
*   **Chat em Tempo Real:** Conversa direta com o tutor ou sistema de dúvidas.
*   **Videochamadas 1:1:** O grande diferencial para mentorias premium.

---
*Documento vivo de arquitetura. O planejamento será revisto a cada fase concluída.*

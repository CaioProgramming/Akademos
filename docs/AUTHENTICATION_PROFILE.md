# Implementação: Autenticação e Perfil de Usuário

Este documento detalha o escopo técnico e as decisões tomadas durante a implementação do fluxo de autenticação e da página de perfil do usuário.

## 1. Módulo de Autenticação (Modais)

A arquitetura de autenticação foi desenvolvida através de modais flutuantes (`standalone components`) injetados dinamicamente na visualização principal, evitando mudanças bruscas de contexto (redirecionamento de rotas) na fase de "onboarding".

### 1.1. LoginModalComponent (`/features/auth/login-modal`)
*   **Finalidade:** Tela de entrada principal.
*   **Estrutura:** Formulário reativo para validação de E-mail e Senha. 
*   **Integrações Ui:** Contém um botão primário com gradiente dourado e uma integração (desativada no escopo inicial) para provedores OAuth (Google).
*   **Responsividade:** O contêiner do modal foi restrito por `max-height: 85vh` e `overflow-y: auto`, criando uma *safe zone* que impede que o conteúdo exceda as margens verticais da janela do navegador, ativando rolagem interna caso necessário.

### 1.2. RegisterModalComponent (`/features/auth/register-modal`)
*   **Finalidade:** Motor de inscrição fragmentado por tipos de usuário.
*   **Estrutura:** Implementa uma seleção de perfil base ("Aprendiz" e "Mentor"). A seleção altera o estado (`selectedType`) e garante interações CSS específicas, como o preenchimento da borda e uma leve transição de escala visual (`transform: scale(1.02)`).
*   **Limites:** Reaproveita a estrutura de limite espacial (Safe Zone) implementada no componente de login, com adaptações de `padding` global para monitores `< 600px`.

### 1.3. ForgotPasswordModalComponent (`/features/auth/forgot-password-modal`)
*   **Finalidade:** Fluxo rápido de recuperação de credenciais.
*   **Estrutura:** Input simplificado com validação de tipagem em formulário de estado único para despacho do link de e-mail. Links diretos na interface do footer para regresso ao modal de Login.

---

## 2. Perfil de Usuário (`/features/profile`)

*   **Finalidade:** Painel de controle individual (`dashboard`) e representação da entidade do usuário final no banco de dados.
*   **Estrutura técnica:** Componente autônomo (Standalone) contendo grid layout.
*   **Layout:**
    *   **Side-panel (Esquerda):** Focado em "Identidade", contém Avatar centralizado, bio, status e botões de `Edit Profile`.
    *   **Main-panel (Direita):** Subdividido através de cartões (glassmorphism) que segregam "Atividades Recentes" ou painéis de progresso educacional.
*   **Aparência:** Segue os padrões do Design System com backgrounds dependentes de variáveis contextuais (`var(--bg-surface)`) para espelhar perfeitamente o *Light Mode* (Mármore Claro) e o *Dark Mode* (Mármore Escuro).

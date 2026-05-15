Esta é uma Single Page Application (SPA) responsiva desenvolvida em React para envio de mensagens de contato diretamente para um e-mail configurado, utilizando o serviço EmailJS.

Funcionalidades
Envio de E-mail Real: Integração direta com provedor de e-mail (Gmail) via EmailJS.

Validação de Formulário: O botão de envio permanece desabilitado até que todos os campos (nome, e-mail e mensagem) sejam preenchidos corretamente.

Tratamento de Dados: Uso do método .trim() para evitar envios com campos contendo apenas espaços vazios.

Interface Responsiva: Estilização moderna com feedback visual de foco e estados de botão.

Configuração do EmailJS
No arquivo App.js, a função emailjs.send utiliza essas chaves e o objeto

const templateParams = {
  from_name: name,
  email: email,
  message: message
}

emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams, "SUA_PUBLIC_KEY")

Nota de Segurança: Este projeto utiliza um arquivo .env para gerenciar as credenciais do EmailJS. Por questões de segurança, este arquivo está listado no .gitignore e não é enviado para o repositório público.

Tecnologias Utilizadas
React.js - Biblioteca Javascript para interfaces.

EmailJS - Serviço para envio de e-mails via Client-side.

CSS3 - Estilização customizada.

PARA ACESSAR O PROJETO

Instalação e Configuração

Clone o repositório: 

Instale as dependências: npm install

instale o SDK do EmailJS: npm install @emailjs/browser
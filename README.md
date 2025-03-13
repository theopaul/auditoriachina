# Auditoria China - Landing Page

Landing page para serviços de auditoria de fábricas na China, desenvolvida para a empresa Destino China.

## Visão Geral

Esta landing page foi criada para promover os serviços de auditoria de fábricas oferecidos pela empresa no mercado chinês, fornecendo informações sobre os serviços, benefícios e facilitando o contato com potenciais clientes.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Integração com HubSpot (preparada para implementação)

## Estrutura do Projeto

```
auditoriachina/
├── index.html         # Página principal
├── styles.css         # Folha de estilos
├── scripts.js         # JavaScript
├── icons/             # Pasta com ícones SVG
│   ├── whatsapp.svg
│   ├── email.svg
│   ├── phone.svg
│   └── ...
├── images/            # Pasta para imagens (a ser adicionada)
└── README.md          # Este arquivo
```

## Instruções para Desenvolvimento

### Para Testar Localmente

1. Clone este repositório:
```
git clone https://github.com/theopaul/auditoriachina.git
```

2. Abra o arquivo `index.html` em seu navegador para visualizar a página.

### Para Implementar no Servidor

1. Copie todos os arquivos para o diretório `/srv/websites/auditoriachina.com.br/` no servidor.

2. Configure o servidor web (Apache, Nginx, etc.) para servir o site a partir deste diretório.

## Integração com HubSpot

Para integrar o formulário de contato com o HubSpot:

1. Crie um formulário no HubSpot e obtenha o Portal ID e Form ID.

2. No arquivo `index.html`, localize a tag `<form>` e atualize o atributo `action` com os IDs corretos:
```html
<form id="contactForm" action="https://api.hsforms.com/submissions/v3/integration/submit/YOUR_PORTAL_ID/YOUR_FORM_ID" method="post">
```

3. No arquivo `scripts.js`, descomente e configure a função `sendToHubspot()` com os IDs corretos.

## Contato

Para qualquer dúvida ou suporte:
- Email: suporte@destinochina.com
- WhatsApp: [Clique aqui](https://destinochina.com/whatsapp)
- Telefone: +86 13611996578
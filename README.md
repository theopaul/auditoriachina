# Auditoria China - Landing Page

Landing page para serviços de auditoria de fábricas na China, desenvolvida para a empresa Destino China.

## Visão Geral

Esta landing page foi criada para promover os serviços de auditoria de fábricas oferecidos pela empresa no mercado chinês, fornecendo informações sobre os serviços, benefícios e facilitando o contato com potenciais clientes.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Integração com HubSpot (implementada)

## Estrutura do Projeto

```
auditoriachina/
├── index.html             # Página principal
├── styles.css             # Folha de estilos
├── scripts.js             # JavaScript
├── icons/                 # Pasta com ícones SVG
│   ├── whatsapp.svg
│   ├── email.svg
│   ├── phone.svg
│   └── ...
├── optimized_photos/      # Pasta com imagens otimizadas
│   ├── auditoria-logo-rectangular.png
│   ├── auditoria-china-logo-square.png
│   ├── auditoria-china-fabricas-1.png
│   └── ...
└── README.md              # Este arquivo
```

## Atualizações Recentes

- Remoção do texto "Auditoria China" ao lado do logo no cabeçalho
- Adição de filtro para deixar o logo do rodapé branco
- Atualização das imagens dos serviços e hero section
- Adição de informações da empresa no rodapé (CNPJ, endereço e telefone)
- Integração com formulário HubSpot

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

O formulário de contato já está integrado com HubSpot:

1. O script do HubSpot está carregado no final da página:
```html
<script src="https://js.hsforms.net/forms/embed/48921096.js" defer></script>
```

2. O formulário é carregado no div com a classe `hs-form-frame`:
```html
<div class="hs-form-frame" data-region="na1" data-form-id="8b0c61e0-ced4-4b00-86b9-e2c0bfad69b6" data-portal-id="48921096"></div>
```

## Contato

Para qualquer dúvida ou suporte:
- Email: suporte@destinochina.com
- WhatsApp: [Clique aqui](https://destinochina.com/whatsapp)
- Telefone: +86 13611996578
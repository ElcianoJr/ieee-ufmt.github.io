# Site do Ramo Estudantil IEEE UFMT

Site de uma página (HTML, CSS e JavaScript puros). Não precisa instalar nada nem rodar build: abra o `index.html` no navegador para ver, ou publique direto no GitHub Pages.

## Estrutura

```
index.html              conteúdo e textos da página
assets/css/style.css    cores, fontes e layout (as cores ficam no começo do arquivo)
assets/js/main.js       menu do celular e destaque do menu ao rolar
assets/img/logo.svg     logo no cabeçalho e no rodapé (provisória)
assets/img/mascote.svg  imagem central do topo da página (provisória)
assets/img/favicon.svg  ícone da aba do navegador (provisório)
```

## Como trocar logo, mascote e fotos

1. Coloque o arquivo novo em `assets/img/` com o mesmo nome (`logo.svg`, `mascote.svg`). Se a imagem for PNG ou WebP, use o nome novo e ajuste o `src` correspondente no `index.html`.
2. Para usar uma foto em um projeto, adicione dentro de `.project__media`: `<img src="assets/img/foto.jpg" alt="Descrição da foto">`. Ela cobre o ícone e o degradê.
3. A logo do ramo deve seguir as regras de marca do IEEE. Os modelos oficiais (identificador de ramo estudantil, logotipos) ficam no [IEEE Students Visual Identity Toolkit](https://brand-experience.ieee.org/guidelines/sub-brand-resources/students).

## Pendências (procure por `TODO` no `index.html`)

- Links reais de Instagram, LinkedIn e GitHub no rodapé (hoje estão como `#`).
- E-mail de contato: o site usa `ramoieee@ufmt.br`. Confirme se é o endereço correto.
- Número de membros ativos no topo da página ("Mais de 10 estudantes").
- Se o ramo tiver um formulário de inscrição (Google Forms, por exemplo), troque o link do botão "Quero participar".
- `og:image` e `og:url` para a prévia ao compartilhar o link, quando o endereço definitivo existir.

## Publicar no GitHub Pages

1. Envie todos os arquivos para a raiz do repositório (branch `main`).
2. No GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, escolha `main` e a pasta `/ (root)`.
3. Em alguns minutos o site fica no ar.

**Atenção ao endereço:** um repositório chamado `ieee-ufmt.github.io` só publica em `https://ieee-ufmt.github.io` se pertencer a uma conta ou organização chamada `ieee-ufmt`. Dentro de uma conta pessoal, o endereço fica `https://NOME-DA-CONTA.github.io/ieee-ufmt.github.io/`. O site funciona nos dois casos, porque os caminhos dos arquivos são relativos. Criar uma organização `ieee-ufmt` no GitHub é a melhor opção para o ramo: o site deixa de depender da conta pessoal de quem o criou e a diretoria pode passar o acesso adiante a cada gestão.

# Luis Buittons Infantil — Landing Page em React

Trabalho individual de Desenvolvimento Frontend II (UVA). Peguei parte do site "Luis Buittons", que fizemos em grupo na Parte 1, e migrei pra uma Landing Page em React + Vite, com foco na linha infantil.

## Quem fez

[RAFAEL LEANDRO CARDOSO MANHÃES] — matrícula [121260125986]

## De onde veio esse projeto

Esse projeto é a migração individual do trabalho em grupo "Luis Buittons":
- Repositório do grupo (original): https://github.com/Regina-Beatriz-dev/Luis-Buittons.git
- Página `index.html`: feita pela Maria Eduarda Oliveira Silva, do grupo
- Página migrada (além do index): Infantil (`infantil.html`), de minha autoria

Na Parte 1 a página infantil ficou só como esqueleto, sem conteúdo, porque eu não consegui terminar a tempo. Por isso, antes de migrar, eu finalizei ela em HTML (com produtos, filtros e o mesmo padrão visual das outras páginas do grupo) e só depois passei pra React.

## Site publicado

🔗 **Netlify:** (https://luisbuittonsinfantil.netlify.app)]

## Como rodar o projeto na sua máquina

```bash
git clone https://github.com/Morningss2/Luis-buittons-react.git
cd Luis-buittons-react
npm install
npm run dev
```

Depois é só abrir `http://localhost:5173` no navegador.

## O que veio de onde

| Seção da página | Componente React | Vinha de onde |
|---|---|---|
| Menu do topo | `Navbar.jsx` | `index.html` |
| Banner inicial | `Hero.jsx` | `index.html` |
| Produtos em destaque | `Destaques.jsx` | `index.html` |
| Catálogo com filtro | `Infantil.jsx` | `infantil.html` |
| Chamada final | `ChamadaFinal.jsx` | Seção nova, criada pra esse projeto |
| Rodapé e contato | `Footer.jsx` | Novo — o site original não tinha rodapé |

## Tecnologias

- React + Vite
- Bootstrap 5
- Font Awesome (ícones)
- Google Fonts (Playfair Display + Inter)
- Imagens do [Pexels](https://www.pexels.com) (uso gratuito)

## Algumas decisões que tomei

- Os produtos ficam guardados num array de dados (`src/data/produtos.js`), e os cards são gerados automaticamente com `.map()`, sem repetir o mesmo bloco de código pra cada produto.
- O filtro do catálogo infantil usa `useState` pra guardar qual categoria tá selecionada, e a lista atualiza sozinha quando o filtro muda.
- Os botões do filtro também são gerados a partir dos dados: se eu mudar uma categoria no `produtos.js`, o botão acompanha.
- Os produtos em destaque são escolhidos a partir da mesma lista do catálogo, pra não duplicar informação.
- O menu usa âncoras (`#secao`) em vez de links pra páginas separadas, já que o site virou uma página só, de rolagem contínua.
- Troquei as fotos de crianças posando por imagens que valorizam a roupa, pra combinar mais com a identidade de luxo da marca.
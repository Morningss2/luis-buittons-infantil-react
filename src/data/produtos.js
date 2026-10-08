export const produtosInfantil = [
  {
    id: 'inf-01',
    nome: 'Conjunto Azul Clássico',
    categoria: 'Menino',
    preco: 180.00,
    imagem: '/imagens/menino-01.jpg',
  },
  {
    id: 'inf-02',
    nome: 'Conjunto Alfaiataria Mini',
    categoria: 'Menino',
    preco: 220.00,
    imagem: '/imagens/menino-02.jpg',
  },
  {
    id: 'inf-03',
    nome: 'Macacão Cinza em Algodão',
    categoria: 'Menina',
    preco: 160.00,
    imagem: '/imagens/menina-01.jpg',
  },
  {
    id: 'inf-04',
    nome: 'Vestido CLássico Rosa Pastel',
    categoria: 'Menina',
    preco: 190.00,
    imagem: '/imagens/menina-02.jpg',
  },
  {
    id: 'inf-05',
    nome: 'Conjunto Tricô Bege',
    categoria: 'Bebê',
    preco: 140.00,
    imagem: '/imagens/bebe-01.jpg',
  },
  {
    id: 'inf-06',
    nome: 'Body Little Tiger',
    categoria: 'Bebê',
    preco: 90.00,
    imagem: '/imagens/bebe-02.jpg',
  },
];

// Os destaques são os 3 primeiros produtos do catálogo infantil
export const produtosDestaque = produtosInfantil.slice(0, 3);
import { useState } from 'react';
import { produtosInfantil } from '../data/produtos';

export default function Infantil() {
  const [filtro, setFiltro] = useState('Todos');

  const produtosFiltrados =
    filtro === 'Todos'
      ? produtosInfantil
      : produtosInfantil.filter((produto) => produto.categoria === filtro);

  const categorias = ['Todos', 'Menino', 'Menina', 'Bebê'];

  return (
    <section
      id="infantil"
      style={{
        padding: '4rem 0',
        backgroundColor: '#fff',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <span
            style={{
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              letterSpacing: '2px',
              color: 'var(--brand-accent)',
            }}
          >
            Catálogo Completo
          </span>

          <h2 style={{ fontSize: '2.2rem' }}>
            Moda Infantil
          </h2>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {categorias.map((cat) => (
            <button
              key={cat}
              className="btn"
              style={{
                backgroundColor:
                  filtro === cat
                    ? 'var(--brand-primary)'
                    : 'transparent',
                color:
                  filtro === cat
                    ? '#fff'
                    : 'var(--brand-primary)',
                border: '1px solid var(--brand-primary)',
              }}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-center text-muted small mb-4">
          Mostrando {produtosFiltrados.length} produtos
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {produtosFiltrados.map((produto) => (
            <div className="col" key={produto.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={produto.imagem}
                  className="card-img-top"
                  alt={produto.nome}
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                  }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <span className="text-muted small text-uppercase mb-1">
                    {produto.categoria}
                  </span>

                  <h5 className="card-title fs-6">
                    {produto.nome}
                  </h5>

                  <p className="fw-bold mb-3 mt-auto">
                    {produto.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>

                  <button className="btn btn-dark w-100">
                    <i className="fa-solid fa-cart-shopping me-2"></i>
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
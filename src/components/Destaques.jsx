import { produtosDestaque } from '../data/produtos';

export default function Destaques() {
  return (
    <section
      id="destaques"
      className="py-5"
      style={{
        backgroundColor: 'var(--bg-light)',
      }}
    >
      <div className="container py-4">
        <div className="text-center mb-5">
          <span
            className="text-uppercase"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '2px',
              color: 'var(--brand-accent)',
            }}
          >
            Seleção especial
          </span>

          <h2
            className="mt-2"
            style={{
              fontFamily: 'Georgia, serif',
              color: 'var(--brand-primary)',
            }}
          >
            Destaques
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Conheça alguns dos produtos selecionados da Luis Buittons.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {produtosDestaque.map((produto) => (
            <div className="col" key={produto.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={produto.imagem}
                  className="card-img-top"
                  alt={produto.nome}
                  style={{
                    height: '320px',
                    objectFit: 'cover',
                  }}
                />

                <div className="card-body text-center d-flex flex-column">
                  <span className="text-muted small text-uppercase mb-2">
                    {produto.categoria}
                  </span>

                  <h3 className="h5">
                    {produto.nome}
                  </h3>

                  <p className="fw-bold mt-auto mb-3">
                    {produto.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>

                  <a
                    href="#infantil"
                    className="btn btn-dark"
                  >
                    Ver coleção
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer
      id="contato"
      style={{ backgroundColor: 'var(--brand-primary)', color: '#fff', padding: '3rem 0 2rem' }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-4">
            <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>Luis Buittons</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: 0 }}>
              Moda atemporal, feita pra durar.
            </p>
          </div>

          <div className="col-md-4">
            <h4 style={{ fontSize: '1rem', color: '#fff' }}>Navegação</h4>
            <ul className="list-unstyled mb-0">
              <li><a href="#inicio" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Início</a></li>
              <li><a href="#destaques" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Destaques</a></li>
              <li><a href="#infantil" style={{ color: '#fff', textDecoration: 'none', opacity: 0.85 }}>Infantil</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4 style={{ fontSize: '1rem', color: '#fff' }}>Contato</h4>
            <p style={{ opacity: 0.85, fontSize: '0.9rem', marginBottom: 0 }}>
              contato@luisbuittons.com.br<br />
              Rio de Janeiro, RJ
            </p>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.25)', margin: '2rem 0 1rem' }} />
        <p className="text-center mb-0" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
          © 2026 Luis Buittons. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
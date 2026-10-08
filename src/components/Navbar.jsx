export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
      }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#inicio"
          style={{
            fontFamily: 'Georgia, serif',
            color: 'var(--brand-primary)',
            fontSize: '1.5rem',
            fontWeight: '600',
          }}
        >
          Luis Buittons
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Início
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#destaques">
                Destaques
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#infantil">
                Infantil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#chamada-final">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
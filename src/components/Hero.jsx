export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div
          className="text-center text-white mx-auto"
          style={{ maxWidth: '750px' }}
        >
          <span
            className="text-uppercase"
            style={{
              fontSize: '0.85rem',
              letterSpacing: '3px',
            }}
          >
            Luis Buittons
          </span>

          <h1
            className="mt-3 mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.3rem, 6vw, 4rem)',
              fontWeight: '400',
            }}
          >
            Elegância para os pequenos
          </h1>

          <p className="lead mb-4">
            Descubra nossa seleção de moda infantil, criada para acompanhar
            cada momento com conforto e estilo.
          </p>

          <a
            href="#infantil"
            className="btn btn-light px-4 py-2"
          >
            Ver coleção infantil
          </a>
        </div>
      </div>
    </section>
  );
}
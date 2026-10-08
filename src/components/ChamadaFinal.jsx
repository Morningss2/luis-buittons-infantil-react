export default function ChamadaFinal() {
  return (
    <section
      id="chamada-final"
      className="py-5"
      style={{
        backgroundColor: 'var(--brand-primary)',
        color: '#ffffff',
      }}
    >
      <div className="container text-center py-4">
        <span
          className="text-uppercase"
          style={{
            fontSize: '0.85rem',
            letterSpacing: '2px',
          }}
        >
          Moda Infantil
        </span>

        <h2 className="mt-3 mb-3">
          Encontre o look ideal para os pequenos
        </h2>

        <p
          className="mx-auto mb-4"
          style={{
            maxWidth: '650px',
            opacity: 0.9,
          }}
        >
          Confira nossa coleção infantil e encontre opções para
          meninos, meninas e bebês.
        </p>

        <a
          href="#infantil"
          className="btn btn-light px-4 py-2"
        >
          Ver coleção infantil
        </a>
      </div>
    </section>
  );
}
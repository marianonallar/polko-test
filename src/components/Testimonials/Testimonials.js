import './Testimonials.css';

const testimonials = [
  {
    initials: 'LM',
    name: 'Laura M.',
    role: 'Conductora — Córdoba',
    stars: 5,
    text: 'Coticé en menos de 3 minutos y ahorré casi un 30% respecto a lo que pagaba antes. Nunca fue tan fácil contratar un seguro.',
  },
  {
    initials: 'DR',
    name: 'Diego R.',
    role: 'Productor de seguros — Rosario',
    stars: 5,
    text: 'Polko transformó mi forma de trabajar. Puedo cotizar y gestionar todo desde el celular. Mis clientes están mucho más satisfechos.',
  },
  {
    initials: 'VS',
    name: 'Valentina S.',
    role: 'Emprendedora — CABA',
    stars: 5,
    text: 'Súper simple y transparente. Sin letra chica, sin sorpresas. Contraté el seguro de mi moto en 5 minutos. Lo recomiendo.',
  },
];

function Stars({ count }) {
  return (
    <span className="testimonials__stars" aria-label={`${count} estrellas de 5`}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials" aria-label="Testimonios de clientes">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Lo que dicen nuestros clientes</h2>
        <p className="testimonials__subtitle">
          Miles de personas ya eligieron Polko para proteger lo que más importa.
        </p>
        <ul className="testimonials__grid">
          {testimonials.map((t) => (
            <li key={t.name} className="testimonials__card">
              <Stars count={t.stars} />
              <blockquote className="testimonials__quote">"{t.text}"</blockquote>
              <footer className="testimonials__author">
                <div className="testimonials__avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="testimonials__name">{t.name}</p>
                  <p className="testimonials__role">{t.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import polkoIcon from '../../assets/logos/polko-icon.svg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Propuesta de valor principal">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">Para brokers y productores de seguros</span>
          <h1 className="hero__title">
            Cotizá, emití y gestioná seguros <span className="hero__title-highlight">desde una sola plataforma</span>
          </h1>
          <p className="hero__subtitle">
            Una plataforma para comparar aseguradoras, emitir pólizas y gestionar clientes de forma simple, rápida y digital.
          </p>
          <div className="hero__actions">
            <a href="#funcionalidades" className="btn btn--hero-primary">
              Ver funcionalidades
            </a>
            <a href="#aseguradoras" className="btn btn--secondary">
              Aseguradoras integradas
            </a>
          </div>
          <p className="hero__disclaimer">Sin instalaciones. 100% online.</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img
            src={polkoIcon}
            alt=""
            className="hero__icon"
            width="280"
            height="280"
          />
        </div>
      </div>
    </section>
  );
}

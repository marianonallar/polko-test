import atmLogo from '../../assets/logos/aseguradoras/atm.svg';
import expertaLogo from '../../assets/logos/aseguradoras/experta.svg';
import federacionLogo from '../../assets/logos/aseguradoras/federacion-patronal.svg';
import mercantilLogo from '../../assets/logos/aseguradoras/mercantil-andina.svg';
import rivadaviaLogo from '../../assets/logos/aseguradoras/rivadavia.svg';
import rusLogo from '../../assets/logos/aseguradoras/rus.svg';
import sancorLogo from '../../assets/logos/aseguradoras/sancor.svg';
import terrawindLogo from '../../assets/logos/aseguradoras/terrawind.svg';
import zurichLogo from '../../assets/logos/aseguradoras/zurich.svg';
import './Aseguradoras.css';

const aseguradoras = [
  { src: atmLogo, alt: 'ATM Seguros' },
  { src: expertaLogo, alt: 'Experta Seguros' },
  { src: federacionLogo, alt: 'Federación Patronal Seguros' },
  { src: mercantilLogo, alt: 'Mercantil Andina Seguros' },
  { src: rivadaviaLogo, alt: 'Rivadavia Seguros' },
  { src: rusLogo, alt: 'RUS Seguros' },
  { src: sancorLogo, alt: 'Sancor Seguros' },
  { src: terrawindLogo, alt: 'Terrawind Seguros' },
  { src: zurichLogo, alt: 'Zurich Seguros' },
];

export default function Aseguradoras() {
  return (
    <section id="aseguradoras" className="aseguradoras" aria-label="Aseguradoras con las que trabajamos">
      <div className="aseguradoras__container">
        <h2 className="aseguradoras__title">Trabajamos con las mejores aseguradoras</h2>
        <p className="aseguradoras__subtitle">
          Cotizamos en tiempo real entre las compañías líderes del mercado argentino.
        </p>
        <ul className="aseguradoras__grid" aria-label="Lista de aseguradoras">
          {aseguradoras.map((aseguradora) => (
            <li key={aseguradora.alt} className="aseguradoras__item">
              <img
                src={aseguradora.src}
                alt={aseguradora.alt}
                className="aseguradoras__logo"
                width="120"
                height="60"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

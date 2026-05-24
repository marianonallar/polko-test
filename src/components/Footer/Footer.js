import logo from '../../assets/logos/polko-logo-secondary.png';
import './Footer.css';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Polko" className="footer__logo" width="120" height="44" loading="lazy" />
          <p className="footer__tagline">
            La manera más simple de cotizar y contratar tu seguro en Argentina.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <div className="footer__col">
            <h3 className="footer__col-title">Polko</h3>
            <ul className="footer__links">
              <li><a href="#inicio" className="footer__link">Inicio</a></li>
              <li><a href="#aseguradoras" className="footer__link">Aseguradoras</a></li>
              <li><a href="#funcionalidades" className="footer__link">Funcionalidades</a></li>
              <li><a href="#testimonios" className="footer__link">Testimonios</a></li>
              <li><a href="#faq" className="footer__link">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__links">
              <li><a href="/terminos" className="footer__link">Términos y condiciones</a></li>
              <li><a href="/privacidad" className="footer__link">Política de privacidad</a></li>
              <li><a href="/defensa-consumidor" className="footer__link">Defensa del consumidor</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} Polko. Todos los derechos reservados. Actividad bajo supervisión de la SSN.
        </p>
      </div>
    </footer>
  );
}

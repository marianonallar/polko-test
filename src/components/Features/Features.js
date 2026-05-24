import cotizacionImg from '../../assets/images/feature-cotizacion.jpg';
import dashboardImg from '../../assets/images/feature-dashboard.jpg';
import aseguradorasImg from '../../assets/images/feature-aseguradoras.jpg';
import canalDigitalImg from '../../assets/images/feature-canal-digital.jpg';
import academiaImg from '../../assets/images/feature-academia.jpg';
import gestionImg from '../../assets/images/feature-gestion.jpg';
import './Features.css';

const features = [
  {
    img: cotizacionImg,
    title: 'Cotización online',
    description: 'Completá un formulario simple y recibí en segundos las mejores opciones del mercado, ordenadas por precio y cobertura.',
  },
  {
    img: dashboardImg,
    title: 'Dashboard de gestión',
    description: 'Administrá todas tus pólizas en un solo lugar. Vencimientos, coberturas y renovaciones al alcance de un clic.',
  },
  {
    img: aseguradorasImg,
    title: 'Comparador de aseguradoras',
    description: 'Comparamos en tiempo real entre 9 compañías líderes para que elijas la opción que mejor se adapta a tus necesidades.',
  },
  {
    img: canalDigitalImg,
    title: 'Canal 100% digital',
    description: 'Contratá y gestioná tu seguro desde cualquier dispositivo, en cualquier momento, sin intermediarios ni papeles.',
  },
  {
    img: academiaImg,
    title: 'Academia Polko',
    description: 'Recursos educativos para que entiendas tu seguro: coberturas, franquicias, siniestros y todo lo que necesitás saber.',
  },
  {
    img: gestionImg,
    title: 'Gestión de pólizas',
    description: 'Realizá endosos, cambios de datos y renovaciones directamente desde la plataforma, sin llamadas ni esperas.',
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="features" aria-label="Funcionalidades de Polko">
      <div className="features__container">
        <h2 className="features__title">Todo lo que necesitás en un solo lugar</h2>
        <p className="features__subtitle">
          Diseñamos cada función pensando en hacerte la vida más fácil.
        </p>
        <ul className="features__grid">
          {features.map((feature) => (
            <li key={feature.title} className="features__card">
              <div className="features__card-img-wrapper">
                <img
                  src={feature.img}
                  alt={`Captura de pantalla: ${feature.title}`}
                  className="features__card-img"
                  loading="lazy"
                  width="400"
                  height="240"
                />
              </div>
              <div className="features__card-body">
                <h3 className="features__card-title">{feature.title}</h3>
                <p className="features__card-description">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

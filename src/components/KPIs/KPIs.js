import './KPIs.css';

const kpis = [
  { number: '+50.000', label: 'cotizaciones realizadas' },
  { number: '9', label: 'aseguradoras líderes' },
  { number: '+200', label: 'productores activos' },
  { number: '100%', label: 'online, sin papeles' },
];

export default function KPIs() {
  return (
    <section className="kpis" aria-label="Métricas y números de Polko">
      <div className="kpis__container">
        <ul className="kpis__grid">
          {kpis.map((kpi) => (
            <li key={kpi.label} className="kpis__card">
              <span className="kpis__number" aria-label={kpi.number}>{kpi.number}</span>
              <span className="kpis__label">{kpi.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

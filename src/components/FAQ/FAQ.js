import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: '¿Qué tipos de seguros puedo cotizar en Polko?',
    answer: 'Podés cotizar seguros de auto, moto, hogar y más. Trabajamos con 9 aseguradoras líderes del mercado argentino para ofrecerte la mejor cobertura al mejor precio.',
  },
  {
    question: '¿Cuánto tarda el proceso de cotización?',
    answer: 'El proceso es muy rápido: en menos de 3 minutos completás el formulario y recibís todas las opciones disponibles ordenadas por precio y cobertura.',
  },
  {
    question: '¿Polko es gratuito para el usuario?',
    answer: 'Sí, cotizar y comparar en Polko es completamente gratuito. Sin costo, sin registración previa y sin compromisos de contratación.',
  },
  {
    question: '¿Cómo sé que la aseguradora elegida es confiable?',
    answer: 'Todas las aseguradoras disponibles en Polko están reguladas por la Superintendencia de Seguros de la Nación (SSN) y cuentan con solvencia financiera verificada.',
  },
  {
    question: '¿Puedo gestionar mi póliza desde la plataforma?',
    answer: 'Sí. Una vez contratado tu seguro, podés ver vencimientos, coberturas, realizar endosos y gestionar renovaciones directamente desde tu dashboard en Polko.',
  },
  {
    question: '¿Qué pasa si tengo un siniestro?',
    answer: 'Desde tu panel en Polko podés denunciar el siniestro directamente. También te acompañamos durante todo el proceso para que la experiencia sea lo más sencilla posible.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq" aria-label="Preguntas frecuentes">
      <div className="faq__container">
        <h2 className="faq__title">Preguntas frecuentes</h2>
        <p className="faq__subtitle">
          Todo lo que necesitás saber antes de cotizar tu seguro.
        </p>
        <dl className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                <dt>
                  <button
                    className="faq__question"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span className="faq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${index}`}
                  className="faq__answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

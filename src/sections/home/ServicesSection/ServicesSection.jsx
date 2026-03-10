import Container from '../../../components/ui/Container/Container';
import SectionHeader from '../../../components/ui/SectionHeader/SectionHeader';
import Button from '../../../components/ui/Button/Button';
import styles from './ServicesSection.module.scss';
import { businessInfo } from '../../../data/businessInfo';

const services = [
  'Eventos',
  'Catering',
  'Menaje',
  'Decoración',
  'Servicios asociados',
];

function ServicesSection() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.whatsappMessage
  )}`;

  return (
    <section id="servicios" className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Servicios"
          title="Todo lo necesario para una celebración bien pensada"
          description="Supuesto: Integramos distintos servicios para ayudarte a organizar un evento más completo y armonioso."
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service} className={styles.card}>
              <h3>{service}</h3>
              <p>
                Supuesto: Texto base de apoyo para explicar este servicio de
                forma breve y comercial.
              </p>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Button
            variant="whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Cotiza tu evento por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
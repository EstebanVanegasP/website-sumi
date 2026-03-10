import Container from '../../../components/ui/Container/Container';
import SectionHeader from '../../../components/ui/SectionHeader/SectionHeader';
import styles from './EventTypesSection.module.scss';

const eventTypes = [
  'Bodas',
  'Cumpleaños',
  'Reuniones',
  'Despedidas de fin de año',
  'Baby shower',
  'Otros eventos especiales',
];

function EventTypesSection() {
  return (
    <section id="eventos" className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Tipos de eventos"
          title="Acompañamos distintos momentos para celebrar"
          description="Supuesto: Adaptamos nuestros servicios según el tipo de evento y la experiencia que desees crear."
        />

        <div className={styles.grid}>
          {eventTypes.map((event) => (
            <article key={event} className={styles.card}>
              <h3>{event}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default EventTypesSection;
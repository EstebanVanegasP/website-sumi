import Container from '../../../components/ui/Container/Container';
import SectionHeader from '../../../components/ui/SectionHeader/SectionHeader';
import styles from './AboutSection.module.scss';

function AboutSection() {
  return (
    <section id="nosotros" className={styles.section}>
      <Container className={styles.content}>
        <div>
          <SectionHeader
            eyebrow="Sobre Sumi Eventos"
            title="Una propuesta centrada en hacer sentir especial a cada cliente"
            description="Supuesto: Nuestro enfoque combina cercanía, cuidado por los detalles y una experiencia pensada para celebrar con tranquilidad."
            align="left"
          />
        </div>

        <div className={styles.box}>
          <p>
            Supuesto: Este espacio servirá para contar la esencia de la marca,
            la atención al cliente y el valor diferencial del servicio.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
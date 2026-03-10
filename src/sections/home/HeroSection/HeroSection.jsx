import Container from '../../../components/ui/Container/Container';
import Button from '../../../components/ui/Button/Button';
import styles from './HeroSection.module.scss';
import { businessInfo } from '../../../data/businessInfo';

function HeroSection() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.whatsappMessage
  )}`;

  return (
    <section id="inicio" className={styles.hero}>
      <Container className={styles.content}>
        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>Celebraciones con estilo</span>

          <h1 className={styles.title}>
            Creamos momentos especiales para tus eventos más importantes
          </h1>

          <p className={styles.description}>
            Supuesto: En Sumi Eventos te acompañamos con soluciones para
            celebraciones, catering, menaje, decoración y servicios asociados.
          </p>

          <div className={styles.actions}>
            <Button
              variant="whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </Button>

            <Button variant="secondary" href="#servicios">
              Ver servicios
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.placeholder}>
            Aquí irá una imagen o composición real destacada del negocio
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
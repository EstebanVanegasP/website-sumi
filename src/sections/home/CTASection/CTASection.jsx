import Container from '../../../components/ui/Container/Container';
import Button from '../../../components/ui/Button/Button';
import styles from './CTASection.module.scss';
import { businessInfo } from '../../../data/businessInfo';

function CTASection() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.whatsappMessage
  )}`;

  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <h2 className={styles.title}>Hablemos sobre tu próximo evento</h2>
        <p className={styles.description}>
          Supuesto: Escríbenos por WhatsApp y conversemos sobre la idea que
          tienes en mente.
        </p>
        <Button
          variant="whatsapp"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Solicitar cotización
        </Button>
      </Container>
    </section>
  );
}

export default CTASection;
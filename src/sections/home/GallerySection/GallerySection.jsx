import Container from '../../../components/ui/Container/Container';
import SectionHeader from '../../../components/ui/SectionHeader/SectionHeader';
import styles from './GallerySection.module.scss';

function GallerySection() {
  return (
    <section id="galeria" className={styles.section}>
      <Container>
        <SectionHeader
          eyebrow="Galería"
          title="La experiencia también se transmite en cada detalle"
          description="Aquí irá una selección de fotos y videos reales que ayuden a generar confianza y deseo."
        />

        <div className={styles.grid}>
          <div className={styles.item}>Imagen 1</div>
          <div className={styles.item}>Imagen 2</div>
          <div className={styles.item}>Imagen 3</div>
          <div className={styles.item}>Imagen 4</div>
        </div>
      </Container>
    </section>
  );
}

export default GallerySection;
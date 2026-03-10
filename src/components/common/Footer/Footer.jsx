import Container from '../../ui/Container/Container';
import styles from './Footer.module.scss';
import { businessInfo } from '../../../data/businessInfo';

function Footer() {
  return (
    <footer className={styles.footer} id="contacto">
      <Container className={styles.content}>
        <div>
          <h3 className={styles.brand}>{businessInfo.brandName}</h3>
          <p className={styles.text}>
            Supuesto: Creamos experiencias memorables para distintos tipos de
            celebraciones y reuniones.
          </p>
        </div>

        <div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {businessInfo.brandName}. Todos los
            derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
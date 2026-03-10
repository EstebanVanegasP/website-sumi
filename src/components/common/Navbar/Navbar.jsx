import Container from '../../ui/Container/Container';
import Button from '../../ui/Button/Button';
import styles from './Navbar.module.scss';
import { navigationLinks } from '../../../data/navigation';
import { businessInfo } from '../../../data/businessInfo';

function Navbar() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.whatsappMessage
  )}`;

  return (
    <header className={styles.header}>
      <Container className={styles.navbar}>
        <a href="#inicio" className={styles.logo}>
          {businessInfo.brandName}
        </a>

        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            variant="whatsapp"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
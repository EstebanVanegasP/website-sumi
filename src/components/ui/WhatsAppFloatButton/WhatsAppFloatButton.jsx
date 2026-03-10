import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppFloatButton.module.scss';
import { businessInfo } from '../../../data/businessInfo';

function WhatsAppFloatButton() {
  const whatsappLink = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    businessInfo.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      className={styles.button}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFloatButton;
import styles from './SectionHeader.module.scss';

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default SectionHeader;
import clsx from 'clsx';
import styles from './Button.module.scss';

function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  type = 'button',
}) {
  const className = clsx(styles.button, styles[variant]);

  if (href) {
    return (
      <a className={className} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
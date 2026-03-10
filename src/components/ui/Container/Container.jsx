function Container({ children, as: Tag = 'div', className = '' }) {
  return <Tag className={`container ${className}`.trim()}>{children}</Tag>;
}

export default Container;
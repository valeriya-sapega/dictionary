import './Button.css';

const Button = ({ children, classes, ...rest }) => {
  const className = classes ? `btn ${classes}` : 'btn';

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
export default Button;

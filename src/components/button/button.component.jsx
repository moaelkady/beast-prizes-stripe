import "./button.styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="primary-btn" {...otherProps}>
      <span> {children}</span>
    </button>
  );
};

export default Button;

import "./styles.css";

interface ButtonProps {
  children: any;
  color?: "black" | "white" | "blue";
  type?: "button" | "submit"
  onClick?: () => {};
}

function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      className={`btn${props.color ? " btn-" + props.color : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button;
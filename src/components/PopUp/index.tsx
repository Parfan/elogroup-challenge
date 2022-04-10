import styles from "./styles.module.css";

interface PopUpProps {
  type: "success" | "fail";
  children: any;
}

function PopUp(props: PopUpProps) {
  return (
    <div className={styles.container} style={{backgroundColor: props.type === "success" ? "green" : "tomato"}}>
      {props.children}
    </div>
  )
}

export default PopUp;
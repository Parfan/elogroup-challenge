import styles from "./styles.module.css";

interface CheckboxProps {
  value: string;
  onChange: (e: any) => void;
  checked: boolean;
  children: string
}

function Checkbox(props: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange} />
      {props.children}
    </label>
  )
}

export default Checkbox;
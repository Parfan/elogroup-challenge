import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const checkBoxOptions = [
  {name: "RPA"},
  {name: "Produto Digital"},
  {name: "Analytics"},
  {name: "BPM"}
];

function LeadModal() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <span>Nome <span style={{ color: "red" }}>*</span></span>
            <input required type="text" />
          </label>
          <label>
            <span>Telefone <span style={{ color: "red" }}>*</span></span>
            <input required type="tel" />
          </label>
          <label>
            <span>Email <span style={{ color: "red" }}>*</span></span>
            <input required type="email" />
          </label>
          <div>
            <label>
              Selecionar todos
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeadModal;
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeadContext, LeadInterface } from "../../contexts/LeadContext";
import { UserContext } from "../../contexts/UserContext";
import Checkbox from "../Checkbox";
import styles from "./styles.module.css";

function LeadModal() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [checkAll, setCheckAll] = useState(false);
  const [RPA, setRPA] = useState(false);
  const [produtoDigital, setProdutoDigital] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [BPM, setBPM] = useState(false);
  const { users, activeId } = useContext(UserContext);
  const leadContext = useContext(LeadContext);
  const navigate = useNavigate();

  useEffect(() => {
    // If all checkboxes are checked, then the checkAll checkbox will
    // check automatically
    const isAllChecked = RPA && produtoDigital && analytics && BPM;
    setCheckAll(isAllChecked);
  }, [RPA, produtoDigital, analytics, BPM])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    insertLead();
  }

  function checkAllCheckboxes() {
    const isAllChecked = RPA && produtoDigital && analytics && BPM;
    setCheckAll(!isAllChecked);
    setRPA(!isAllChecked);
    setProdutoDigital(!isAllChecked);
    setAnalytics(!isAllChecked);
    setBPM(!isAllChecked);
  }

  function insertLead() {
    let data = JSON.parse(localStorage.getItem("leads") || `
      { 
        "leads": {},
        "columns": {            
          "column-1": {
            "id": "column-1",
            "title": "Cliente em Potencial",
            "leadIds": []
          },
          "column-2": {
            "id": "column-2",
            "title": "Dados Confirmados",
            "leadIds": []
          },
          "column-3": {
            "id": "column-3",
            "title": "Reunião Agendada",
            "leadIds": []
          }
        },
        "columnOrder": ["column-1", "column-2", "column-3"]
      }
    `);

    const newId = "id_" + Math.random().toString(16).slice(2);
    const newLead = {
      id: newId,
      user_id: users[activeId[0]],
      content: {
        name,
        telephone,
        email,
        oportunities: [RPA, produtoDigital, analytics, BPM],
      }
    } || {};

    // Save lead
    data.leads[newId] = newLead;

    // Set column lead
    data.columns["column-1"].leadIds.push(newId);

    localStorage.setItem("leads", JSON.stringify(data));
    leadContext.setLeads(data);

    navigate(`/leads/${activeId}`);
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
          <h1>Novo Lead</h1>
          <label className={styles.textField}>
            <span>Nome <span style={{ color: "red" }}>*</span></span>
            <input
              required
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Nome do cliente"
            />
          </label>
          <label className={styles.textField}>
            <span>Telefone <span style={{ color: "red" }}>*</span></span>
            <input
              required
              type="tel"
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              placeholder="Telefone de contato"
            />
          </label>
          <label className={styles.textField}>
            <span>Email <span style={{ color: "red" }}>*</span></span>
            <input
              required
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email do cliente"
            />
          </label>
          <hr style={{ width: "clamp(25%, 300px, 75%)" }} />
          <span>Oportunidades <span style={{ color: "red" }}>*</span></span>
          <div className={styles.checkboxField}>
            <Checkbox value="All" checked={checkAll} onChange={checkAllCheckboxes}>
              Selecionar todos
            </Checkbox>
            <Checkbox value="RPA" checked={RPA} onChange={() => setRPA(!RPA)}>
              RPA
            </Checkbox>
            <Checkbox value="Produto Digital" checked={produtoDigital} onChange={() => setProdutoDigital(!produtoDigital)}>
              Produto Digital
            </Checkbox>
            <Checkbox value="Analytics" checked={analytics} onChange={() => setAnalytics(!analytics)}>
              Analytics
            </Checkbox>
            <Checkbox value="BPM" checked={BPM} onChange={() => setBPM(!BPM)}>
              BPM
            </Checkbox>
          </div>
          <button type="submit" disabled={
            !(RPA || produtoDigital || analytics || BPM) ||
            !(name.length > 0 && telephone.length > 0 && email.length > 0)
          }>
            Salvar
          </button>
        </form>
      </div>
    </div>
  )
}

export default LeadModal;
import { createContext, useEffect, useState } from "react";

export interface LeadInterface {
  leads: {
    [lead: string]: {
      id: string,
      user_id: string,
      content: {
        name: string,
        telephone: string,
        email: string,
        oportunities: string[],
      }
    }
  },
  columns: {
    [column: string]: {
      id: string,
      title: string,
      leadIds: string[],
    }
  },
  columnOrder: string[]
}

const initialLead = {
  leads: {},
  columns: {
    "column-1": {
      id: "column-1",
      title: "Cliente em Potencial",
      leadIds: []
    },
    "column-2": {
      id: "column-2",
      title: "Dados Confirmados",
      leadIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Reunião Agendada",
      leadIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};

interface ContextInterface {
  leads: LeadInterface,
  setLeads: React.Dispatch<React.SetStateAction<LeadInterface>>
}

export const LeadContext = createContext<ContextInterface>({ leads: initialLead, setLeads: () => { } });

interface LeadProviderProps {
  children: any;
}

function LeadProvider(props: LeadProviderProps) {
  const [leads, setLeads] = useState<LeadInterface>(initialLead);

  useEffect(() => {
    const data: LeadInterface = JSON.parse(localStorage.getItem("leads") || `
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
    setLeads(data);
  }, []);

  return (
    <LeadContext.Provider value={{ leads, setLeads }}>
      {props.children}
    </LeadContext.Provider>
  )
}

export default LeadProvider;
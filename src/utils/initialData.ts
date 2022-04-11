interface LeadsInterface {
  leads: {
    [lead: string]: {
      id: string,
      content: {
        name: string,
        telephone: string,
        email: string,
        oportunities: string[]
      }
    }
  };
  columns: {
    [column: string]: {
      id: string,
      title: string,
      leadIds: string[]
    }
  };
  columnOrder: string[];
}

const leads: LeadsInterface = {
  leads: {
    'lead-1': {
      id: 'lead-1', content: {
        name: "Org. Internacionais", telephone: "0123456789", email: "lead@email.com", oportunities: []
      }
    },
    'lead-2': {
      id: 'lead-2', content: {
        name: "Ind. Farm. LTDA", telephone: "0123456789", email: "lead@email.com", oportunities: []
      }
    },
    'lead-3': {
      id: 'lead-3', content: {
        name: "Musc. Sound Live Cmp", telephone: "0123456789", email: "lead@email.com", oportunities: []
      }
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Cliente em Potencial',
      leadIds: ['lead-1', 'lead-2', 'lead-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Dados Confirmados',
      leadIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Reunião Agendada',
      leadIds: [],
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default leads;
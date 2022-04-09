interface leadInterface {
  id: string,
  situation: string,
  name: string,
  telephone: string,
  email: string,
  oportunities: string[]
}

const leads = JSON.parse(localStorage.getItem("leads") || "[]");

function leadsReducer(state: leadInterface[], action: any) {
  const { type, payload } = action;

  switch (type) {
    case "GET":
      return state.filter((lead: leadInterface) => lead.id === payload.id)[0];
    case "POST":
      const newLeads = [...state, state];
      localStorage.setItem("leads", JSON.stringify(newLeads));
      return;
    // case "PUT":
    //   const leadToUpdate = state.filter((lead: leadInterface) => lead.id === payload.id)[0];
    //   leadToUpdate[payload.field] = payload.value;
    //   localStorage.setItem("leads", JSON.stringify([...state, leadToUpdate]));
    //   return;

    default:
      return state;
  }
}

export default leadsReducer;

// interface initialDataInterface {
//   tasks: {
//     [task: string]: {
//       id: string,
//       content: string
//     }
//   };
//   columns: {
//     [column: string]: {
//       id: string,
//       title: string,
//       taskIds: string[]
//     }
//   };
//   columnOrder: string[]
// }
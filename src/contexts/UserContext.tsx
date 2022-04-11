import { createContext, useEffect, useState } from "react";

interface UserInterface {
  [id: string]: {
    leads_id: string,
    user: string,
    password: string
  }
}

const initialUsers = {};

interface ContextInterface {
  users: UserInterface,
  setUsers: React.Dispatch<React.SetStateAction<UserInterface>>
}

export const UserContext = createContext<ContextInterface>({ users: initialUsers, setUsers: () => {} });

interface UserProviderProps {
  children: any;
}

function UserProvider(props: UserProviderProps) {
  const [users, setUsers] = useState<UserInterface>(initialUsers);

  useEffect(() => {
    const userTable = JSON.parse(localStorage.getItem("users") || "{}");
    if (Object.keys(userTable).length > 0)
      setUsers(userTable);
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
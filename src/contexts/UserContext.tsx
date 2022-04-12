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
  setUsers: React.Dispatch<React.SetStateAction<UserInterface>>;
  activeId: string[];
  setActiveId: React.Dispatch<React.SetStateAction<string[]>>
}

export const UserContext = createContext<ContextInterface>({ users: initialUsers, setUsers: () => {}, activeId: [], setActiveId: () => {} });

interface UserProviderProps {
  children: any;
}

function UserProvider(props: UserProviderProps) {
  const [users, setUsers] = useState<UserInterface>(initialUsers);
  const [activeId, setActiveId] = useState<string[]>([]);

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("activeId") || "[]");
    if (userLoggedIn.length > 0)
      setActiveId(userLoggedIn);
    const userTable = JSON.parse(localStorage.getItem("users") || "{}");
    if (Object.keys(userTable).length > 0)
      setUsers(userTable);
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers, activeId, setActiveId }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider;
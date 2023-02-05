import React, {createContext, useEffect, useState} from 'react';

import {User} from '../types/user';

interface UserContextProps {
  user: User | null;
  initialCheckCompleted: any;
  authenticated: boolean;
  setUser: (user: any) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  initialCheckCompleted: true,
  authenticated: false,
  setUser: (_user: any) => undefined,
});

type UserProviderProps = {
  children: any;
};

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [userData, setUserState] = useState<User | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const setUser = (user: any) => {
    setUserState(user);
  };

  useEffect(() => {
    if (userData && userData?.id) {
      setAuthenticated(true);
    }
  }, [userData]);

  const initialCheckCompleted = true;

  return (
    <UserContext.Provider
      value={{
        user: userData,
        initialCheckCompleted,
        authenticated,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

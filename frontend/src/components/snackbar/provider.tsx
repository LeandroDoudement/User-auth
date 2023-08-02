import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import Snackbar from '.';

export const SnackContext = React.createContext<UseSnackbarReturn | null>(null);

type UseSnackbarReturn = {
  showSnackbar: (message: string) => void;
};

export const useSnack = () => {
  const ctx = useContext(SnackContext);
  if (!ctx) {
    throw new Error('useSnackContext must be used inside SnackProvider');
  }
  return ctx;
};

const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showSnackbar = (message: string) => {
    setMessage(message);
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  };

  return (
    <SnackContext.Provider value={{ showSnackbar }}>
      {children}
      {visible && <Snackbar message={message} />}
    </SnackContext.Provider>
  );
};

export default SnackbarProvider;

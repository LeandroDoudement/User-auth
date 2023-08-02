import { FC, PropsWithChildren } from 'react';
import Header from './header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <Header />
      {children}
    </div>
  );
};

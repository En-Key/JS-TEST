import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

type TProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: TProps) => {
  return <div>

        <Header />
        {children}
        <Footer />

    </div>;
}

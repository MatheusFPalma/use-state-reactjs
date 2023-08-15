import React from "react";
import NavBar from "../../components/NavBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <footer>Aqui vai o footer</footer>
    </>
  );
};

export default DefaultLayout;

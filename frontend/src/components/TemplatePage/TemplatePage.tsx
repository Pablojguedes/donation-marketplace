import type { JSX } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Template = {
    children: JSX.Element
}

export default function TemplatePage({children}: Template) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

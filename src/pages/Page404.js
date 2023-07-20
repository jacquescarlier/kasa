import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../Styles/components/404.css"
import "../Styles/general.css";

const Page404 = () => {
  return (
    <div>
      <main>
        <Header />
        <div className="page404">
        <img src="404.png" alt="" />
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Page404;
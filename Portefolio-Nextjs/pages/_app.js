import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router'
import Headermain from "../components/header";
import Socialicons from "../components/socialicons";
import "../styles/App.module.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Headermain />
      <Component {...pageProps} />
      <Socialicons />
    </div>
  );
}

export default MyApp;

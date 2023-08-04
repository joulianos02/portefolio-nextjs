import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router'
import AnimatedCursor from "../hooks/AnimatedCursor";
import Headermain from "../components/header";
import "../styles/App.css";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Headermain />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

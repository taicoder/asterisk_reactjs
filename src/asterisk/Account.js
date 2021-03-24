import React, { useState, useEffect } from "react";
import Header from "../template/Header";
import Footer from "../template/Footer";
import myconfig from "../api/config";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Account() {
  const [cookies] = useCookies(["user"]);
  if (!cookies.user) window.location.href = "/login";
  useEffect(() => {
   
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: "1px", paddingTop: "10px" }}>
     sfsdfsdf
     
      </div>
      <Footer />
    </React.Fragment>
  );
}

import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import styles from "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });
    
        const templateParams = {
          from_name: formData.email,
          user_name: formData.name,
          to_name: contactConfig.YOUR_EMAIL,
          message: formData.message,
        };
    
        emailjs
          .send(
            contactConfig.YOUR_SERVICE_ID,
            contactConfig.YOUR_TEMPLATE_ID,
            templateParams,
            contactConfig.YOUR_USER_ID
          )
          .then(
            (result) => {
              console.log(result.text);
              setFormdata({
                loading: false,
                alertmessage: "Envoyé avec succès! Merci pour votre message.",
                variant: "success",
                show: true,
              });
            },
            (error) => {
              console.log(error.text);
              setFormdata({
                alertmessage: `Échec lors de l'envoi du message!,${error.text}`,
                variant: "danger",
                show: true,
              });
              document.getElementsByClassName("co_alert")[0].scrollIntoView();
            }
          );
      };
    
      const handleChange = (e) => {
        setFormdata({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          {/* ... */}
        </Helmet>
        <Row className={`${styles.mb5} ${styles.mt3} ${styles.ptMd3}`}>
          <Col lg="8">
            <h1 className={`${styles.display4} ${styles.mb4}`}>Contactez moi</h1>
            <hr className={`${styles.t_border} ${styles.my4} ${styles.ml0} ${styles.textLeft}`} />
          </Col>
        </Row>
        <Row className={styles.sec_sp}>
          {/* ... */}
          <Col lg="5" className={styles.mb5}>
            {/* ... */}
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            {/* ... */}
            <div className={formData.loading ? styles.loading_bar : styles.d_none}></div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

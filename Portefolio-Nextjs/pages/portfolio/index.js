import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import styles from './style.css';

const Portfolio = () => {
  return (
    <Container className="About-header">
      <Head>
        <meta charSet="utf-8" />
        <title> Portefolio | {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Head>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4"> Portefolio </h1>{" "}
          <hr className={styles.t_border + " my-4 ml-0 text-left"} />
        </Col>
      </Row>
      <div className="mb-5 po_items_ho">
        {dataportfolio.map((data, i) => {
          return (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>Voir le projet</a>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Portfolio;

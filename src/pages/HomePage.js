// src/pages/HomePage.js
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import EmailIcon from "@material-ui/icons/Email";

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-5">
              <h3>Hi, i'm Stijn. Nice to meet you.</h3>
              <p>
                Since the beginning of my journey I have been working on
                printing, digital products and building websites for clients and
                private projects. I'm naturally curious, a teamplayer and
                constantly working on improving my skills.
              </p>
              <Button>
                <EmailIcon />
                Contact Me
              </Button>
            </div>
            <div className="col-12 col-md-5">
              <img
                className="img-fluid mt-5 mt-md-0"
                src="https://usebasin.com/assets/website/hero-2-037518a04d2ed5f1f89e933af66de523bc0656d4e682d2eaab6ebcce1106254f.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section section__skills">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box box__padding box--grey">
                <h4>Front-end developer</h4>
                <p>
                  I like to code from scratch, and enjoy bringing ideas to life
                  in the browser.
                </p>
              </div>
              <ListGroup>
                <ListGroup.Item>Javascript, NodeJS</ListGroup.Item>
                <ListGroup.Item>
                  React: state, uplifting state, routing
                </ListGroup.Item>
                <ListGroup.Item>HTML5 & CSS3</ListGroup.Item>
                <ListGroup.Item>Bootstrap, GIT</ListGroup.Item>
                <ListGroup.Item>Wordpress & Concrete5</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box box__padding box--grey">
                <h4>Back-end Javascript</h4>
                <p>
                  I enjoy to work with small or big data and sorting them in a
                  database
                </p>
              </div>
              <ListGroup>
                <ListGroup.Item>Javascript</ListGroup.Item>
                <ListGroup.Item>
                  Databases: postgreSQL, Sequelize, ORM, Querying, migrations
                </ListGroup.Item>
                <ListGroup.Item>Rest API and Express</ListGroup.Item>
                <ListGroup.Item>Middleware</ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="box box__padding box--grey">
                <h4>Designer</h4>
                <p>
                  As designer i love to make beautiful things for on the web and
                  printing
                </p>
              </div>
              <ListGroup>
                <ListGroup.Item>Technical DTP</ListGroup.Item>
                <ListGroup.Item>Printing requirements</ListGroup.Item>
                <ListGroup.Item>Digital designer</ListGroup.Item>
                <ListGroup.Item>Prototyping</ListGroup.Item>
                <ListGroup.Item>Facebook ADS</ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <header className="title">
          <h2>Recent projects</h2>
          <p>
            A few design projects I've worked on recently. Want to see more?
            Email me.
          </p>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-4">[Project]</div>
            <div className="col-6 col-lg-4">[Project]</div>
            <div className="col-6 col-lg-4">[Project]</div>
          </div>
        </div>
      </section>
    </div>
  );
}

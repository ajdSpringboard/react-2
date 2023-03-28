import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Form.css";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <h2>Drinks: {drinks.length}</h2>
      <h2>Snacks: {snacks.length}</h2>
      <Card>
        <CardBody className="text-center">
          <CardTitle>Welcome to Silicon Valley's premier dive cafe!</CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;

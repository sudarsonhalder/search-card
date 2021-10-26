import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import "./style.css";

import people from "./People.json";

class App extends Component {
  state = {
    search: ""
  };

  renderPeople = (people) => {
    const { search } = this.state;
    var code = people.code.toLowerCase();

    return (
      <div className="col-md-6" style={{ marginTop: "20px" }}>
        <Card >
          <CardBody >
            <p className=""></p>
            <img className="Image" src={people.img}/>
                  <h6 style={{ fontSize: "18px",fontWeight:"bold",marginTop:"40px" }} >Name: {people.name}</h6>
          <h6 style={{ fontSize: "18px",fontWeight:"bold" }} >Job Role: {people.Job}</h6>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredPeople = people.filter((people) => {
      return people.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <Input
                  label="Search For people"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredPeople.map((people) => {
                return this.renderPeople(people);
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

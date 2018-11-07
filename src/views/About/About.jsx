import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">About</h2>
              <p className="category">
                Please Checkout{" "}
                <a
                  href="https://github.com/creativetimofficial/react-notification-alert"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Full Documentation
                </a>
                .
              </p>
            </div>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>About</CardCategory>
                  <CardTitle tag="h4">What's New</CardTitle>
                </CardHeader>
                <CardBody />
                <CardFooter />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Backend Development</CardCategory>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Tasks tasks={tasks} />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated 3 minutes ago"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;

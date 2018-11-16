import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  CardText,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import { PanelHeader } from "components";
import colorsRoute from "routes/colors.jsx";

class ColorLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
    this.state = {
      visible: true
    };
  }

  onDismiss() {}
  notify(place) {
    var type;
    type = "info";
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Your&nbsp;<b>color code</b>&nbsp;was copied to your&nbsp;
            <b>clipboard</b>.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }

  render() {
    return (
      <div class="duplicaporqueeeee">
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">The Color Library</h2>
              <p className="category">
                Pick the perfect color combinations for your design. HEX and RGB
                values can be easily copied by hovering over a swatch and
                clicking on the value you want.
              </p>
            </div>
          }
        />

        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            <Col md={12} xs={12}>
              {colorsRoute.map(parent => {
                return (
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">{parent.title}</CardTitle>
                      <p>{parent.description}</p>
                    </CardHeader>
                    <CardBody>
                      {parent.items.map((children, key) => {
                        return (
                          <Col class="color-card" md={3} sm={4} xs={6}>
                            <Card>
                              <CardBody>
                                <div
                                  style={{
                                    backgroundColor: `${children.hex}`
                                  }}
                                  class="color-header"
                                  onMouseEnter={() => {
                                    children.isHovering = !children.isHovering;
                                    this.forceUpdate();
                                  }}
                                  onMouseLeave={() => {
                                    children.isHovering = !children.isHovering;
                                    this.forceUpdate();
                                  }}
                                >
                                  {children.isHovering && (
                                    <div class="color-header-hovered" key={key}>
                                      <div class="color-link">
                                        {" "}
                                        <a onClick={() => this.notify("br")}>
                                          <span>Copy RGB</span>
                                        </a>
                                      </div>
                                      <div class="color-link">
                                        <a onClick={() => this.notify("br")}>
                                          <span>Copy Hex</span>
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div class="card-color-description" key={key}>
                                  <CardText>{children.name}</CardText>
                                  <CardText>
                                    <b>$</b>&nbsp;{children.variable}
                                  </CardText>
                                  <CardText>
                                    <b>RGB</b>&nbsp;{children.rgb}
                                  </CardText>
                                  <CardText>
                                    <b>HEX</b>&nbsp;{children.hex}
                                  </CardText>
                                </div>
                              </CardBody>
                            </Card>
                          </Col>
                        );
                      })}
                    </CardBody>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ColorLibrary;

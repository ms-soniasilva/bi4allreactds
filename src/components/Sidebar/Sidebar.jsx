import React from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import sidebarRoute from "routes/sidebar.jsx";

import logo from "logo.svg";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);

    this.state = {
      open: false,
      items: sidebarRoute
    };
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div className="sidebar" data-color="white">
        <div className="logo">
          <a href="#" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="#" className="simple-text logo-normal">
            Lab
          </a>
          <div class="menu-search">
            {" "}
            <p>Search</p>
            <form>
              <InputGroup>
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_zoom-bold" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          {this.props.routes.map((parent, key) => {
            return (
              <Nav>
                <li className="sidebar-parent" key={key}>
                  <a
                    onClick={() => {
                      parent.isOpen = !parent.isOpen;
                      this.forceUpdate();
                    }}
                    key={key}
                  >
                    <p>{parent.panel}</p>
                  </a>
                </li>
                <Collapse isOpen={parent.isOpen}>
                  <NavItem class="menu-item">
                    {parent.items.map((prop, key) => {
                      if (prop.redirect) return null;
                      return (
                        <li
                          className={
                            this.activeRoute(prop.path) +
                            (prop.pro ? " active active-pro" : "")
                          }
                          key={key}
                        >
                          <NavLink
                            to={prop.path}
                            className="nav-link"
                            activeClassName="active"
                          >
                            <p>{prop.name}</p>
                          </NavLink>
                        </li>
                      );
                    })}
                  </NavItem>
                </Collapse>
              </Nav>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Collapse, Button } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { HashLink as Link } from "react-router-hash-link";

import logo from "logo-white.svg";
var ps;

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  render() {
    let prop = this.props.data;

    return (
      <div>
        <li>
          <a
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
          >
            <i className={"now-ui-icons " + prop.icon} />
            <p>{prop.name}</p>
          </a>
          <Collapse isOpen={this.state.open}>
            <ul>
              {prop.items.map(prop => {
                return (
                  <li>
                    <Link
                      to="{prop.itempath}"
                      className="nav-link"
                      activeClassName="active"
                    >
                      <span class="sidebar-mini-icon" />
                      <span class="sidebar-normal">{prop.itemname}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Collapse>
        </li>
      </div>
    );
  }
}

export default SidebarItem;

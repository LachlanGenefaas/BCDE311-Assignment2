import Dropdown from "react-bootstrap/Dropdown";
import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header>
        <image></image>
        <nav>
          <ul>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Prostate Cancer
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">idk</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Recovery Support
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">idk</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <li>FAQ</li>
            <li>About Us</li>
            <li>Donate</li>
          </ul>
        </nav>
      </header>
    );
  }
}

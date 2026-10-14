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
                <Dropdown.Item href="#/action-1">
                  What is Prostate Cancer?
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Treatments</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  About the Prostate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">Getting Tested</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Recovery Support
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Support Groups</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Prost-Fit</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rainbow Blue</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  PCFNZ Support Services
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Information Service
                </Dropdown.Item>
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

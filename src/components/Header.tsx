import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
// import { Component } from "react";
// import type { JSX } from "react/jsx-runtime";

interface HeaderProps {
  image: string;
}

export function Header({ image }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-center gap-4 m-2 md:flex-row md:items-center md:justify-between md:gap-10">
      <img
        src={image}
        alt="Header Image"
        className="h-auto w-24 max-w-full object-contain sm:w-28 md:w-32 lg:w-40"
      />
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-wrap flex-col items-center justify-center gap-4 md:flex-row md:justify-end md:gap-10">
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

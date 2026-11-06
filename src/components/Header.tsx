import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Component } from "react";
// import type { JSX } from "react/jsx-runtime";

interface HeaderProps {
  image: string;
}

export default function Header({ image }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-12 max-h-50 flex flex-col items-center gap-4 bg-[var(--colour-header)] p-4 font-bold md:flex-row md:items-center md:justify-between md:gap-10">
      <div className="flex w-full items-center justify-between md:w-auto md:justify-start">
        <Link to="/" aria-label="Return to home page">
          <img
            src={image}
            alt="Header Image"
            className="h-auto w-24 max-w-full object-contain sm:w-28 md:w-32 lg:w-40"
          />
        </Link>
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <nav className={`${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-wrap flex-col items-center justify-center gap-4 md:flex-row md:justify-end md:gap-10">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="dropdown-toggle border-0 bg-transparent p-0 font-bold text-black text-decoration-none shadow-none"
            >
              Prostate Cancer
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/prostate-cancer">
                What is Prostate Cancer?
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/treatments">Treatments</Dropdown.Item>
              <Dropdown.Item as={Link} to="/about-the-prostate">
                About the Prostate
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/getting-tested">Getting Tested</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic-2"
              className="dropdown-toggle border-0 bg-transparent p-0 font-bold text-black text-decoration-none shadow-none"
            >
              Recovery Support
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/support-groups">Support Groups</Dropdown.Item>
              <Dropdown.Item as={Link} to="/prost-fit">Prost-Fit</Dropdown.Item>
              <Dropdown.Item as={Link} to="/rainbow-blue">Rainbow Blue</Dropdown.Item>
              <Dropdown.Item as={Link} to="/support-services">
                PCFNZ Support Services
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/information-service">
                Information Service
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <li>
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/donate">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

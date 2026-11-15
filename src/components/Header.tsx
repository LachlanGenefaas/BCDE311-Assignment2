import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconImg from "../assets/Icon.png";
// import { Component } from "react";
// import type { JSX } from "react/jsx-runtime";

interface HeaderProps {
  image: string;
}

export default function Header({ image: _image }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-12 flex flex-col items-center gap-4 bg-[var(--colour-header)] p-3 font-bold min-[851px]:flex-row min-[851px]:items-center min-[851px]:justify-between min-[851px]:gap-10">
      <div className="flex w-full items-center justify-between min-[851px]:w-auto min-[851px]:justify-start">
        <Link to="/" aria-label="Return to home page">
          <img
            src={iconImg}
            alt="Header logo"
            className="h-auto w-32 max-w-full object-contain sm:w-36 min-[851px]:w-40 lg:w-56"
          />
        </Link>
        <button
          className="text-2xl min-[851px]:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <nav className={`${menuOpen ? "block w-full" : "hidden"} min-[851px]:flex min-[851px]:h-full min-[851px]:w-auto min-[851px]:items-center`}>
        <ul className="mb-0 flex flex-col flex-wrap items-center justify-center gap-4 min-[851px]:h-full min-[851px]:flex-row min-[851px]:items-center min-[851px]:justify-end min-[851px]:gap-10">
          <Dropdown className="flex items-center">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="dropdown-toggle flex items-center border-0 bg-transparent p-0 font-bold text-black text-decoration-none shadow-none"
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
              <Dropdown.Item as={Link} to="/prostate-quiz">
                Prostate Quiz
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="flex items-center">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic-2"
              className="dropdown-toggle flex items-center border-0 bg-transparent p-0 font-bold text-black text-decoration-none shadow-none"
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
            </Dropdown.Menu>
          </Dropdown>

          <li className="flex items-center">
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="link" to="/donate">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

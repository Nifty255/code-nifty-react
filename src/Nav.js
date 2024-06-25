import { Link, useLocation } from 'react-router-dom';
import { Navbar } from "flowbite-react";

import Routes from './Routes';

import "./Nav.css";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <Navbar fluid className="w-full dark:bg-neutral-900">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Code <span className="rainbow">{"{N}"}</span>ifty</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {
          Routes.map(Route => (
            <Navbar.Link as={Link} key={Route.path ?? "/"} to={Route.path ?? "/"} active={pathname === (Route.path ?? "/")}>{Route.label}</Navbar.Link>
          ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
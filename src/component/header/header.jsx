import Logo from "/header/logo.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const LINKS = [
  { name: "Главная", href: "/" },
  { name: "Каталог", href: "/library" },
  { name: "Пользователи", href: "/users" },
  { name: "Добавить", href: "/add" },
  { name: "Корзина", href: "/basket" },
];

export default function Header() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="green">
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {LINKS.map((item) => (
              <Nav.Link key={item.name}>
                <Link to={item.href} className={styles.link}>
                  {item.name}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary">Кнопка</Button>
      </Navbar>
    </Container>
  );
}

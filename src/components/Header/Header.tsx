import "./Header.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SideMenu from "./SideMenu/SideMenu";
import { useLocation } from "react-router-dom";
import { links } from "./links";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsScrolled(false);
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  console.log(isScrolled);

  return (
    <>
      <nav
        className={`nav__container ${
          isScrolled ? "nav__scrolled" : ""
        } container`}
      >
        <div className="nav__wrapper">
          <div className="nav__logo">
            <Link to="/">
              <img src="/images/header-logo.png" alt="header logo" />
            </Link>
          </div>
          <ul className="nav__menu">
            {links.map((link, i) =>
              link.drop ? (
                <li key={i} className="nav__drop-wrapper">
                  <>
                    {link.title}
                    <RiArrowDownSFill />
                    <div className="nav__large-dropdown">
                      {link.links.map((li, i) => (
                        <Link key={i + 10} to={li.link}>
                          {li.label}
                        </Link>
                      ))}
                    </div>
                  </>
                </li>
              ) : (
                <li key={i}>
                  {<Link to={link.links[0].link}>{link.title}</Link>}
                </li>
              )
            )}
          </ul>
          <div className="nav__language">
            <h1>
              <span>Ru</span>
              <span>Uz</span>
            </h1>
          </div>
          <div className="nav__hamburger">
            <span onClick={() => setIsActive(true)}>
              <RxHamburgerMenu />
            </span>
          </div>
        </div>
      </nav>
      <SideMenu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;

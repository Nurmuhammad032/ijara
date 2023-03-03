import "./SideMenu.scss";
import { IoIosClose } from "react-icons/io";
import { Accordion } from "@mui/material";
import { RxChevronDown } from "react-icons/rx";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { accordionStyles, accordionSummeryStyles } from "../../accordionStyles";
import { links } from "../links";
import { Link } from "react-router-dom";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ isActive, setIsActive }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <aside
      className={`app__side-container ${isActive ? "app__side-active" : ""}`}
    >
      <span className="app__close-icons" onClick={() => setIsActive(false)}>
        <IoIosClose />
      </span>
      <div>
        {links.map((link, i) =>
          link.drop ? (
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
              sx={{ ...accordionStyles, mb: "2rem" }}
              key={i}
            >
              <AccordionSummary
                expandIcon={<RxChevronDown className="app__expand-icon" />}
                aria-controls={`panel${i + 1}bh-content`}
                id={`panel${i + 1}bh-header`}
                sx={{ ...accordionSummeryStyles, p: "0" }}
              >
                <p className="app__drop-title">{link.title}</p>
              </AccordionSummary>
              <AccordionDetails>
                {link.links.map((li, i) => (
                  <Link to={li.link} key={i} className="app__drop-links">
                    {li.label}
                  </Link>
                ))}
                {/* <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography> */}
              </AccordionDetails>
            </Accordion>
          ) : (
            <Link key={i} to={link.links[0].link} className="app__drop-link">
              {link.title}
            </Link>
          )
        )}
        <div className="app__side-language">
          <h1>
            <span>Ru</span>
            <span>Uz</span>
          </h1>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;

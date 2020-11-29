import { useMediaQuery } from "react-responsive";
import Labtop from "./labtop";
import Mobile from "./mobile";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile2 = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const NavBar = () => (
  <div>
    <Desktop>
      <Labtop />
    </Desktop>

    <Mobile2>
      <Mobile />
    </Mobile2>
  </div>
);

export default NavBar;

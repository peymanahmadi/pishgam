import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import styles from "./MainNavigation.module.scss";
import Logo from "../../Images/Logo.png";
import MenuItem from "./components/MenuItem/MenuItem";
import MegaMenuItem from "./components/MegaMenuItem/MegaMenuItem";
import { ProductsData, ProjectsData, CompanyData } from "./MainNavigationData";

const MainNavigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menubar}>
          <div className={styles.hamburger}>
            <div>
              <MdOutlineMenu />
            </div>
          </div>
          <a href="/" className={styles.logo}>
            <img src={Logo} alt="Pishgam" width="80px" height="60px" />
            <h1>Pishgam</h1>
          </a>
        </div>

        <div className={styles.navbtn}>
          <div className={styles.navmenu}>
            <MenuItem to="/" title="Home" />
            <MegaMenuItem title="Products" data={ProductsData} />
            <MegaMenuItem title="Startup Projects" data={ProjectsData} />
            <MegaMenuItem title="Company" data={CompanyData} />
          </div>
          <NavLink to="dashboard">
            <button>Things Dashboard</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;

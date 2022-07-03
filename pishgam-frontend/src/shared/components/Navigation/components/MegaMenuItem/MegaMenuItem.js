import { useState } from "react";
// import styles from "./MegaMenuItem.module.scss";

import useClickOutside from "../../../CustomHooks/ClickOutside";
import SubMenu from "./SubMenu";

const MegaMenuItem = (props) => {
  const [isMegaMenuItemOpen, setisMegaMenuItemOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisMegaMenuItemOpen(false);
  });
  return (
    // <div
    //   ref={domNode}
    //   className={`${styles.menu_item} ${styles.megamenuitem_container} ${
    //     isMegaMenuItemOpen ? styles.menu_active : undefined
    //   }`}
    //   onClick={() => {
    //     setisMegaMenuItemOpen((prevMegaMenuItem) => !prevMegaMenuItem);
    //   }}
    // >
    //   <div>{props.title}</div>
    //   <div
    //     className={`${styles.submenu} ${
    //       isMegaMenuItemOpen ? styles.submenu_active : ""
    //     }`}
    //   >
    //     {props.data.map((item) => {
    //       return (
    //         <SubMenu
    //           key={item.id}
    //           category={item.category}
    //           title={item.title}
    //           to={item.to}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
    <div
      ref={domNode}
      className={`menu-item menu-item_container ${
        isMegaMenuItemOpen ? "menu_active" : undefined
      }`}
      onClick={() => {
        setisMegaMenuItemOpen((prevMegaMenuItem) => !prevMegaMenuItem);
      }}
    >
      <div>{props.title}</div>
      <div className={`submenu ${isMegaMenuItemOpen ? "submenu_open" : ""}`}>
        {props.data.map((item) => {
          return (
            <SubMenu
              key={item.id}
              category={item.category}
              title={item.title}
              to={item.to}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MegaMenuItem;

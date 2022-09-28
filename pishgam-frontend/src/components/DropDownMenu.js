import { useState } from "react";

const menus = [
  {
    id: 1,
    name: "FA",
  },
  {
    id: 2,
    name: "EN",
  },
];

const DropDownMenu = ({ title }) => {
  const [openMenu, setOpenMenu] = useState();
  const handleDropOpen = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <div className="dropdown">
      <button onClick={handleDropOpen}>{title}</button>
      <div className={openMenu ? "dropdown-content a" : "dropdown-content"}>
        {menus.map((value) => {
          return (
            <a href="#" key={value.id}>
              {value.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;

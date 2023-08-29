import s from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.link_list}>
        <li className={s.link_item}>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/teachers" className={s.link}>
            Teachers
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
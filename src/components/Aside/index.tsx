import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { AsideBar } from "./styled";
import database from "../../utils/database";
import useQuery from "../../hooks/useQuery";

import renderImage from "../../utils/renderImage";
import filter from "../../utils/filter";

export default function Aside(): ReactElement {
  const query = useQuery();
  const category = query.get("category");
  const getFilters = filter();
  const sites = getFilters.sitesByCategory(category!);

  return (
    <AsideBar>
      <h1>Categorias</h1>

      <ul>
        {database.map((item: any, index: any) => (
          <li key={index} className={category === item.name ? "active" : ""}>
            <Link to={`/?category=${item.name}`}>
              <img src={renderImage(item.name)} alt="icon" />
              {item.name}
              <span className={category === item.name ? "active" : ""}>
                ({sites.length})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </AsideBar>
  );
}

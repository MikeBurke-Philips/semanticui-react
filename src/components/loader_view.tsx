import * as React from "react";
import * as css from "classnames";

// import "semantic-ui-css/components/loader.css";

export interface IProps {
  classes?: string;
  inline?: boolean;
  size?: "small" | "large";
  active?: boolean;
}


export const Loader = ({classes, inline, size, active }: IProps) => (
  <div className={css("ui", { "inline": inline, "active": active }, size, classes, "loader")} />
);

Loader['displayName'] = 'Loader';

export default Loader;

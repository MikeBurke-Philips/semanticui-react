import * as React from "react";
import * as css from "classnames";
import config from "../config/config";
// import "semantic-ui-css/components/label.css";

import { IColor, ISize } from '../config/interfaces';
 
export interface IProps extends IColor, ISize {
  classes?: string;
  children?: any;
  icon?: string;
  rightIcon?: string;
  image?: string;
  detail?: string;
  pointing?: "left" | "right" | "above" | "below";
  basic?: boolean;
  corner?: "left" | "right";
  tag?: boolean;
  ribbon?: boolean;
  attached?: "top" | "bottom" | "top right" | "top left" | "bottom left" | "bottom right";
  horizontal?: boolean;
  floating?: boolean;
  circular?: boolean;
  style?: any;
  text?: string | Object;
  link?: string;
  onClick?: Function;
}


export const Label = ({
  classes, children, icon, image, color, detail, rightIcon, pointing, basic,
  tag, corner, ribbon, attached, size, horizontal, floating, circular, style, text,
  onClick, link
}: IProps) => (
    React.createElement(link ? config.linkElement : "div",
      {
        style,
        onClick,
        className: css("ui", classes, color, size,
          {
            "circular": circular,
            "horizontal": horizontal,
            "floating": floating,
            "tag": tag,
            "ribbon": ribbon,
            "basic": basic,
            "image": image,
            "pointing": pointing,
          },
          pointing,
          attached,
          {
            "attached": attached
          },
          corner,
          {
            "corner": corner
          },
          "label")
      },
      icon && <i className={css(icon, "icon") }></i>,
      image && <img src={image}/>,
      children,
      text && config.i18n(text),
      detail && <div className="detail">{detail}</div>,
      rightIcon && <i className={css(rightIcon, "icon") }></i>)
  );

Label['displayName'] = 'Label';

export default Label;

import React, { FC } from "react";
import { Button as BaseButton } from "antd";
import cn from "classnames";

import "./index.sass";

type IProps = {
  children: React.ReactNode;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  htmlType?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  size?: string;
  rounded?: boolean;
};

const Button: FC<IProps> = ({
  children,
  type,
  htmlType,
  className,
  size,
  onClick,
  rounded,
}) => (
  <BaseButton
    onClick={onClick}
    className={cn("button", className, {
      "button--large": size === "large",
      "button--medium": size === "medium",
      "button--small": size === "small",
      "button--rounded": rounded,
    })}
    type={type}
    htmlType={htmlType}
  >
    {children}
  </BaseButton>
);
export default Button;

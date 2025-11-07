import React from "react";
import { iconsMap, IconName } from "./iconsMap";
import type { LucideProps } from "lucide-react";
import classNames from "classnames";

interface IconProps extends LucideProps {
  name: IconName;
  className?: string;
}

const Icon = ({name, className, ...rest}: IconProps) => {
  const LucideIcon = iconsMap[name];

  return (
    <LucideIcon className={classNames("icon", className)} {...rest} />
  )
}

export default Icon
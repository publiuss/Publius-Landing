import { FC, ReactElement } from "react";

const Icon : FC<{
  target?: string,
  rel?: string,
  href?: string,
  primary?: boolean,
  icon?: string | ReactElement,
  desc?: string | ReactElement,
  iconStyle?: any,
  className?: string
}> = ({
  children,
  primary = false,
  icon = undefined,
  desc = undefined,
  ...props
}) => (
  <a {...props}
  className={
    `${props.className}
    sm:px-0 px-0 py-0 rounded-[10px]
    hover:scale-[1.01] transition-all cursor-pointer
    text-xl
    ${icon
      ? 'sm:flex sm:flex-row items-center text-center sm:space-x-0 block'
      : 'block text-center'}
    ${primary
      ? `bg-white hover:border-[#C1DEF2] rounded-full`
      : `bg-white hover:border-[#C1DEF2]`}
  `}>
    {!primary && typeof icon === 'string' && <img src={icon} className="xs:h-8 xs:w-8 sm:h-8 sm:w-8 w-6 h-6 p-1" style={props.iconStyle} />}
    {primary && typeof icon === 'string' && <img src={icon} className="sm:h-22 sm:w-20 w-20 h-20 p-1 rounded-full" style={props.iconStyle} />}
  </a>
);

export default Icon;

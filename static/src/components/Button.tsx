import { ReactNode } from "react";

interface Button {
  id: string;
  type?: "button" | "submit";
  text: string;
  icon?: ReactNode;
  buttonClass: string;
  isTextVisible: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Button> = ({
  type = "button",
  id,
  text,
  icon,
  buttonClass,
  isTextVisible,
  disabled = false,
  onClick,
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center ${buttonClass} shadow-[-5px_5px_10px_#d7b34d,5px_-5px_10px_#fff369]`}
  >
    <span className="sr-only">{text}</span>
    {icon != undefined && icon}
    {isTextVisible && text}
  </button>
);

export default Button;

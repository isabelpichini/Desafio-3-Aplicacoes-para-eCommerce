import { InlineIcon } from "@iconify/react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  icon?: string;
  iconOnClick?: () => void;
  iconPosition?: "before" | "after";
  assistiveText?: string;
  subtext?: string;
}

export default function Input({
  id,
  name,
  type,
  placeholder,
  label,
  icon,
  iconOnClick,
  iconPosition,
  assistiveText,
  subtext,
}: InputProps) {
  return (
    <div className="input">
      {label ? (
        <label htmlFor={id} className="body-s">
          {label}
        </label>
      ) : null}
      <div className="input-wrapper">
        <div className="input-container">
          {icon && iconOnClick && iconPosition === "before" ? (
            <InlineIcon
              icon={icon}
              width={20}
              className="input-icon pointer"
              onClick={iconOnClick}
            />
          ) : null}
          <input
            className="body-s"
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
          />
          {icon && iconOnClick && iconPosition === "after" ? (
            <InlineIcon
              icon={icon}
              width={20}
              className="input-icon pointer"
              onClick={iconOnClick}
            />
          ) : null}
          {icon && !iconOnClick ? (
            <InlineIcon icon={icon} width={20} className="input-icon" />
          ) : null}
        </div>
        {assistiveText ? (
          <div className="assistive-text">
            <InlineIcon icon="ci:circle-warning" width={20} />
            <span className="assistive-text body-xs">{assistiveText}</span>
          </div>
        ) : null}
        {subtext ? <span className="subtext body-xs">{subtext}</span> : null}
      </div>
    </div>
  );
}

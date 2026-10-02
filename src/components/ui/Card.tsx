import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?:
    | "white"
    | "cream"
    | "yellow"
    | "mint"
    | "coral"
    | "cyan"
    | "container"
    | "container-high"
    | "container-low"
    | "dark";
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  borderWidth?: "2px" | "2.5px" | "3px";
  hoverEffect?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Card: React.FC<CardProps> = ({
  bg = "white",
  shadow = "md",
  borderWidth = "3px",
  hoverEffect = false,
  rounded = "md",
  className = "",
  children,
  ...props
}) => {
  const bgStyles = {
    white: "bg-surface-white",
    cream: "bg-canvas-cream",
    yellow: "bg-secondary-container",
    mint: "bg-accent-mint",
    coral: "bg-accent-coral text-white",
    cyan: "bg-accent-cyan",
    container: "bg-surface-container",
    "container-high": "bg-surface-container-high",
    "container-low": "bg-surface-container-low",
    dark: "bg-ink-black text-surface-white",
  }[bg];

  const borderStyles = {
    "2px": "border-2 border-ink-black",
    "2.5px": "border-[2.5px] border-ink-black",
    "3px": "border-[2.5px] md:border-[3px] border-ink-black",
  }[borderWidth];

  const shadowStyles = {
    none: "",
    xs: "shadow-[2px_2px_0px_#121212]",
    sm: "shadow-[3px_3px_0px_#121212]",
    md: "shadow-[4px_4px_0px_#121212]",
    lg: "shadow-[6px_6px_0px_#121212]",
    xl: "shadow-[8px_8px_0px_#121212]",
  }[shadow];

  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    xl: "rounded-2xl",
  }[rounded];

  const hoverStyles = hoverEffect
    ? "transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121212]"
    : "";

  const combinedClasses = `${bgStyles} ${borderStyles} ${shadowStyles} ${roundedStyles} ${hoverStyles} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

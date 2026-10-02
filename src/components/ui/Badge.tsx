import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "mint" | "yellow" | "coral" | "cyan" | "cobalt" | "white" | "cream" | "dark" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  dotColor?: string;
  pill?: boolean;
  rotate?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "yellow",
  size = "sm",
  dot = false,
  dotColor,
  pill = false,
  rotate,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-label-sm uppercase font-bold tracking-wider select-none";

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-label-sm border-2 border-ink-black shadow-[2px_2px_0px_#121212] gap-1.5",
    md: "px-3 py-1 text-label-md border-[2.5px] border-ink-black shadow-[3px_3px_0px_#121212] gap-2",
  }[size];

  const variantStyles = {
    yellow: "bg-secondary-container text-ink-black",
    mint: "bg-accent-mint text-ink-black",
    coral: "bg-accent-coral text-surface-white",
    cyan: "bg-accent-cyan text-ink-black",
    cobalt: "bg-primary-container text-surface-white",
    white: "bg-surface-white text-ink-black",
    cream: "bg-canvas-cream text-ink-black",
    dark: "bg-ink-black text-surface-white",
    outline: "bg-transparent text-ink-black border-ink-black",
  }[variant];

  const shapeStyles = pill ? "rounded-full" : "rounded";
  const rotateStyles = rotate ? rotate : "";

  return (
    <span
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${shapeStyles} ${rotateStyles} ${className}`.trim()}
      {...props}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full border border-ink-black ${
            dotColor || "bg-accent-mint"
          }`}
        />
      )}
      {children}
    </span>
  );
};

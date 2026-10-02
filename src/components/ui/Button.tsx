import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "dark" | "mint";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  href?: string;
  external?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  pill = false,
  href,
  external = false,
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-label-lg uppercase tracking-wider font-bold border-[2.5px] md:border-[3px] border-ink-black transition-all cursor-pointer select-none active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-label-sm gap-1.5 shadow-[2px_2px_0px_#121212] hover:shadow-[3px_3px_0px_#121212]",
    md: "px-4 py-2.5 text-label-md sm:text-label-lg gap-2 shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5",
    lg: "px-6 py-3 text-label-lg sm:text-[15px] gap-2.5 shadow-[5px_5px_0px_#121212] hover:shadow-[7px_7px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5",
  }[size];

  const variantStyles = {
    primary: "bg-primary-container text-surface-white hover:bg-primary",
    secondary: "bg-secondary-container text-ink-black hover:bg-[#ebd222]",
    tertiary: "bg-accent-coral text-surface-white hover:bg-[#e11d48]",
    ghost: "bg-surface-white text-ink-black hover:bg-surface-container",
    dark: "bg-ink-black text-surface-white hover:bg-[#252525]",
    mint: "bg-accent-mint text-ink-black hover:bg-[#0ea572]",
  }[variant];

  const shapeStyles = pill ? "rounded-full" : "rounded";

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${shapeStyles} ${className}`.trim();

  const iconElement = icon ? (
    <span className="material-symbols-outlined text-[18px] leading-none">
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {icon && iconPosition === "left" && iconElement}
      {children}
      {icon && iconPosition === "right" && iconElement}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

import React from "react";

export interface MarqueeTickerProps {
  items: string[];
  separator?: string;
  speed?: number; // seconds
  bg?: string;
  textColor?: string;
  borderClasses?: string;
  pauseOnHover?: boolean;
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items,
  separator = "✦",
  speed = 25,
  bg = "bg-secondary-container",
  textColor = "text-ink-black",
  borderClasses = "border-b-[3px] border-ink-black",
  pauseOnHover = true,
  className = "",
}) => {
  const content = items.map((item, idx) => (
    <span key={idx} className="inline-flex items-center gap-4 mx-4">
      <span>{item}</span>
      <span className="text-[12px] opacity-75">{separator}</span>
    </span>
  ));

  return (
    <div
      className={`w-full overflow-hidden select-none py-2.5 font-label-sm sm:font-label-md text-label-sm sm:text-label-md uppercase font-bold tracking-widest ${bg} ${textColor} ${borderClasses} ${className}`}
    >
      <div
        className={`flex whitespace-nowrap will-change-transform animate-marquee ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={
          {
            "--marquee-speed": `${speed}s`,
          } as React.CSSProperties
        }
      >
        <div className="flex items-center">{content}</div>
        <div className="flex items-center" aria-hidden="true">
          {content}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import { EventItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface EventCardProps {
  event: EventItem;
  featured?: boolean;
  className?: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  featured = false,
  className = "",
}) => {
  const {
    name,
    category,
    date,
    time,
    venue,
    description,
    status,
    registrationLink,
    image,
    theme,
  } = event;

  const categoryColor = {
    hackathon: "yellow",
    workshop: "cyan",
    "technical-session": "mint",
    competition: "coral",
  }[category?.toLowerCase() || ""] as "yellow" | "cyan" | "mint" | "coral" | "white";

  return (
    <div
      className={`bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-lg flex flex-col justify-between overflow-hidden ${
        featured ? "border-primary-container" : ""
      } ${className}`}
    >
      {/* Optional Card Media Header */}
      {image && (
        <div className="relative w-full h-48 border-b-2 border-ink-black bg-surface-container overflow-hidden">
          <Image
            src={image}
            alt={name || "Event Banner"}
            fill
            className="object-cover"
          />
          {status && (
            <div className="absolute top-3 left-3">
              <Badge variant="mint" size="sm" dot>
                {status}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {category && (
            <Badge variant={categoryColor || "white"} size="sm">
              {category}
            </Badge>
          )}

          {!image && status && (
            <Badge variant="mint" size="sm" dot>
              {status}
            </Badge>
          )}
        </div>

        {/* Date, Time & Venue strip */}
        {(date || time || venue) && (
          <div className="flex flex-wrap items-center gap-3 text-on-surface-variant font-label-sm text-label-sm font-semibold mb-3 pb-3 border-b-2 border-ink-black/10">
            {date && (
              <span className="inline-flex items-center gap-1 text-ink-black">
                <span className="material-symbols-outlined text-[16px] text-primary-container">
                  calendar_today
                </span>
                {date}
              </span>
            )}
            {time && (
              <span className="inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  schedule
                </span>
                {time}
              </span>
            )}
            {venue && (
              <span className="inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  location_on
                </span>
                {venue}
              </span>
            )}
          </div>
        )}

        {/* Event Title */}
        <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold tracking-tight mb-2">
          {name || "Untitled Event"}
        </h3>

        {/* Theme or subtitle if present */}
        {theme && (
          <p className="font-label-sm text-label-sm uppercase font-bold text-primary-container mb-2">
            Theme: {theme}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4">
            {description}
          </p>
        )}
      </div>

      {/* Card Footer / Action */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 flex items-center justify-between gap-3 border-t border-ink-black/10 mt-auto">
        {registrationLink ? (
          <Button
            href={registrationLink}
            external
            variant="secondary"
            size="sm"
            className="w-full sm:w-auto"
            icon="arrow_outward"
          >
            RSVP / Register
          </Button>
        ) : (
          <span className="font-label-sm text-label-sm text-on-surface-variant italic">
            Registration details to be announced
          </span>
        )}
      </div>
    </div>
  );
};

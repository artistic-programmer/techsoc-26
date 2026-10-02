import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
}) => {
  const {
    name,
    shortDescription,
    description,
    technologies = [],
    category,
    status,
    repository,
    liveLink,
    link,
    image,
    contributors = [],
  } = project;

  const resolvedDesc = shortDescription || description;
  const resolvedLink = liveLink || link;

  return (
    <div
      className={`bg-surface-white border-[2.5px] md:border-[3px] border-ink-black shadow-[4px_4px_0px_#121212] hover:shadow-[6px_6px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all rounded-lg flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Optional Project Screenshot/Banner */}
      {image && (
        <div className="relative w-full h-44 border-b-2 border-ink-black bg-surface-container overflow-hidden">
          <Image
            src={image}
            alt={name || "Project Banner"}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Main Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          {category ? (
            <Badge variant="yellow" size="sm">
              {category}
            </Badge>
          ) : (
            <Badge variant="outline" size="sm">
              PROJECT
            </Badge>
          )}

          {status && (
            <Badge variant="mint" size="sm" dot>
              {status}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-headline-sm text-headline-sm uppercase text-ink-black font-bold tracking-tight mb-2">
          {name || "Untitled Project"}
        </h3>

        {/* Description */}
        {resolvedDesc && (
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4">
            {resolvedDesc}
          </p>
        )}

        {/* Tech Stack Chips */}
        {technologies && technologies.length > 0 && (
          <div className="mt-auto pt-3 border-t border-ink-black/10">
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-surface-container-low border border-ink-black/40 font-mono text-[11px] text-ink-black rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contributors info if present */}
        {contributors && contributors.length > 0 && (
          <p className="font-label-sm text-[11px] text-on-surface-variant mt-3">
            Contributors: {contributors.join(", ")}
          </p>
        )}
      </div>

      {/* Action Footer */}
      {(repository || resolvedLink) && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-ink-black/10 flex items-center gap-3">
          {resolvedLink && (
            <Button
              href={resolvedLink}
              external
              variant="secondary"
              size="sm"
              icon="open_in_new"
            >
              Demo / App
            </Button>
          )}

          {repository && (
            <Button
              href={repository}
              external
              variant="ghost"
              size="sm"
              icon="code"
            >
              GitHub
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

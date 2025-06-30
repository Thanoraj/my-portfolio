import React from "react";
import { ProjectData } from "@/app/types/project-data";
import Image from "next/image";

type ProjectCardProps = {
  data: ProjectData;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <article className="bg-gray-100 dark:bg-gray-900/30 w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={data.image}
        alt={data.name}
        width={200}
        height={100}
        className="w-full h-[15rem] object-cover"
      />
      <div className="p-5">
        <h3
          className="text-2xl text-left font-semibold mb-3 h-[1.8rem] max-h-[1.8rem] overflow-hidden text-ellipsis whitespace-nowrap leading-none"
          style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          title={data.name} // This will show the full text as a native tooltip
        >
          {data.name}
        </h3>
        {/* Truncate the description to 3 lines */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 line-clamp-5 h-[100px] text-justify">
          {data.description}
        </p>
        {/* Dynamically manage the rows */}
        <ul
          className="flex flex-wrap gap-2"
          style={{
            WebkitLineClamp: 2, // Limit to a maximum of 2 rows
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            height: data.keywords.length <= 5 ? "auto" : "4.5rem", // Adjust height for 1 or 2 rows
          }}>
          {data.keywords.map((keyword, index) => (
            <li
              key={index}
              className="bg-gray-50 dark:bg-transparent px-4 py-1 rounded-full text-sm border border-gray-300">
              {keyword}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;

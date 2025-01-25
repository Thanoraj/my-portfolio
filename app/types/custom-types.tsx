import { routes } from "../lib/data";

export type SectionName = (typeof routes)[number]["hash"];

export type Theme = "light" | "dark";

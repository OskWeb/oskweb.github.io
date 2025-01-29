import "../styles/global.css";

export const skillsColorsCollection = [
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Mysql",
  "Laravel",
  "Angular",
  "SASS",
  "Vite",
  "React",
  "Vue",
  "Jest",
  "Astro",
];

export const skillColorAssociate = (skill: string) => {
  return skillsColorsCollection.find((s) => s === skill)?.toLowerCase();
};

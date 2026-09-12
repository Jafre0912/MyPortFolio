import type { Project } from "../types";
import bakeryHub from "../assets/project1.png";
import healEase from "../assets/project2.png";
import calculator from "../assets/project4.png";
import milkMitra from "../assets/project5.png";

// NOTE: the original project data had a duplicate "Bakery Hub" entry whose
// link actually pointed to an unrelated GitHub repo ("Roxilier-Systems").
// That looked like a copy-paste error, so it's been left out here rather
// than guessed at. Provide the real title/description if it should be
// included and it can be added properly.

export const projects: Project[] = [
  {
    id: "bakery-hub",
    title: "Bakery Hub",
    description:
      "A community and storefront platform for home bakers, with baking guides and marketing tips aimed at turning a hobby into a business.",
    url: "https://ecommercefrontendaj.netlify.app/",
    image: bakeryHub,
    tags: ["Frontend", "UI Design"],
  },
  {
    id: "healease",
    title: "HealEase",
    description:
      "A healthcare booking platform for scheduling doctor appointments, browsing consultations, and managing patient-side support.",
    url: "https://heal-ease-appointment-web-app.onrender.com/",
    image: healEase,
    tags: ["Full-Stack", "Booking System"],
  },
  {
    id: "scientific-calculator",
    title: "React Scientific Calculator",
    description:
      "A scientific calculator built in React, covering standard and advanced operations with a focus on precise, predictable input handling.",
    url: "https://funny-bombolone-b864ae.netlify.app/",
    image: calculator,
    tags: ["React", "UI Logic"],
  },
  {
    id: "milkmitra",
    title: "MilkMitra",
    description:
      "A dairy farm management system covering cattle records, milk collection tracking, sales reporting, and authenticated access — built on the MERN stack.",
    url: "https://milk-mitra0.vercel.app/",
    image: milkMitra,
    tags: ["MERN Stack", "Data Management"],
  },
];

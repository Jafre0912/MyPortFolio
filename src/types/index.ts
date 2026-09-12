export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  tags: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "facebook";
};

export type Personal = {
  name: string;
  email: string;
  whoAmI: string;
  yearsExperience: number;
  social: Social;
};

export type Social = {
  linkedIn: string;
  gitHub: string;
  faceBook: string;
};

export type School = {
  school: string;
  degree: string;
  year: number;
};

//dynamic key as string
export type Skills = {
  [skill: string]: Skill[];
};

export type Skill = {
  technology: string;
  proficiency: number;
};

//dynamic key as string
export type Jobs = {
  [job: string]: Job[];
};

export type Job = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  details: string[];
  site: string;
  icon?: string;
};

export type HobbyProject = {
  title: string;
  description: string;
  lastPublishDate: string;
  credits?: Credit[];
  gitHubUrl: string;
};

export interface Credit {
  title: string;
  link: string;
}

export type Certification = {
  name: string;
  link: string;
  image: string;
  startDate: string;
  endDate: string;
};

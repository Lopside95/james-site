export type Experience = {
  title: string;
  company: string;
  period: string;
  desc: string;
};

export type SkillGroup = {
  type: string;
  items: string[];
  openGroup: string;
  setOpenGroup: () => void;
};

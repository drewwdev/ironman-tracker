export type PlayerData = {
  skills: {
    [skillName: string]: {
      id: number;
      level: number;
      xp: number;
      rank: number;
    };
  };
};

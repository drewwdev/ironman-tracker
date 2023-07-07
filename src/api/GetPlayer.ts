import { Dispatch, SetStateAction, useEffect } from "react";
import { PlayerDataType } from "../types/playerDataType";

function FetchData(
  name: string,
  setPlayer: Dispatch<SetStateAction<PlayerDataType | null>>
) {
  const url = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${name}`;

  useEffect(() => {
    async function GetData() {
      const playerData: PlayerDataType = {
        skills: {},
      };

      const skills = [
        "Overall",
        "Attack",
        "Defence",
        "Strength",
        "Hitpoints",
        "Ranged",
        "Prayer",
        "Magic",
        "Cooking",
        "Woodcutting",
        "Fletching",
        "Fishing",
        "Firemaking",
        "Crafting",
        "Smithing",
        "Mining",
        "Herblore",
        "Agility",
        "Thieving",
        "Slayer",
        "Farming",
        "Runecrafting",
        "Hunter",
        "Construction",
      ];

      skills.forEach((skill, index) => {
        playerData.skills[skill] = {
          id: index,
          rank: 0,
          level: 0,
          xp: 0,
        };
      });

      const response = await fetch(url);
      const csvData = await response.text();
      const lines = csvData.split("\n");
      lines.forEach((line, i) => {
        if (!line.startsWith("-")) {
          const [rank, level, xp] = line.split(",");

          if (rank !== undefined && level !== undefined && xp !== undefined) {
            const skill = skills[i];
            playerData.skills[skill].rank = Number(rank);
            playerData.skills[skill].level = Number(level);
            playerData.skills[skill].xp = Number(xp);
          }
        }
      });

      setPlayer(playerData);
    }

    GetData();
  }, [url, setPlayer]);
}

export default FetchData;

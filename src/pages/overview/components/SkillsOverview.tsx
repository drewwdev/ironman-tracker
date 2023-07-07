import { useState } from "react";
import { PlayerDataType } from "../../../types/playerDataType";
import GetPlayer from "../../../api/GetPlayer";

function SkillsOverview() {
  const [player, setPlayer] = useState<PlayerDataType | null>(null);

  GetPlayer("misawakawada", setPlayer);

  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">Skill</th>
          <th className="p-4 text-left">Level</th>
          <th className="p-4 text-left">XP</th>
          <th className="p-4 text-left">Rank</th>
        </tr>
      </thead>
      <tbody>
        {player &&
          Object.entries(player.skills).map(([skillName, skill]) => (
            <tr key={skill.id}>
              <td className="px-4 py-2">{skillName}</td>
              <td className="px-4 py-2">
                {skill.level.toLocaleString("en-US")}
              </td>
              <td className="px-4 py-2">{skill.xp.toLocaleString("en-US")}</td>
              <td className="px-4 py-2">
                {skill.rank.toLocaleString("en-US")}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default SkillsOverview;

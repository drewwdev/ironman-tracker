import { useState } from "react";
import { PlayerData } from "../../../types/playerData";
import GetPlayer from "../../../api/GetPlayer";

function SkillsOverview() {
  const [player, setPlayer] = useState<PlayerData | null>(null);

  GetPlayer("misawakawada", setPlayer);

  return (
    <table className="m-6 border-2 bg-zinc-700">
      <thead>
        <tr>
          <th>Skill</th>
          <th>Level</th>
          <th>XP</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {player &&
          Object.entries(player.skills).map(([skillName, skill]) => (
            <tr key={skillName}>
              <td>{skillName}</td>
              <td>{skill.level}</td>
              <td>{skill.xp}</td>
              <td>{skill.rank}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default SkillsOverview;

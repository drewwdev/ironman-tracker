import { useEffect, useState } from "react";

function SkillsOverview() {
  const BASE_URL = "https://api.wiseoldman.net/v2";

  const [player, setPlayer] = useState({
    combatLevel: 0,
    displayName: "",
    id: 0,
    latestSnapshot: {
      data: {
        skills: {
          skillName: {
            metric: "",
            experience: 0,
            rank: 0,
            level: 0,
          },
        },
      },
    },
  });

  useEffect(() => {
    fetch(`${BASE_URL}/players/misawakawada`)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);

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
        {Object.entries(player.latestSnapshot.data.skills).map(
          ([skillName, skill]) => (
            <tr key={skillName}>
              <td>{skillName.charAt(0).toUpperCase() + skillName.slice(1)}</td>
              <td>{skill.level}</td>
              <td>{skill.experience.toLocaleString("en-US")}</td>
              <td>{skill.rank.toLocaleString("en-US")}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default SkillsOverview;

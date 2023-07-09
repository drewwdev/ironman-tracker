import { useEffect, useState } from "react";
import { Skill } from "osrs-json-hiscores";

interface Stats {
  main: {
    skills: {
      [skill: string]: Skill;
    };
  };
}

function SkillsOverview() {
  const [skills, setSkills] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/stats/misawakawada");
      if (response.ok) {
        const text = await response.text();
        const data = JSON.parse(text);
        setSkills(data.main.skills);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    };

    fetchData();
  }, []);

  const renderSkills = () => {
    if (!skills) return null;

    return Object.entries(skills).map(([skill, skillData]) => (
      <tr key={skill}>
        <td className="p-4 text-left">{skill}</td>
        <td className="p-4 text-left">{skillData.level}</td>
        <td className="p-4 text-left">{skillData.xp}</td>
        <td className="p-4 text-left">{skillData.rank}</td>
      </tr>
    ));
  };

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
      <tbody>{renderSkills()}</tbody>
    </table>
  );
}

export default SkillsOverview;

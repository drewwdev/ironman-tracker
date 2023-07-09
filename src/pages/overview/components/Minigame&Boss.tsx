import { Activity, Player } from "osrs-json-hiscores";
import { useEffect, useState } from "react";

interface ActivityData {
  name: string;
  rank: number;
  score: number;
}

function MinigameAndBoss() {
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/stats/misawakawada");

      if (response.ok) {
        const data = await response.json();
        setPlayer(data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    };

    fetchData();
  }, []);

  const renderActivity = () => {
    if (!player || !player.main) return null;

    const { skills, bosses, bountyHunter, clues, ...activities } = player.main;

    const bountyHunterActivities: ActivityData[] = Object.entries(
      bountyHunter
    ).map(([activityName, activityData]) => {
      const { rank, score } = activityData as Activity;
      return {
        name: activityName,
        rank,
        score,
      };
    });

    const clueActivities: ActivityData[] = Object.entries(clues).map(
      ([type, activityData]) => {
        const { rank, score } = activityData as Activity;
        return {
          name: type,
          rank,
          score,
        };
      }
    );

    const combinedActivities: ActivityData[] = [
      ...Object.entries(activities).map(([activityName, activityData]) => {
        return {
          name: activityName,
          rank: activityData.rank,
          score: activityData.score,
        };
      }),
      ...bountyHunterActivities,
      ...clueActivities,
    ];

    return combinedActivities.map((activityData) => {
      const { name, rank, score } = activityData;

      return (
        <tr key={name}>
          <td className="p-4 text-left">{name}</td>
          <td className="p-4 text-left">{score === -1 ? 0 : score}</td>
          <td className="p-4 text-left">{rank === -1 ? 0 : rank}</td>
        </tr>
      );
    });
  };

  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">Minigame / Boss</th>
          <th className="p-4 text-left">Score</th>
          <th className="p-4 text-left">Rank</th>
        </tr>
      </thead>
      <tbody>{renderActivity()}</tbody>
    </table>
  );
}

export default MinigameAndBoss;

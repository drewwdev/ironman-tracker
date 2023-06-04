import { useEffect, useState } from "react";

function MinigameAndBoss() {
  const BASE_URL = "https://api.wiseoldman.net/v2";

  const [player, setPlayer] = useState({
    combatLevel: 0,
    displayName: "",
    id: 0,
    latestSnapshot: {
      data: {
        activities: {
          activityName: {
            metric: "",
            score: 0,
            rank: 0,
          },
        },
        bosses: {
          bossName: {
            metric: "",
            kills: 0,
            rank: 0,
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

  const formatName = (name: string) => {
    return name
      .split("_")
      .map((word) => {
        if (word.toLowerCase() === "of" || word.toLowerCase() === "the") {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  return (
    <table className="m-6 border-2">
      <thead>
        <tr>
          <th>Minigame / Boss</th>
          <th>Kills</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(player.latestSnapshot.data.bosses)
          .filter(([bossName, boss]) => boss.kills > 0)
          .sort((a, b) => b[1].kills - a[1].kills)
          .map(([bossName, boss]) => (
            <tr key={bossName}>
              <td>{formatName(bossName)}</td>
              <td>{boss.kills === -1 ? 0 : boss.kills}</td>
              <td>
                {(boss.rank === -1 ? 0 : boss.rank).toLocaleString("en-US")}
              </td>
            </tr>
          ))}

        {Object.entries(player.latestSnapshot.data.activities)
          .filter(([activityName, activity]) => activity.score > 0)
          .sort((a, b) => b[1].score - a[1].score)
          .map(([activityName, activity]) => {
            formatName(activityName);

            return (
              <tr key={activityName}>
                <td>{formatName(activityName)}</td>
                <td>{activity.score === -1 ? 0 : activity.score}</td>
                <td>
                  {(activity.rank === -1 ? 0 : activity.rank).toLocaleString(
                    "en-US"
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default MinigameAndBoss;

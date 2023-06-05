import { useEffect, useState } from "react";

const barrowsGear = [
  {
    id: 1,
    name: "Ahrim's Hood",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 2,
    name: "Ahrim's Robetop",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 3,
    name: "Ahrim's Robeskirt",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 4,
    name: "Ahrim's Staff",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 5,
    name: "Dharok's Helm",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 6,
    name: "Dharok's Platebody",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 7,
    name: "Dharok's Platelegs",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 8,
    name: "Dharok's Greataxe",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 9,
    name: "Guthan's Helm",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 10,
    name: "Guthan's Platebody",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 11,
    name: "Guthan's Chainskirt",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 12,
    name: "Guthan's Warspear",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 13,
    name: "Karil's Coif",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 14,
    name: "Karil's Leathertop",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 15,
    name: "Karil's Leatherskirt",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 16,
    name: "Karil's Crossbow",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 17,
    name: "Torag's Helm",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 18,
    name: "Torag's Platebody",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 19,
    name: "Torag's Platelegs",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 20,
    name: "Torag's Hammers",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 21,
    name: "Verac's Helm",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 22,
    name: "Verac's Brassard",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 23,
    name: "Verac's Plateskirt",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
  {
    id: 24,
    name: "Verac's Flail",
    droprate: "1/16.5",
    killcount: 0,
    date: "",
    achieved: false,
  },
];

type barrowsGearType = {
  id: number;
  name: string;
  droprate: string;
  killcount: number;
  date: string;
  achieved: boolean;
};

function BarrowsBossGoals() {
  const BASE_URL = "https://api.wiseoldman.net/v2";

  const [player, setPlayer] = useState({
    combatLevel: 0,
    displayName: "",
    id: 0,
    latestSnapshot: {
      data: {
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

  const [barrowsGearState, setBarrowsGearState] =
    useState<barrowsGearType[]>(barrowsGear);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = barrowsGearState.findIndex(
      (barrowsGear) => barrowsGear.id === parseInt(id)
    );
    const newBarrowsGear = [...barrowsGearState];
    newBarrowsGear[index].achieved = !newBarrowsGear[index].achieved;
    setBarrowsGearState(newBarrowsGear);
    localStorage.setItem("barrowsGear", JSON.stringify(newBarrowsGear));
  };

  useEffect(() => {
    const data = localStorage.getItem("barrowsGear");
    if (data) {
      setBarrowsGearState(JSON.parse(data));
    }
  }, []);

  return (
    <table className="m-6 border-2 bg-zinc-700">
      <thead>
        <tr>
          <th>Barrows</th>
          <th>Droprate</th>
          <th>Killcount</th>
          <th>Achieved</th>
        </tr>
      </thead>
      <tbody>
        {barrowsGear.map((barrowsGear: barrowsGearType) => (
          <tr key={barrowsGear.id}>
            <td className="px-4">{barrowsGear.name}</td>
            <td className="px-4">{barrowsGear.droprate}</td>
            <td className="px-4">
              {Object.entries(player.latestSnapshot.data.bosses).map(
                ([bossName, bossData]) => (
                  <div className="px-4" key={bossName}>
                    {bossName === "barrows_chests" ? bossData.kills : ""}
                  </div>
                )
              )}
            </td>
            <td className="px-4">
              <input
                type="checkbox"
                id={barrowsGear.id.toString()}
                checked={barrowsGearState[barrowsGear.id - 1].achieved}
                onChange={handleCheckbox}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BarrowsBossGoals;

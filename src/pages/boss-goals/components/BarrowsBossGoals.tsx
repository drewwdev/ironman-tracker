import { useEffect, useState } from "react";
import { barrowsGear } from "../data";
import { barrowsGearType } from "../model";
import { BASE_URL } from "../../../constants";

function BarrowsBossGoals() {
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

  const GetPlayer = async () => {
    useEffect(() => {
      fetch(`${BASE_URL}/players/misawakawada`)
        .then((res) => res.json())
        .then((data) => setPlayer(data));
    }, []);
  };

  GetPlayer();

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

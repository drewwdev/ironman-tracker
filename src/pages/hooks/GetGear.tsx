import { useEffect, useState } from "react";
import { BASE_URL, PLAYER_NAME } from "../../constants";
import { gearType } from "../boss-goals/model";

interface GetGearProps {
  loot: gearType[];
}

export default function GetGear({ loot }: GetGearProps) {
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
    fetch(`${BASE_URL}/players/${PLAYER_NAME}`)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, []);

  const [gearState, setGearState] = useState<gearType[]>(loot);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = gearState.findIndex((gear) => gear.id === parseInt(id));
    const newGear = [...gearState];
    newGear[index].achieved = !newGear[index].achieved;
    setGearState(newGear);
    localStorage.setItem(
      `${player.latestSnapshot.data.bosses.bossName}`,
      JSON.stringify(newGear)
    );
  };

  useEffect(() => {
    const data = localStorage.getItem(
      `${player.latestSnapshot.data.bosses.bossName}`
    );
    if (data) {
      setGearState(JSON.parse(data));
    }
  }, []);

  return (
    <>
      {loot.map((gear: gearType) => (
        <tr key={gear.id}>
          <td className="px-4">{gear.name}</td>
          <td className="px-4">{gear.droprate}</td>
          <td className="px-4">{gear.killcount}</td>
          <td className="px-4">
            <input
              type="checkbox"
              id={gear.id.toString()}
              checked={gearState[gear.id - 1].achieved}
              onChange={handleCheckbox}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

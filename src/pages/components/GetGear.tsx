import { useEffect, useState } from "react";
import { gearType } from "../boss-goals/model";
import { playerType } from "../../models/model";

interface GetGearProps {
  loot: gearType[];
}

export default function GetGear(
  { loot }: GetGearProps,
  playerData: playerType
) {
  const [gearState, setGearState] = useState<gearType[]>(loot);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = gearState.findIndex((gear) => gear.id === parseInt(id));
    const newGear = [...gearState];
    newGear[index].achieved = !newGear[index].achieved;
    setGearState(newGear);
    localStorage.setItem(
      JSON.stringify(
        playerData[index].latestSnapshot.data.bosses.barrows_chests
      ),
      JSON.stringify(newGear)
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("bossData");
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
          <td className="px-4">{}</td>
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

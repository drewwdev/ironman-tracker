import { useEffect, useState } from "react";
import mageEquipment from "../../data/mageEquipment";

import { EquipmentType } from "../../types/equipmentType";

function SingleMageEquipment() {
  const [mageEquipmentState, setMageEquipmentState] =
    useState<EquipmentType[]>(mageEquipment);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = mageEquipmentState.findIndex(
      (mageEquipment) => mageEquipment.id === parseInt(id)
    );
    const newMageEquipment = [...mageEquipmentState];
    newMageEquipment[index].achieved = !newMageEquipment[index].achieved;
    setMageEquipmentState(newMageEquipment);
    localStorage.setItem("mageEquipment", JSON.stringify(newMageEquipment));
  };

  useEffect(() => {
    const data = localStorage.getItem("mageEquipment");
    if (data) {
      setMageEquipmentState(JSON.parse(data));
    }
  }, []);

  const mageEquipmentNameSlug = mageEquipment.map(
    (mageEquipment: EquipmentType) =>
      mageEquipment.name.toLowerCase().replace("'", "%27").replace(" ", "_")
  );

  return (
    <tbody>
      {mageEquipment.map((mageEquipment: EquipmentType) => (
        <tr key={mageEquipment.id}>
          <td className="flex justify-center px-4">
            <img src={mageEquipment.image} />
          </td>
          <td className="px-4">{mageEquipment.tier}</td>
          <td className="px-4">
            <a
              className="font-medium text-slate-200 hover:text-slate-200 hover:underline"
              href={`https://oldschool.runescape.wiki/w/${
                mageEquipmentNameSlug[mageEquipment.id - 1]
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {mageEquipment.name}
            </a>
          </td>
          <td className="px-4">
            <input
              type="checkbox"
              id={mageEquipment.id.toString()}
              checked={mageEquipmentState[mageEquipment.id - 1].achieved}
              onChange={handleCheckbox}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SingleMageEquipment;

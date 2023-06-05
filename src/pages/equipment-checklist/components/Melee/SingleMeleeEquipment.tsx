import { useEffect, useState } from "react";
import meleeEquipment from "./meleeEquipment";
import { EquipmentType } from "../../equipmentType";

function SingleMeleeEquipment() {
  const [meleeEquipmentState, setMeleeEquipmentState] =
    useState<EquipmentType[]>(meleeEquipment);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = meleeEquipmentState.findIndex(
      (meleeEquipment) => meleeEquipment.id === parseInt(id)
    );
    const newMeleeEquipment = [...meleeEquipmentState];
    newMeleeEquipment[index].achieved = !newMeleeEquipment[index].achieved;
    setMeleeEquipmentState(newMeleeEquipment);
    localStorage.setItem("meleeEquipment", JSON.stringify(newMeleeEquipment));
  };

  useEffect(() => {
    const data = localStorage.getItem("meleeEquipment");
    if (data) {
      setMeleeEquipmentState(JSON.parse(data));
    }
  }, []);

  const meleeEquipmentNameSlug = meleeEquipment.map(
    (meleeEquipment: EquipmentType) =>
      meleeEquipment.name.toLowerCase().replace("'", "%27").replace(" ", "_")
  );

  return (
    <tbody>
      {meleeEquipment.map((meleeEquipment: EquipmentType) => (
        <tr key={meleeEquipment.id}>
          <td className="flex justify-center px-4">
            <img src={meleeEquipment.image} />
          </td>
          <td className="px-4">{meleeEquipment.tier}</td>
          <td className="px-4">
            <a
              className="font-medium text-slate-200 hover:text-slate-200 hover:underline"
              href={`https://oldschool.runescape.wiki/w/${
                meleeEquipmentNameSlug[meleeEquipment.id - 1]
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {meleeEquipment.name}
            </a>
          </td>
          <td className="px-4">
            <input
              type="checkbox"
              id={meleeEquipment.id.toString()}
              checked={meleeEquipmentState[meleeEquipment.id - 1].achieved}
              onChange={handleCheckbox}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SingleMeleeEquipment;

import { useEffect, useState } from "react";
import meleeEquipment from "../data/meleeEquipment";
import { meleeEquipmentType } from "../types/meleeEquipmentType";

function SingleMeleeEquipment() {
  const [meleeEquipmentState, setMeleeEquipmentState] =
    useState<meleeEquipmentType[]>(meleeEquipment);

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

  return (
    <tbody>
      {meleeEquipment.map((meleeEquipment: meleeEquipmentType) => (
        <tr key={meleeEquipment.id}>
          <td className="flex justify-center px-4">
            <img src={meleeEquipment.image} />
          </td>
          <td className="px-4">{meleeEquipment.tier}</td>
          <td className="px-4">{meleeEquipment.name}</td>
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

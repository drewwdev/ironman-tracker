import { useEffect, useState } from "react";
import type { meleeEquipmentType } from "../types/meleeEquipmentType";
import meleeEquipment from "../data/meleeEquipment";

function Achieved() {
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
    <div>
      <li>Achieved</li>
      {meleeEquipment.map((meleeEquipment: meleeEquipmentType) => (
        <li key={meleeEquipment.id} className="flex items-center mb-4">
          <input
            type="checkbox"
            id={meleeEquipment.id.toString()}
            checked={meleeEquipmentState[meleeEquipment.id - 1].achieved}
            onChange={handleCheckbox}
          />
        </li>
      ))}
    </div>
  );
}

export default Achieved;

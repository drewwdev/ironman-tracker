import meleeEquipment from "../data/meleeEquipment";
import { meleeEquipmentType } from "../types/meleeEquipmentType";

function Name() {
  return (
    <ul>
      <li>Tier</li>
      {meleeEquipment.map((meleeEquipment: meleeEquipmentType) => (
        <li key={meleeEquipment.id}>{meleeEquipment.name}</li>
      ))}
    </ul>
  );
}

export default Name;

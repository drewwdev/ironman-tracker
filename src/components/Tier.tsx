import meleeEquipment from "../data/meleeEquipment";
import { meleeEquipmentType } from "../types/meleeEquipmentType";

function Tier() {
  return (
    <ul>
      <li>Tier</li>
      {meleeEquipment.map((meleeEquipment: meleeEquipmentType) => (
        <li key={meleeEquipment.id}>{meleeEquipment.tier}</li>
      ))}
    </ul>
  );
}

export default Tier;

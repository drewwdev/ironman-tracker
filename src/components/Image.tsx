import meleeEquipment from "../data/meleeEquipment";
import { meleeEquipmentType } from "../types/meleeEquipmentType";

function Icon() {
  return (
    <ul>
      <li>Icon</li>
      {meleeEquipment.map((meleeEquipment: meleeEquipmentType) => (
        <img key={meleeEquipment.id} src={meleeEquipment.image} />
      ))}
    </ul>
  );
}

export default Icon;

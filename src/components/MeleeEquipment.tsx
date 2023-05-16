import Achieved from "./Achieved";
import Icon from "./Image";
import Name from "./Name";
import Tier from "./Tier";

function MeleeEquipment() {
  return (
    <div className="flex">
      <Tier />
      <Icon />
      <Name />
      <Achieved />
    </div>
  );
}

export default MeleeEquipment;

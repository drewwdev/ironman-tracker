import { useEffect, useState } from "react";
import rangeEquipment from "./rangeEquipment";
import { EquipmentType } from "../../equipmentType";

function SingleRangeEquipment() {
  const [rangeEquipmentState, setRangeEquipmentState] =
    useState<EquipmentType[]>(rangeEquipment);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = rangeEquipmentState.findIndex(
      (rangeEquipment) => rangeEquipment.id === parseInt(id)
    );
    const newRangeEquipment = [...rangeEquipmentState];
    newRangeEquipment[index].achieved = !newRangeEquipment[index].achieved;
    setRangeEquipmentState(newRangeEquipment);
    localStorage.setItem("rangeEquipment", JSON.stringify(newRangeEquipment));
  };

  useEffect(() => {
    const data = localStorage.getItem("rangeEquipment");
    if (data) {
      setRangeEquipmentState(JSON.parse(data));
    }
  }, []);

  const rangeEquipmentNameSlug = rangeEquipment.map(
    (rangeEquipment: EquipmentType) =>
      rangeEquipment.name.toLowerCase().replace("'", "%27").replace(" ", "_")
  );

  return (
    <tbody>
      {rangeEquipment.map((rangeEquipment: EquipmentType) => (
        <tr key={rangeEquipment.id}>
          <td className="flex justify-center px-4">
            <img src={rangeEquipment.image} />
          </td>
          <td className="px-4">{rangeEquipment.tier}</td>
          <td className="px-4">
            <a
              className="font-medium text-slate-200 hover:text-slate-200 hover:underline"
              href={`https://oldschool.runescape.wiki/w/${
                rangeEquipmentNameSlug[rangeEquipment.id - 1]
              }`}
              target="_blank"
              rel="noreferrer"
            >
              {rangeEquipment.name}
            </a>
          </td>
          <td className="px-4">
            <input
              type="checkbox"
              id={rangeEquipment.id.toString()}
              checked={rangeEquipmentState[rangeEquipment.id - 1].achieved}
              onChange={handleCheckbox}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SingleRangeEquipment;

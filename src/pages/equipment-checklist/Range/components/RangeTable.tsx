import SingleRangeEquipment from "./SingleRangeEquipment";

function RangeTable() {
  return (
    <section className="m-5 text-black bg-white rounded-lg h-min">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Range</h1>
        <img src="https://oldschool.runescape.wiki/images/Ranged_icon.png?01b0e" />
      </header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="p-4 text-left">Tier</th>
            <th className="p-4 text-left">Item</th>
            <th className="p-4 text-left">Achieved?</th>
          </tr>
        </thead>
        <SingleRangeEquipment />
      </table>
    </section>
  );
}

export default RangeTable;

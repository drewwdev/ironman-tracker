import SingleRangeEquipment from "./SingleRangeEquipment";

function RangeTable() {
  return (
    <section className="m-6 border-2">
      <header className="flex flex-col items-center justify-center">
        <h1>Range</h1>
        <img src="https://oldschool.runescape.wiki/images/Ranged_icon.png?01b0e" />
      </header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="">Tier</th>
            <th className="">Item</th>
            <th className="">Achieved?</th>
          </tr>
        </thead>
        <SingleRangeEquipment />
      </table>
    </section>
  );
}

export default RangeTable;

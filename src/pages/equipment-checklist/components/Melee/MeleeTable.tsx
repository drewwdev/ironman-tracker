import SingleMeleeEquipment from "./SingleMeleeEquipment";

function MeleeTable() {
  return (
    <section className="m-5 text-black bg-white rounded-lg h-min">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Melee</h1>
        <img src="https://oldschool.runescape.wiki/images/Strength_icon_%28detail%29.png?a4903" />
      </header>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="p-4">Tier</th>
            <th className="p-4">Item</th>
            <th className="p-4">Achieved?</th>
          </tr>
        </thead>
        <SingleMeleeEquipment />
      </table>
    </section>
  );
}

export default MeleeTable;

import SingleMeleeEquipment from "./SingleMeleeEquipment";

function MeleeTable() {
  return (
    <section className="m-6 border-2 bg-zinc-700">
      <header className="flex flex-col items-center justify-center">
        <h1>Melee</h1>
        <img src="https://oldschool.runescape.wiki/images/Strength_icon_%28detail%29.png?a4903" />
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
        <SingleMeleeEquipment />
      </table>
    </section>
  );
}

export default MeleeTable;

import SingleMageEquipment from "./SingleMageEquipment";

function MageTable() {
  return (
    <section className="m-6 border-2 bg-zinc-700">
      <header className="flex flex-col items-center justify-center">
        <h1>Mage</h1>
        <img src="https://oldschool.runescape.wiki/images/Magic_icon_%28detail%29.png?a4903" />
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
        <SingleMageEquipment />
      </table>
    </section>
  );
}

export default MageTable;

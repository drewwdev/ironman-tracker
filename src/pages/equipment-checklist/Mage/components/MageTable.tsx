import SingleMageEquipment from "./SingleMageEquipment";

function MageTable() {
  return (
    <section className="m-5 text-black bg-white rounded-lg h-min">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Mage</h1>
        <img src="https://oldschool.runescape.wiki/images/Magic_icon_%28detail%29.png?a4903" />
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
        <SingleMageEquipment />
      </table>
    </section>
  );
}

export default MageTable;

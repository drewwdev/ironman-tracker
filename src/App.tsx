import "./App.css";
import MeleeEquipment from "./components/MeleeEquipment";

function App() {
  return (
    <main>
      <section className="border-2 border-white">
        <header className="flex flex-col items-center justify-center">
          <h1>Melee</h1>
          <img src="https://oldschool.runescape.wiki/images/Strength_icon_%28detail%29.png?a4903" />
        </header>
        <ul className="flex justify-start px-12 space-x-16 list-none">
          <MeleeEquipment />
        </ul>
      </section>
    </main>
  );
}

export default App;

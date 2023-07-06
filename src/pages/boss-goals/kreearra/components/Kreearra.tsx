import { loot } from "../data";
import GetGear from "../../../components/GetGear";

export default function Kreearra() {
  return (
    <table className="m-6 border-2 bg-zinc-700">
      <thead>
        <tr>
          <th>Kree'Arra</th>
          <th>Droprate</th>
          <th>Killcount</th>
          <th>Achieved</th>
        </tr>
      </thead>
      <tbody>
        <GetGear loot={loot} />
      </tbody>
    </table>
  );
}

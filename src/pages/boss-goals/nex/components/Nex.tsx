import { loot } from "../data";
import GetGear from "../../GetGear";

export default function Nex() {
  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">Nex</th>
          <th className="p-4 text-left">Droprate</th>
          <th className="p-4 text-left">Killcount</th>
          <th className="p-4 text-left">Achieved</th>
        </tr>
      </thead>
      <tbody>
        <GetGear loot={loot} />
      </tbody>
    </table>
  );
}

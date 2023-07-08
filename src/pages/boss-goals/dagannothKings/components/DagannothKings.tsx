import GetGear from "../../GetGear";
import { loot } from "../data";

export default function DagannothKings() {
  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">Dagannoth Kings</th>
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

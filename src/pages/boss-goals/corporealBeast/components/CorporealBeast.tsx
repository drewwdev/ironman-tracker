import { loot } from "../data";
import GetGear from "../../../components/GetGear";

export default function CorporealBeast() {
  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">Corporeal Beast</th>
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

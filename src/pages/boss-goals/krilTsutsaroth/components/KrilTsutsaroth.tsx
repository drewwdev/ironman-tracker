import { loot } from "../data";
import GetGear from "../../../components/GetGear";

export default function KrilTsutsaroth() {
  return (
    <table className="m-6 border-2 bg-zinc-700">
      <thead>
        <tr>
          <th>K'ril Tsutsaroth</th>
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

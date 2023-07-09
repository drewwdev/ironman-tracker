import { Activity } from "osrs-json-hiscores";
import { FC, useEffect, useState } from "react";

export type Boss =
  | "barrows"
  | "dagannothPrime"
  | "dagannothRex"
  | "dagannothSupreme"
  | "sarachnis"
  | "zulrah"
  | "kreeArra"
  | "commanderZilyana"
  | "generalGraardor"
  | "krilTsutsaroth"
  | "corporealBeast"
  | "nex";

export interface LootItem {
  id: number;
  name: string;
  droprate: string;
  killcount: number;
  achieved: boolean;
}

interface BossProps {
  bossName: Boss;
  loot: LootItem[];
}

const BossComponent: FC<BossProps> = ({ bossName, loot }) => {
  const [boss, setBoss] = useState<Activity | null>(null);
  const [lootItems, setLootItems] = useState<LootItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/stats/misawakawada");
      if (response.ok) {
        const text = await response.text();
        const data = JSON.parse(text);
        setBoss(data.main.bosses[bossName]);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    };

    fetchData();
  }, [bossName]);

  useEffect(() => {
    const localStorageKey = `${bossName}Achieved`;
    // Load the saved achieved state from local storage
    const savedAchieved = localStorage.getItem(localStorageKey);
    if (savedAchieved) {
      const parsedAchieved = JSON.parse(savedAchieved);
      setLootItems(parsedAchieved);
    } else {
      // Initialize the achieved state if not found in local storage
      setLootItems(
        loot.map((item) => ({
          ...item,
          achieved: false,
        }))
      );
    }
  }, [bossName, loot]);

  const handleCheckboxChange = (itemId: number) => {
    const updatedLootItems = lootItems.map((item) =>
      item.id === itemId ? { ...item, achieved: !item.achieved } : item
    );
    setLootItems(updatedLootItems);
    const localStorageKey = `${bossName}Achieved`;
    // Save the updated achieved state to local storage
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLootItems));
  };

  const renderBoss = () => {
    if (!boss) return null;

    return lootItems.map((item) => (
      <tr key={item.id}>
        <td className="p-4">{item.name}</td>
        <td className="p-4">{item.droprate}</td>
        <td className="p-4">{boss.score === -1 ? 0 : boss.score}</td>
        <td className="px-4">
          <input
            type="checkbox"
            id={item.id.toString()}
            checked={item.achieved}
            onChange={() => handleCheckboxChange(item.id)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="m-5 text-black bg-white rounded-lg">
      <thead>
        <tr>
          <th className="p-4 text-left">{bossName}</th>
          <th className="p-4 text-left">Droprate</th>
          <th className="p-4 text-left">Killcount</th>
          <th className="p-4 text-left">Achieved</th>
        </tr>
      </thead>
      <tbody>{renderBoss()}</tbody>
    </table>
  );
};

export default BossComponent;

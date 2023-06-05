import { useEffect, useState } from "react";

function EasyGoals() {
  const goals = [
    {
      id: 1,
      name: "Graceful Set",
      achieved: false,
    },
    {
      id: 2,
      name: "Fairy Rings + Magic Secateurs",
      achieved: false,
    },
    {
      id: 3,
      name: "Easy Ardougne Diary",
      achieved: false,
    },
    {
      id: 4,
      name: "100% Hosidius Favour",
      achieved: false,
    },
    {
      id: 5,
      name: "Birdhouse Runs",
      achieved: false,
    },
    {
      id: 6,
      name: "Dorgeshuun Crossbow",
      achieved: false,
    },
    {
      id: 7,
      name: "Climbing Boots",
      achieved: false,
    },
    {
      id: 8,
      name: "Elemental/Mind Shield",
      achieved: false,
    },
    {
      id: 9,
      name: "Ava's Attractor",
      achieved: false,
    },
    {
      id: 10,
      name: "43 Prayer",
      achieved: false,
    },
    {
      id: 11,
      name: "Free-to-Play Quests",
      achieved: false,
    },
    {
      id: 12,
      name: "High Alchemy",
      achieved: false,
    },
    {
      id: 13,
      name: "Alfred Grimhand's Barcrawl",
      achieved: false,
    },
    {
      id: 14,
      name: "Strength Amulet(s)",
      achieved: false,
    },
    {
      id: 15,
      name: "Fremmenik Trials",
      achieved: false,
    },
    {
      id: 16,
      name: "Iban's Staff",
      achieved: false,
    },
    {
      id: 17,
      name: "Farm Run Teleports:",
      achieved: false,
    },
    {
      id: 18,
      name: " - Ardougne Cloak 2",
      achieved: false,
    },
    {
      id: 19,
      name: " - Camelot Teleport",
      achieved: false,
    },
    {
      id: 20,
      name: " - Explorer's Ring 2",
      achieved: false,
    },
    {
      id: 21,
      name: " - Kourend House Teleport",
      achieved: false,
    },
    {
      id: 22,
      name: " - Ectophial",
      achieved: false,
    },
    {
      id: 23,
      name: " - Farming Guild",
      achieved: false,
    },
    {
      id: 24,
      name: " - Trollheim Teleport",
      achieved: false,
    },
  ];

  type GoalType = {
    id: number;
    name: string;
    achieved: boolean;
  };

  const [easyGoalsState, setEasyGoalsState] = useState<GoalType[]>(goals);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = easyGoalsState.findIndex(
      (easyGoals) => easyGoals.id === parseInt(id)
    );
    const newEasyGoals = [...easyGoalsState];
    newEasyGoals[index].achieved = !newEasyGoals[index].achieved;
    setEasyGoalsState(newEasyGoals);
    localStorage.setItem("easyGoals", JSON.stringify(newEasyGoals));
  };

  useEffect(() => {
    const easyGoals = localStorage.getItem("easyGoals");
    if (easyGoals) {
      setEasyGoalsState(JSON.parse(easyGoals));
    }
  }, []);

  const percentageOfEasyGoalsAchieved = () => {
    const totalEasyGoals = easyGoalsState.length;
    const totalEasyGoalsAchieved = easyGoalsState.filter(
      (easyGoals) => easyGoals.achieved
    ).length;
    return Math.round((totalEasyGoalsAchieved / totalEasyGoals) * 100);
  };

  return (
    <div className="m-6 border-2 bg-zinc-700">
      <h1 className="text-2xl font-bold text-center">Easy Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfEasyGoalsAchieved()}% Complete
      </h2>
      <table>
        <thead>
          <tr>
            <th>Goals</th>
            <th>Achieved?</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal: GoalType) => (
            <tr key={goal.name}>
              <td>{goal.name}</td>
              <td>
                <input
                  type="checkbox"
                  id={goal.id.toString()}
                  checked={easyGoalsState[goal.id - 1].achieved}
                  onChange={handleCheckbox}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EasyGoals;

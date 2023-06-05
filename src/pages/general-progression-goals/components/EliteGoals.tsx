import { useEffect, useState } from "react";

function EliteGoals() {
  const goals = [
    {
      id: 1,
      name: "83 Construction (Upgrade house accordingly)",
      achieved: false,
    },
    {
      id: 2,
      name: "Toxic blowpipe",
      achieved: false,
    },
    {
      id: 3,
      name: "Trident of the swamps",
      achieved: false,
    },
    {
      id: 4,
      name: "First Kree'arra unique (Armadyl)",
      achieved: false,
    },
    {
      id: 5,
      name: "First General Graardor unique (Bandos)",
      achieved: false,
    },
    {
      id: 6,
      name: "First K'ril Tsutsaroth unique",
      achieved: false,
    },
    {
      id: 7,
      name: "Dragon warhammer",
      achieved: false,
    },
    {
      id: 8,
      name: "Full Crystal armour",
      achieved: false,
    },
    {
      id: 9,
      name: "Bow of faerdhinen (c)",
      achieved: false,
    },
    {
      id: 10,
      name: "Abyssal tentacle",
      achieved: false,
    },
    {
      id: 11,
      name: "Occult necklace",
      achieved: false,
    },
    {
      id: 12,
      name: "Dragon crossbow",
      achieved: false,
    },
    {
      id: 13,
      name: "First Chambers of Xeric unique",
      achieved: false,
    },
    {
      id: 14,
      name: "Most Elite Diaries Completed",
      achieved: false,
    },
  ];

  type GoalType = {
    id: number;
    name: string;
    achieved: boolean;
  };

  const [eliteGoalsState, setEliteGoalsState] = useState<GoalType[]>(goals);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = eliteGoalsState.findIndex(
      (eliteGoals) => eliteGoals.id === parseInt(id)
    );
    const newEliteGoals = [...eliteGoalsState];
    newEliteGoals[index].achieved = !newEliteGoals[index].achieved;
    setEliteGoalsState(newEliteGoals);
    localStorage.setItem("eliteGoals", JSON.stringify(newEliteGoals));
  };

  useEffect(() => {
    const eliteGoals = localStorage.getItem("eliteGoals");
    if (eliteGoals) {
      setEliteGoalsState(JSON.parse(eliteGoals));
    }
  }, []);

  const percentageOfEliteGoalsAchieved = () => {
    const totalEliteGoals = eliteGoalsState.length;
    const totalEliteGoalsAchieved = eliteGoalsState.filter(
      (eliteGoals) => eliteGoals.achieved
    ).length;
    return Math.round((totalEliteGoalsAchieved / totalEliteGoals) * 100);
  };

  return (
    <div className="m-6 border-2 bg-zinc-700">
      <h1 className="text-2xl font-bold text-center">Elite Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfEliteGoalsAchieved()}% Complete
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
                  checked={eliteGoalsState[goal.id - 1].achieved}
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

export default EliteGoals;

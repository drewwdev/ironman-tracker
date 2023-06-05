import { useEffect, useState } from "react";

function MediumGoals() {
  const goals = [
    {
      id: 1,
      name: "Dragon Scimitar",
      achieved: false,
    },
    {
      id: 2,
      name: "Dragon Battleaxe",
      achieved: false,
    },
    {
      id: 3,
      name: "Salve Amulet",
      achieved: false,
    },
    {
      id: 4,
      name: "Fighter Torso",
      achieved: false,
    },
    {
      id: 5,
      name: "Prayer Potions",
      achieved: false,
    },
    {
      id: 6,
      name: "Black Mask",
      achieved: false,
    },
    {
      id: 7,
      name: "Rune Crossbow",
      achieved: false,
    },
    {
      id: 8,
      name: "Proselyte Armour",
      achieved: false,
    },
    {
      id: 9,
      name: "Magic Shortbow",
      achieved: false,
    },
    {
      id: 10,
      name: "Dragon Defender",
      achieved: false,
    },
    {
      id: 11,
      name: "Helmet of Neitiznot",
      achieved: false,
    },
    {
      id: 12,
      name: "Full Void Armour",
      achieved: false,
    },
    {
      id: 13,
      name: "Broad Bolts",
      achieved: false,
    },
    {
      id: 14,
      name: "Barrows Gloves",
      achieved: false,
    },
    {
      id: 15,
      name: "Ancients Unlocked",
      achieved: false,
    },
    {
      id: 16,
      name: "Medium Clue Stash Units",
      achieved: false,
    },
    {
      id: 17,
      name: "Herb Sack",
      achieved: false,
    },
    {
      id: 18,
      name: "Amulet of Glory(s)",
      achieved: false,
    },
    {
      id: 19,
      name: "Angler's Outfit",
      achieved: false,
    },
    {
      id: 20,
      name: "Lumberjack Outfit",
      achieved: false,
    },
    {
      id: 21,
      name: "All Medium Diaries Completed",
      achieved: false,
    },
    {
      id: 22,
      name: "Ectoplasmator (optional)",
      achieved: false,
    },
    {
      id: 23,
      name: "Holy Wrench",
      achieved: false,
    },
    {
      id: 24,
      name: "Bone Crusher",
      achieved: false,
    },
    {
      id: 25,
      name: "55 Construction",
      achieved: false,
    },
    {
      id: 26,
      name: "Karambwan Fishing",
      achieved: false,
    },
    {
      id: 27,
      name: "Ava's Accumulator",
      achieved: false,
    },
  ];

  type GoalType = {
    id: number;
    name: string;
    achieved: boolean;
  };

  const [mediumGoalsState, setMediumGoalsState] = useState<GoalType[]>(goals);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = mediumGoalsState.findIndex(
      (mediumGoals) => mediumGoals.id === parseInt(id)
    );
    const newMediumGoals = [...mediumGoalsState];
    newMediumGoals[index].achieved = !newMediumGoals[index].achieved;
    setMediumGoalsState(newMediumGoals);
    localStorage.setItem("mediumGoals", JSON.stringify(newMediumGoals));
  };

  useEffect(() => {
    const mediumGoals = localStorage.getItem("mediumGoals");
    if (mediumGoals) {
      setMediumGoalsState(JSON.parse(mediumGoals));
    }
  }, []);

  const percentageOfMediumGoalsAchieved = () => {
    const numberOfMediumGoalsAchieved = mediumGoalsState.filter(
      (mediumGoals) => mediumGoals.achieved
    ).length;

    return Math.floor(
      (numberOfMediumGoalsAchieved / mediumGoalsState.length) * 100
    );
  };

  return (
    <div className="m-6 border-2 bg-zinc-700">
      <h1 className="text-2xl font-bold text-center">Medium Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfMediumGoalsAchieved()}% Completed
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
                  checked={mediumGoalsState[goal.id - 1].achieved}
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

export default MediumGoals;

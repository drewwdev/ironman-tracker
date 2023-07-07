import { useEffect, useState } from "react";
import { goals } from "../data";
import { GoalType } from "../../model";

function HardGoals() {
  const [hardGoalsState, setHardGoalsState] = useState<GoalType[]>(goals);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = hardGoalsState.findIndex(
      (hardGoals) => hardGoals.id === parseInt(id)
    );
    const newHardGoals = [...hardGoalsState];
    newHardGoals[index].achieved = !newHardGoals[index].achieved;
    setHardGoalsState(newHardGoals);
    localStorage.setItem("hardGoals", JSON.stringify(newHardGoals));
  };

  useEffect(() => {
    const hardGoals = localStorage.getItem("hardGoals");
    if (hardGoals) {
      setHardGoalsState(JSON.parse(hardGoals));
    }
  }, []);

  const percentageOfhardGoalsAchieved = () => {
    const numberOfHardGoalsAchieved = hardGoalsState.filter(
      (hardGoals) => hardGoals.achieved
    ).length;

    return Math.floor(
      (numberOfHardGoalsAchieved / hardGoalsState.length) * 100
    );
  };

  return (
    <div className="m-5 text-black bg-white rounded-lg h-min">
      <h1 className="text-2xl font-bold text-center">Hard Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfhardGoalsAchieved()}% Completed
      </h2>
      <table>
        <thead>
          <tr>
            <th className="p-4 text-left">Goals</th>
            <th className="p-4 text-left">Achieved?</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal: GoalType) => (
            <tr key={goal.name}>
              <td className="px-4 py-2">{goal.name}</td>
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  id={goal.id.toString()}
                  checked={hardGoalsState[goal.id - 1].achieved}
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

export default HardGoals;

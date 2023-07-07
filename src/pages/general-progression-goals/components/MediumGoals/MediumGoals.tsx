import { useEffect, useState } from "react";
import { goals } from "./data";
import { GoalType } from "../../model";

function MediumGoals() {
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
    <div className="m-5 text-black bg-white rounded-lg h-min">
      <h1 className="text-2xl font-bold text-center">Medium Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfMediumGoalsAchieved()}% Completed
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

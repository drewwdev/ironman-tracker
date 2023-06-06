import { useEffect, useState } from "react";
import { goals } from "./data";
import { GoalType } from "../../model";

function EasyGoals() {
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

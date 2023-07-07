import { useEffect, useState } from "react";
import { goals } from "../data";
import { GoalType } from "../../model";

function EliteGoals() {
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
    <div className="m-5 text-black bg-white rounded-lg h-min">
      <h1 className="text-2xl font-bold text-center">Elite Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfEliteGoalsAchieved()}% Complete
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

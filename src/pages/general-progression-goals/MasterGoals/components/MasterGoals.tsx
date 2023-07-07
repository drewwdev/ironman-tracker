import { useEffect, useState } from "react";
import { goals } from "../data";
import { GoalType } from "../../model";

function MasterGoals() {
  const [masterGoalsState, setMasterGoalsState] = useState<GoalType[]>(goals);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const index = masterGoalsState.findIndex(
      (masterGoals) => masterGoals.id === parseInt(id)
    );
    const newMasterGoals = [...masterGoalsState];
    newMasterGoals[index].achieved = !newMasterGoals[index].achieved;
    setMasterGoalsState(newMasterGoals);
    localStorage.setItem("masterGoals", JSON.stringify(newMasterGoals));
  };

  useEffect(() => {
    const masterGoals = localStorage.getItem("masterGoals");
    if (masterGoals) {
      setMasterGoalsState(JSON.parse(masterGoals));
    }
  }, []);

  const percentageOfMasterGoalsAchieved = () => {
    const totalMasterGoals = masterGoalsState.length;
    const totalMasterGoalsAchieved = masterGoalsState.filter(
      (masterGoals) => masterGoals.achieved
    ).length;
    return Math.round((totalMasterGoalsAchieved / totalMasterGoals) * 100);
  };

  return (
    <div className="m-5 text-black bg-white rounded-lg h-min">
      <h1 className="text-2xl font-bold text-center">Master Goals</h1>
      <h2 className="text-xl font-bold text-center">
        {percentageOfMasterGoalsAchieved()}% Complete
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
                  checked={masterGoalsState[goal.id - 1].achieved}
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

export default MasterGoals;

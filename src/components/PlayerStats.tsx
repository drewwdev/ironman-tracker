import { useEffect, useState } from "react";
import axios from "axios";

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=misawakawada"
        );
        setPlayerData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {playerData ? (
        <pre>{JSON.stringify(playerData, null, 2)}</pre>
      ) : (
        <p>Loading player data...</p>
      )}
    </div>
  );
};

export default PlayerStats;

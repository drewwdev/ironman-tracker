const BASE_URL = "https://api.wiseoldman.net/v2";

export const getPlayerStats = async (playerId: number) => {
  const response = await fetch(`${BASE_URL}/players/id/${playerId}`);
  const data = await response.json();
  console.log(data);
  return data;
};

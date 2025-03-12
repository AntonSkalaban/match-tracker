import { MatchesResponse } from "shared/types";

export const getData = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/fronttemp");

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as MatchesResponse;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};

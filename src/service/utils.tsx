import axios from "axios";
const baseUrl = "https://api.adviceslip.com/advice";

export async function getRandomQuote() {
  const { data } = await axios.get(baseUrl);
  return data;
}

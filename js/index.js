import {fetchData} from "./api.js";
import {renderCards} from "./render.js"

localStorage.setItem("url", "https://api.pokemontcg.io/v1/cards");
const fetch_url = localStorage.getItem("url")


const getData = async () => {
	const cards = await fetchData(fetch_url);

	renderCards(cards);
}

getData()

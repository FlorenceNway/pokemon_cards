import {fetchData} from "./api.js";
import {renderCards} from "./render.js"
import {filteredPokemon} from "./filter.js"

localStorage.setItem("url", "https://api.pokemontcg.io/v1/cards");
const fetch_url = localStorage.getItem("url")

const input = document.querySelector('input')

const getData = async () => {
	const cards = await fetchData(fetch_url);
	renderCards(cards);

input.addEventListener("keyup", (event) => {
	const query = event.target.value.toLowerCase();
	const filteredCards = filteredPokemon(cards, query);
	
	renderCards(filteredCards);
});
}

getData()


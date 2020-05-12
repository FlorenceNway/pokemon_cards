import {fetchData} from "./api.js";
import {renderCards} from "./render.js"

localStorage.setItem("url", "https://api.pokemontcg.io/v1/cards");
const fetch_url = localStorage.getItem("url")


const randomNum = (limit) => {
	return Math.floor(Math.random() * limit);
};


const getData = async () => {
	const cards = await fetchData(fetch_url);

	console.log(cards)

	const cardsToRender = [];
	for (let i = 0; i < 9; i++) {
		cardsToRender.push(cards[randomNum(cards.length)]);
	}

	renderCards(cardsToRender);
}

getData()

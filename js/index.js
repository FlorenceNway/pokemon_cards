import {fetchData} from "./api.js"

const cards_container = document.querySelector(".cards");

// ================================

localStorage.setItem("url", "https://api.pokemontcg.io/v1/cards");
const fetch_url = localStorage.getItem("url")


const randomNum = (limit) => {
	return Math.floor(Math.random() * limit);
};

const renderCards = (cards) => {
	cards_container.innerHTML = "";

	cards.forEach((card) => {
		const li = document.createElement("li");
		const image = card.imageUrl
            
		li.innerHTML = `
			<div class='img'>
				<img src=${image} alt="pokemonCard">
				<div>
					<p>${card.name}</p>
				</div>
			</div>
			<div class='overlay'>
				<div class='text'>
					<p class="number">Number: ${card.number}</p>
					<p class="hp">HP: ${card.hp}</p>
					<p class="types">Types: ${card.types}</p>
					<p class="weaknesses">Weaknesses: ${card.weaknesses}</p>
				</div>
			</div>
			
        `;
		cards_container.appendChild(li);
	});
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

// button.addEventListener("click", async () => {
	
//});

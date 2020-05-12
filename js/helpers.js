export const renderCards = (cards) => {
    const cards_container = document.querySelector(".cards");
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
					<p><b>NationalPokedexNumber: </b> ${card.nationalPokedexNumber}</p>
					<p><b>Id: </b>${card.id}</p>
					<p><b>Types: </b> ${card.types}</p>
					<p><b>Set: </b> ${card.set}</p>
				</div>
			</div>
			
        `;
		cards_container.appendChild(li);
	});
};
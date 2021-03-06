export const renderCards = (cards) => {
    const cards_container = document.querySelector(".cards");
	cards_container.innerHTML = "";

	cards.forEach((card) => {
		const li = document.createElement("li");
		const image = card.imageUrl
		let nationalPokedexNumber,types;
			
		if(typeof card.nationalPokedexNumber === 'undefined') {
			nationalPokedexNumber = 'Unknown'
		}if(typeof card.types === 'undefined') {
			types = 'Unknown'
		}else {
			nationalPokedexNumber = card.nationalPokedexNumber 
			types = card.types
		}

		li.innerHTML = `
			<div class='img'>
				<img src=${image} alt="pokemonCard">
				<div class='cardName'>
					<p>${card.name}</p>
				</div>
			</div>
			<div class='overlay'>
				<div class='text'>
					<p><b>National PokedexNumber: </b> ${nationalPokedexNumber}</p>
					<p><b>Id: </b>${card.id}</p>
					<p><b>Types: </b> ${types}</p>
					<p><b>Set: </b> ${card.set}</p>
				</div>
			</div>
			
        `;
		cards_container.appendChild(li);
	});
};
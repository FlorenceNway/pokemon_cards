
export const filteredPokemon = (cards, query) =>
	cards.filter((card) => card.name.toLowerCase().match(query));



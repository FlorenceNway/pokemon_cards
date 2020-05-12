
export const fetchData = async (url) => {
    const response = await fetch(url).then((resp) => resp.json()).catch(error => console.log(error));
    
    return response.cards;
};




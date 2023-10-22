export async function fetchSH(name) {
    try {
        const response = await fetch(`https://superheroapi.com/api.php/2607295732758396/search/${name}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Rethrow the error so it can be caught by the caller
    }
}
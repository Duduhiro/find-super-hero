export function fetchSH(name) {
    fetch(`https://www.superheroapi.com/api.php/10207244891555840/search/${name}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    });
}
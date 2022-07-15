

const getJokes = async () => {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.chucknorris.io/jokes/random", requestOptions)
            .then(response => response.json())
            .then(result => {
                myJoke.innerHTML = result.value;
            })
            .catch(error => console.log('error', error));

    } catch (error) {
        console.log(error);
    }
};

window.addEventListener("load", () => {
    getJokes();
});
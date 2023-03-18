const loadApiData = async () => {
    try {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
      );
      const data = await res.json();
      randomJoke(data.joke);
    } catch (error) {
      alert(error);
    }
};

const randomJoke = (joke)=> {
    document.getElementById('joke-message').innerText = joke;
}
const newJoke = document.getElementById('joke');
newJoke.addEventListener('click', () =>{
    return loadApiData();
})












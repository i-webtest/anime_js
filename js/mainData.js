const mainData = () => {
  fetch('https://anime-e0a14-default-rtdb.firebaseio.com/anime.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

mainData();

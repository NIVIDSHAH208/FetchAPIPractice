var btn = document.getElementById("btnSubmit");
var laddu = document.getElementById("laddu")

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let numOfJokes = document.getElementById("howMany").value
    url = `https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=${numOfJokes}`;

    loadJokes()
    // console.log(data)
    
});



async function getJokes() {

    console.log(url);
    let response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return await response;
}

async function loadJokes() {
    data = await getJokes();
    loadJokesLaddu(data.jokes)

  
}

function loadJokesLaddu(data) {
    data.map(loadEachLaddu)
}

function loadEachLaddu(singleData) {
    let myStr = `<div id="box"><h2>${singleData.setup}</h2>
                    <h4>${singleData.delivery}</h4}</div>`;
    
    laddu.innerHTML+=myStr
    
}



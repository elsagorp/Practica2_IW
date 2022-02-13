const input = document.getElementById("search"),
    display = document.getElementById("characters");

input.addEventListener("keyup", (e) => {
    let output = "";
    fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            data.results.forEach((character) => {
                if (e.target.value.length >= 1) {
                    output += `          
              <div class="card mt-5 mx-auto" style="width: 18rem">
              <img src="${
                character.image
              }" class="card-img-top" alt="character image" />
                  <div class="card-body">
                      <h4 class="card-title">${character.name}</h4>
                      <div></div>
                      <p class="badge badge-pill badge-info">${
                        character.gender
                      }</p>
                      <p class="badge badge-pill badge-warning">${
                        character.species
                      }</p>
                      </div>
                      <div>
                      <span class = "text-gray">Status</span>
                      <p class="badge badge-pill ${
                        character.status === "Alive"? "badge-success": "badge-danger"
                      }">${character.status}</p>
                      </div>
                      <div>
                      <span class = "text-gray">Last Location</span>
                      <p class="badge badge-pill badge-dark">${
                        character.location.name
                      }</p>
                      </div>
                      <div>
                      <span class = "text-gray">First seen</span>
                      <p class="badge badge-pill badge-primary ">${
                           Episode(character.episode[0])
                        
                      }</p>
                      </div>
                  </div>
              </div>        
            `;
                }
            });
            display.innerHTML = output;
        });
    output = "";
});

function Episode(valor) {
    var resul = "";
    fetch(valor).then((res) => res.json()).then((data) => {
        // console.log(data.name);
        resul = data.name;
        console.log(resul);

    })
    return resul;

}
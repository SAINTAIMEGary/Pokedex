const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);

    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <table id="pokedex">
        <thead>
        <tr id="header">
            <th>Numero</th>
            <th>Pokemon</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Description</th>
            </tr>
            <tr>
            <td>${pokeman.id}</td>
            <td><a href="file:///home/rsma15/Bureau/PokedexBG/PokedexInfos.html?id=1"><img class="minia" src="${pokeman.image}"/></a></td>
            <td>${pokeman.name}</td>
            <td>${pokeman.type}</td>
            <td><button onclick="window.location.href='file:///home/rsma15/Bureau/PokedexBG/PokedexInfos.html?id=1';" class="bouton">+</button></td>
            </tr>
            </thead>
        </table>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();


function descripPok() {

    this.url = "https://pokeapi.co/api/v2/pokemon/1/"
    fetch(this.url).then(resultat => resultat.json()).then(
        data => {
            this.pokemon = data
            this.pokemon = (this.abilities)
            this.pokemon = (this.height)
            this.pokemon = (this.id)
            this.pokemon = (this.types)
            this.pokemon = (this.weight)


            console.log(data)
        }
    )

    const displayPokemon = (pokemon) => {
        console.log(pokemon);

        const pokemonHTMLString = pokemon
            .map(
                (pokeman) => `
                <main class="info">
  
                <img src="https://professorlotus.com/Sprites/Charmander.gif" width="230px" id="fullsala">
                
                </main>
                <article class="info">
                    <table>
                       
                        <tbody>
                            <tr>
                                <td class="tab">TYPE</td>
                                <td><img id="type" src="https://www.pokepedia.fr/images/thumb/f/fc/Miniature_Type_Feu_EB.png/68px-Miniature_Type_Feu_EB.png"></td>
                            </tr>

                            <tr>
                                <td class="tab">STATS</td>
                                <td>0,6 m</td>
                            </tr>
    
                            <tr>
                                <td class="tab">HEIGHT</td>
                                <td>0,6 m</td>
                            </tr>
                            <tr>
                                <td class="tab">${pokeman.weight}</td>
                                <td>${pokemon.weight}</td>
                            </tr>
                            <tr>
                                <td class="tab">ABILTIES</td>
                                <td>1. Brasier <br>
                                    2. Force Soleil    </td>
                            </tr>
                        </tbody>
                    </table>
        `
            )
            .join('');
        pokedex.innerHTML = pokemonHTMLString;
    }
}

descripPok()

function evol() {
    document.getElementsByClassName("evol")[0].classList.remove("display");
    document.getElementsByClassName("info")[0].classList.add("display");
    document.getElementsByClassName("info")[1].classList.add("display");
    document.getElementsByClassName("loca")[0].classList.add("display");


}

function info() {
    document.getElementsByClassName("info")[0].classList.remove("display");
    document.getElementsByClassName("info")[1].classList.remove("display");
    document.getElementsByClassName("evol")[0].classList.add("display")

}
function loca() {
    document.getElementsByClassName("evol")[0].classList.add("display");
    document.getElementsByClassName("info")[0].classList.add("display");
    document.getElementsByClassName("info")[1].classList.add("display");
    document.getElementsByClassName("loca")[0].classList.remove("display");
    document.getElementsByClassName("loca")[1].classList.remove("display");


}

var mew_img = document.getElementById('mewimg')
var mew_hp = document.getElementById('mewtwo_hp')
var mew_att = document.getElementById('mewteo_att')
var mew_def = document.getElementById('mewtwo_def')
var macchampImg = document.getElementById('macimg')
var mightImg = document.getElementById('mighimg')


// {url:"https://fizal.me/pokeapi/api/"+ x +".json"

function mewtwo() {
  $.ajax({url:"https://fizal.me/pokeapi/api/150.json",
  success: function(response) {
    hookImage(response,mew_img)
    // route to hp
    console.log(response.stats[5].base_stat);
    // route to attack
    console.log(response.stats[4].base_stat);
    // route to defense
    console.log(response.stats[3].base_stat);
    console.log(response);

    // var frontpic = response.sprites.front_default
  }
  })

}
function hookImage(x,pokemonNames) {
  pokemonNames.style.backgroundImage = "url(" + x.sprites.front_default + ")"
  pokemonNames.style.backgroundSize = '100% 100%'
}

mewtwo()

function macchamp() {
  $.ajax({url:"https://fizal.me/pokeapi/api/68.json",
  success: function(response) {
    hookImage(response, macchampImg)
    console.log(response.sprites.front_default);
    // var frontpic = response.sprites.front_default
  }
  })
}

macchamp()


function mightyena() {
  $.ajax({url:"https://fizal.me/pokeapi/api/262.json",
  success: function(response) {
    hookImage(response,mightImg)
    console.log(response.sprites.front_default);
    // var frontpic = response.sprites.front_default
  }
  })
}

mightyena()




//
// $.ajax({url:"https://fizal.me/pokeapi/api/068.json",
// success: function(getpoke) {
//   console.log(getpoke.name);
// }
// })

// $.ajax({url:"https://fizal.me/pokeapi/api/262.json",
// success: function(response) {
//   console.log(response.name);
// }
// })


// success: function(response) {
  // console.log(response.Search[1]);
  // hookImage(response)
// }
// })

var poke_name = document.getElementById('name')
var poke_img = document.getElementById('img')
// var mew_name = document.getElementById('mew_name')
var stat_hp = document.getElementById('hp')
var stat_att = document.getElementById('at')
var stat_def = document.getElementById('def')
// var macchampImg = document.getElementById('macimg')
// var mightImg = document.getElementById('mighimg')
var next= document.getElementById('next')


var trainer = []
var count = 0

// {url:"https://fizal.me/pokeapi/api/"+ x +".json"
class Pokemon {
  constructor(pokenumber) {
    this.hp;
    this.att;
    this.def;
    this.abil;
    this.getPokemon(pokenumber)
  }
  // hp = response.stats[5].base_stat
  // att = response.stats[4].base_stat
  // def = response.stats[3].base_stat
  // abil = []
  getPokemon(pokenumber) {
    var that = this;
    $.ajax({url:"https://fizal.me/pokeapi/api/"+ pokenumber +".json",
    success: function(pokemonInfo) {
      that.name = pokemonInfo.name
      that.hp = pokemonInfo.stats[5].base_stat
      that.att = pokemonInfo.stats[4].base_stat
      that.def = pokemonInfo.stats[3].base_stat
      that.img = pokemonInfo.sprites.front_default
      that.abil = []

      poke_name.innerHTML = that.name;
      poke_img.style.backgroundImage = "url(" + that.img + ")"
      poke_img.style.backgroundSize = '100% 100%'
      stat_hp.innerHTML = that.hp
      stat_att.innerHTML = that.att
      stat_def.innerHTML = that.def

      // console.log(name);
      // console.log(hp);
      // console.log(att);
      // console.log(def);
      // console.log(img);
    }
  })
 }
}


var mew2 = new Pokemon(150)
var machamp = new Pokemon(68)
var mightyena = new Pokemon(262)


trainer.push(mew2, machamp, mightyena)
console.log(trainer);

next.addEventListener('click',function() {
  if (count == trainer.length - 1 ) {
    count = 0
  }else{
    count++
  }
  // console.log(trainer[count].hp);
  stat_hp.innerHTML=trainer[count].hp;
  poke_name.innerHTML = trainer[count].name;
  poke_img.style.backgroundImage = "url(" + trainer[count].img + ")"
  // poke_img.style.backgroundSize = '100% 100%'
  stat_hp.innerHTML = trainer[count].hp
  stat_att.innerHTML = trainer[count].att
  stat_def.innerHTML = trainer[count].def
})



// class Mewto extends Pokemon {
//   constructor(hp, att, def, abil) {
//     super(hp, att, def, abil)
//   }
//
//   $.ajax({url:"https://fizal.me/pokeapi/api/150.json",
//     success: function(pokemonInfo) {
//       console.log(hp);
//     }
//
// }


// // function mewtwo() {
// //   $.ajax({url:"https://fizal.me/pokeapi/api/150.json",
// //   success: function(response) {
// //     hookImage(response,mew_img)
// //     // console.log("My name is " + response.name);
// //     // var mewName = response.name
// //     // console.log(mewName);
// //     // route to hp
// //     console.log(response.stats[5].stat.name +": "+response.stats[5].base_stat);
// //     // route to attack
// //     console.log("attack: "+response.stats[4].base_stat);
// //     // route to defense
// //     console.log("defense: "+response.stats[3].base_stat);
// //     // route to abilities
// //     console.log("abilities: "+response.abilities[0].ability.name +", " + response.abilities[1].ability.name );
// //     console.log(response);
// //     mew_hp.innerHTML= response.stats[5].stat.name +": "+response.stats[5].base_stat
// //     mew_att.innerHTML = ("attack: "+response.stats[4].base_stat);
// //     mew_def.innerHTML = ("defense: "+response.stats[3].base_stat);
// //   }
// //   })
// //
// // }
//
// mewtwo()
function hookImage(x,pokemonNames) {
  pokemonNames.style.backgroundImage = "url(" + x.sprites.front_default + ")"
  pokemonNames.style.backgroundSize = '100% 100%'
}
//
// function macchamp() {
//   $.ajax({url:"https://fizal.me/pokeapi/api/68.json",
//   success: function(response) {
//     hookImage(response, macchampImg)
//     console.log(response);
//     // console.log(response.sprites.front_default);
//     console.log(response.name);
//     // route to hp
//     console.log("hp: "+response.stats[5].base_stat);
//     // route to attack
//     console.log("attack: "+response.stats[4].base_stat);
//     // route to defense
//     console.log("defense: "+response.stats[3].base_stat);
//     console.log("abilities: "+response.abilities[0].ability.name +", " + response.abilities[1].ability.name );
//
//   }
//   })
// }
//
// macchamp()


// function mightyena() {
//   $.ajax({url:"https://fizal.me/pokeapi/api/262.json",
//   success: function(response) {
//     hookImage(response,mightImg)
//     // console.log(response.sprites.front_default);
//     console.log(response.name);
//     // console.log(response.sprites.front_default);
//     // route to hp
//     console.log("hp: "+response.stats[5].base_stat);
//     // route to attack
//     console.log("attack: "+response.stats[4].base_stat);
//     // route to defense
//     console.log("defense: "+response.stats[3].base_stat);
//     console.log("abilities: "+response.abilities[0].ability.name +", " + response.abilities[1].ability.name );
//     // var frontpic = response.sprites.front_default
//   }
//   })
// }

// mightyena()

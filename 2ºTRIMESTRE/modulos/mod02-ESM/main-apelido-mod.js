//usamos o * para dizer que estamos
//importando TUDO de um arquivo
//o termo "as" permite criar um apelido

import * as petShop from './gato-mod.js' 

console.log(petShop.banhoGato('Frajola', 'Quente'))
console.log(petShop.tosaGato('Rajado', 'Média'))
console.log(petShop.alimentarGato ('Sphynx', 'Ração'))
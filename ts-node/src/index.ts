import { getPokemon } from "./generics/getPokemon";



getPokemon(5)
    .then( res => console.log(res.name))
    .catch( err => console.log(err))
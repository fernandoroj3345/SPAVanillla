import getData from './src/utils/getData.js';
import Character from './src/pages/Character.js'

console.log('hola SPA')

const main = async () => {
        const data = await getData(); // Llama a la función sin ID para obtener todos los personajes
        //console.log('Rick and Morty Characters:', data); // Muestra los datos en consola
        const charactersHTML = data.map(character => Character(character)).join('')
        document.getElementById('app').innerHTML = charactersHTML

}

main()





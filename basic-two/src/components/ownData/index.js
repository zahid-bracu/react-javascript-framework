import movies from './movies';
import books from './books';


//combing collection of file using spread operator
const ownData=[...movies,...books];

//shuffling function
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}


//shuffling data
shuffle(ownData);

export default ownData;
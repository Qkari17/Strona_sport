import podatek, { calculate as superCalculate , myFavoriteColour} from "./calculate";

const firstName = "Dawid"
const age = 26
console.log(myFavoriteColour);

console.log(podatek);

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const umineko = document.querySelector('.umineko__js')

console.log(umineko)






const greet =(name, age) =>{
    const result = `Witaj ${name}! Masz ${age} lat!`
    return result;
}

console.log(greet(`Dawid`, 26))
console.log(greet('Krzysztof',15))

if (4===4) {
    console.log("jest git")
}
if(age == 27){
    console.log('git')
    }else{
        console.log('to nie ty')
    }
    if(age == 15){
        console.log('git')
        }else if(age==26){
            console.log('to Dawid')
        }
switch('japonia'){
    case "polska":
    console.log('ty polak')
    break;
    case "framcka":
    console.log('ty francuz')
    break;
    default:
        console.log('trudno stwierdzić')
}
(1>2) ? console.log('matma') : console.log('nie jest to matma')


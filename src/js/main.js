import podatek, { calculate as superCalculate , myFavoriteColour} from "./calculate";
import { substract } from "./substract";

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


console.log(superCalculate(4))


console.log(`Różnica między 10, a 3 to =${substract(10,3)}`)

const hardware = ['mouse','keyboard','screen']
console.log(hardware[1])
console.log(hardware.length)

const myObject={
    name:'Dawid',
    age: 26
}
hardware.push(myObject); 

const myText = "Maratony są za długie"

console.log(myText[10])

for (let i=0; i<3;i++){
    console.log(`${i} wykonanie pętli`)
}
for (let i=0; i<hardware.length;i++){
    console.log(`Index: ${i} jest to: ${hardware[i]}`)
}
const groupOfNumbers = [1,30,5,7]
let liczba = 0

for (let i=0; i<groupOfNumbers.length;i++){
   liczba= liczba + groupOfNumbers[i]
   console.log(liczba)
}
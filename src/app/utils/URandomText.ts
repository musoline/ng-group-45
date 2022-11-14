


const WORDS = ["BMW","Mercedes","Volvo","Ford","Tesla","Cadilac","Fiat","Alfa Romeo","Mitsubishi","Mazda"];

const getRandomIntInclusive = (min:number, max:number):number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

export const getRandomText = ()=>{
    return WORDS[getRandomIntInclusive(0,WORDS.length-1)];


}
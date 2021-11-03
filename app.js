// Vi importerer mattefunksjonene vi lagde i CustomMath.js
import * as CustomMath from './Lib/CustomMath.js';

// Vi lager to tallvariabler, som vi skal finne summen av
const number1 = 6;
const number2 = 13;

// Vi bruker funksjonen vi lagde i CustomMath til å finne summen av number1 og number2
const sum = CustomMath.Sum(number1, number2);

// Vi logger resultatet i konsollen
console.log('Dette er summen av ' + number1 + ' og ' + number2);
console.log(sum);
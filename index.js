import fetch from'node-fetch';

let quotes =[`"Out of the mountain of despair, a stone of hope." - Martin Luther King Jr.`, //0
`"The best revenge, is massive success" - Frank Sinatra`, //1
`"Failure is success in progress." - Albert Einstein` //2
]


console.log(quotes[Math.floor(Math.random() * 3)])

const response = await fetch('https://quotable.io/random')
const data = await response.json();
console.log(`"${data.content}" - ${data.author}`)


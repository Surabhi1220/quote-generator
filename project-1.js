// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."`,
    person: `Stephen King`
},
{
    quote: `"We write to taste life twice, in the moment and in retrospect."`,
    person: `Anaïs Nin`
},
{
    quote: `""If there's a book that you want to read, but it hasn't been written yet, then you must write it."`,
    person: `Toni Morrison`
},
{
    quote: `"One day I will find the right words, and they will be simple."`,
    person: `Jack Kerouac`
},
{
    quote: `"Either write something worth reading or do something worth writing."`,
    person: `Benjamin Franklin`
},
{
    quote: `"That it will never come again is what makes life so sweet."`,
    person: `Emily Dickinson`
},
{
    quote: `"It is never too late to be what you might have been."`,
    person: `George Eliot`
},
{
    quote: `"Pain is inevitable. Suffering is optional."`,
    person: `Haruki Murakami`
},
{
    quote: `"All the world's a stage, and all the men and women merely players."`,
    person: `William Shakespeare`
},
{
    quote: `"Be kind, for everyone you meet is fighting a hard battle."`,
    person: `Plato`
},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
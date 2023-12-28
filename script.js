// Variables

const btn = document.getElementById('btn');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const body = document.querySelector('body');
const button = document.querySelector('#btn');
const content = document.querySelector('.content');

let quotes = [
    {
        quote: "We have three choices in life. You can watch things happen, make things happen, or wonder what the hell happened.",
        person: "Thomas Edison"
},
    {
        quote: "Education is not the learning of many facts, but the training of the mind to think",
        person: "Albert Einstein"
},
    {
        quote: "Those who are abke to see beyond the shadows and lies of their culture will never be understood let alone believed by the masses.",
        person: "Plato"
},
    {
        quote: "No single thing is perfect by itself. That's why we are born to attract other things to make up for what we lack.",
        person: "Itachi Uchiha"
},
    {
        quote: "Standing alone doesn't mean I am alone. It means that I am strong enough to handle things by my self",
        person: "Saotoru Gojo"
},
    {
        quote: "I could say I'm not sad, but I'd be lying. The problem is the world won't let me stay a kid forever, so I can't lie around crying about it either.",
        person: "Shikamaru Nara"
},
    {
        quote: "New friends may be poems, but old friends are alphabets. Do not forget the alphabets, because you will need them to read the poems.",
        person: "William Shakespeare"
},
    {
        quote: "The most expensive thing in the world is trust. It can take years to earn it and just a few seconds to lose",
        person: "Tupac Shakur"
},
    {
        quote: "The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.",
        person: "Charles Bukowski"
},
    {
        quote: "Life moves pretty fast. If you don't stop to look around once in a while you could miss it.",
        person: "Ferris Bueller"
},
    {
        quote: "If they stand behind you give them protection. If they stand beside you give them respect. If they stand against you show no mercy.",
        person: "Bruce Lee"
},
    {
        quote: "Everything we hear is an option, not a fact. Everything we see is a perspective, not the truth.",
        person: "Marcus Aurelius"
},
    {
        quote: "Life isn't about waiting for the thunderstorms to pass, it's learning how to dance in the rain.",
        person: "Keanu Reeves"
},
    {
        quote: "I grew up to understand that people don't always build walls to keep others out, it's done out of a necessity to protect whatever is left within.",
        person: "Thomas Shelby"
},
    {
        quote: "The only thing we are allowed to do is to believe that we won't regret the choice we made.",
        person: "Levi Ackerman"
},
    {
        quote: "This world is full of things that don't go as you wish. The longer you live, the more you realize that reality is just made of pain, suffering and emptiness.",
        person: "Madara Uchiha"
},
    {
        quote: "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain. Because the greatest lessons in life is learned through pain",
        person: "Pain"
},
    {
        quote: "If you don't like your destiny, don't accept it. Instead have the courage to change it the way you want it to be.",
        person: "Naruto Uzumaki"
},
    {
        quote: "Dead people receive more flowers than the living ones because regret is stronger than gratitude.",
        person: "X-Libra"
},
    {
        quote: "Laziness is the mother of all bad habits. But ultimately she is a mother and we should respect her.",
        person: "Shikamaru Nara"
},
    {
        quote: "Human relations are chemical reactions. If you have a reaction then you can never return back to your previous state of being.",
        person: "Kaneki Ken"
},
    {
        quote: "Being negative only makes your journey more difficult. You may be given a cactus, but you don't have to sit on it.",
        person: "Katsuki Bakugo"
}
]




btn.addEventListener('click', ()=>{
function col(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#';
    while(color.length < 7){
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color;
}
function angle(){
    let ang = ['45deg', '90deg', '135deg', '180deg', '225deg', '270deg', '315deg', '360deg']
    
    let an = ang[Math.floor(Math.random() * ang.length)]
    return an;
}
let quot = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quot.quote;
    person.innerText =`-  ${quot.person}`;
    content.classList.add('anim')
    setTimeout(() => {
        content.classList.remove('anim')
    }, 1000);
let colour1 = col()
let colour2 = col()
let angl = angle()
    quote.style.color = colour1;
    person.style.color = colour1;

    body.style.background = `linear-gradient(${angl}, ${colour1}, ${colour2})`;
    button.style.background = `linear-gradient(${angl}, ${colour1}, ${colour2})`;
    console.log( body.style.background, angl)
});

window.addEventListener('load', ()=>{

    function col(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#';
    while(color.length < 7){
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color;
}
function angle(){
    let ang = ['45deg', '90deg', '135deg', '180deg', '225deg', '270deg', '315deg', '360deg']
    
    let an = ang[Math.floor(Math.random() * ang.length)]
    return an;
}
let quot = quotes[Math.floor(Math.random() * quotes.length)];
    
    quote.innerHTML = '<i class="fa fa-quote-left"></i>' + quot.quote;
    person.innerText = `- ${quot.person}`;
    content.classList.add('anim')
    setTimeout(() => {
        content.classList.remove('anim')
    }, 1000);
let colour1 = col()
let colour2 = col()
let angl = angle()
    quote.style.color = colour1;
    person.style.color = colour1;
    body.style.background = `linear-gradient(${angl}, ${colour1}, ${colour2})`;
    button.style.background = `linear-gradient(${angl}, ${colour1}, ${colour2})`;
    console.log( body.style.background, angl)
})
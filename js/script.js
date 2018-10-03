let message;
const halloween = 31;
let d = new Date();
let today = d.getDate(); // return the day of the month as a number 0-30
const daysUntilHalloween = halloween - today;

const spookyElement = document.querySelector('#spooky');
const factElement = document.querySelector('#fact');

const facts = [
    'California, Illinois, Michigan, New York, Ohio, and Pennsylvania produce the majority of pumpkins for Halloween – over 1 billion pounds a year!',
    'The name Jack-O-Lantern first originated from an Irish folktale about a man named Stingy Jack who tricked the Devil over and over again. When Jack died, he was forced to walk the Earth with only a carved-out turnip and burning coal to help light his way.',
    'The Plymouth Colony Pilgrims started the superstition about black cats.',
    'Tootsie Rolls, Smarties, and candy corn were among the most hated candies in 2017.',
    "Reese's Peanut Butter Cups were 2017’s most popular Halloween candy.",
    'At one time, it was customary to perform dances, songs, prayers, and plays in order to receive treats.',
    'Silly String is banned in Hollywood on Halloween.',
    'In 2014, the total estimated cost of all Halloween costumes was $2.8 billion.',
    'Candy Corn was created in 1898 and 35 million pounds of it are made every year.',
    'Halloween in the second largest consumer holiday in the United States. Consumers spent about $7 billion in 2015.',
    "Guinness World Records has named the Haunted Cave in Lewisburg, Ohio as the world's longest haunted house. It measures 3,564 feet long and is located 80 feet below ground in an abandoned mine.",
    'Harry Houdini died on Halloween in 1926.',
    'Trunk-or-Treating was created as a safer alternative to Trick-or-Treating in 2000.',
    'Halloween ranks as the sixth most popular card-giving holiday, with 20 million cards sent each year.',
    'In 2017, the most popular pet costumes were pumpkins, hot dogs, and a tie between a dog, lion, and pirate.',
];

if (today === halloween) {
    message = "It's Halloween! Stay spooky!";
} else {
    message = 'There are ' + daysUntilHalloween + ' days until Halloween';
}

// Display message and fact
spookyElement.innerText = message;
factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];

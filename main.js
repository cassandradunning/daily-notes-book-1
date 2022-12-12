/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
    {
        id: 1,
        text: "Harry Potter",
        author: " JK Rowling",
        date: "1997",
        topics: ["childrens", "fantasy", "fiction"]
    },
    {
        id: 2,
        text: "Pride & Prejudice",
        author: "Jane Austen",
        date: "1813",
        topics:["fiction", "romance", "classics"]
    },
    {
        id: 3,
        text: "Carrie",
        author: "Stephen King",
        date: "1974",
        topics: ["thriller", "fiction", "suspense"]
    },

]
/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)*/
   console.log(notes)


 /*  Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

/* extoys.push(skates)
console.log(toys) */
const books =[
    {
        id: 4,
        text: "Atomic Habits",
        author: " James Clear",
        date: "2008",
        topics: ["self-help", "nonfiction", "psychology"]
    },
    {
        id: 5,
        text: "The Lion, The Witch, & the Wardrobe",
        author: "C.S. Lewis",
        date: "1950",
        topics: ["fiction", "childrens", "fantasy"]
    },
    {
        id: 6,
        text: "King of Scars",
        author: "Leigh Bardugo",
        date: "2019",
        topics: ["thriller", "fiction", "romance", "teen"]
    },

]
for (const book of books){
    notes.push(book)
}


for (const note of notes){
console.log(note.text)
}
// console.log(notes) /*

console.log("*** All Note Topics ***")
for (const note of notes){
    for (const topic of note.topics)
        console.log(note.topics)   
}


/* ]
toys.push(skates)
console.log(toys)

const toytoFind = 2

for (const toy of toys){
    // Allow you to search toys based off id
    if (toy.id === toytoFind){
            // Add 5% price inc to the price of each toy
        toy.price = (.05 * toy.price) + toy.price
    // Add the price inc to the output
        console.log(`The ${toy.maker} ${toy.name} costs $${toy.price} dollars.`)
}
}*/

//#6 Daily Notes: Average Topics Per Note
console.log("*** All Note Topics ***")
let totalTopics = 0
for (const note of notes){
   for (const topic of note.topics) {
    totalTopics += 1
   }
}
const averageTopics = totalTopics /notes.length
console.log(averageTopics)

// #7 Daily Notes: Notes by Topic
const filteredNotes = []
const criteria = "fiction"
for (const note of notes)
//allow you to search notes based off topics
if (note.topics.includes("fiction")){
    filteredNotes.push(note)
}
console.log(filteredNotes)

// #8 Daily Notes: HTML Note Articles
console.log("***  Note Articles  ***")
let htmlString = ""
// Construct strings that include <article> with the text from each note interpolated inside it
for (const note of notes){
    htmlString += `<article> ${note.text}`
    for (const topic of note.topics){
        htmlString += `<section>${topic}</section>`
    }
htmlString += `</article> \n`
}
console.log(htmlString)
// #9 Daily Notes: Note Topics Subsections
// create some <section> HTML elements for each note
// update the previous section to include each topic contained in a child <section> element for each note
// use a nested for...of loop AND update the output to be a multi-line string using string templates



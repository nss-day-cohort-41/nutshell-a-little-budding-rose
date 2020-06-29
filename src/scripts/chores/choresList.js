//* created by Lacey *

console.log("Do your chores!");

const makeChore = (id, choreName, choreDate) => {
    const newChore = {
        id: id,
        choreName: choreName,
        choreDate: choreDate,
        choreComplete: Boolean
    }

    return newChore;
}


// id, name of chore, date 
const newChore1 = makeChore(1,"Clean livingroom", "05-27-20")
const newChore2 = makeChore(2,"Unload dishwasher", "05-28-20")

console.log("this is the new chore", newChore1);
console.log("this is the second chore", newChore2);

export default makeChore;



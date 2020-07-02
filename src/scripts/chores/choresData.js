////This module stores the calls function
//*This section was created by Lacey Walker*/

const makeChore = (choreName, choreDate) => {
    const newChore = {
        choreName: choreName,
        choreDate: choreDate,
        choreComplete: true
    }

    return newChore;
}

export default makeChore;

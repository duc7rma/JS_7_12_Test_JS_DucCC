var hobbies = {
    "Steve": ['Fashion', 'Yoga', 'Piano', 'Reading'],
    "Steven": ['Fashion', 'Yoga', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};

function findAllHobbyists(hobby, hobbies) {
    // Object.keys(hobbies).includes(hobby) && hobbies[hobby].for
    let results = []
    for (let key in hobbies) {
        hobbies[key].includes(hobby) && results.push(key)
    }

    return results;
}


console.log(findAllHobbyists('Puzzles', hobbies));

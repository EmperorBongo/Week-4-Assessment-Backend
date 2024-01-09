let dogs = []
let globalID = 1

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["RUFF RUFF!", "Youre a coooool cat!", "Nice paws"];
        
     
        let randomIndex = Math.floor(Math.random() * compliments.length)
        let randomCompliment = compliments[randomIndex]
        
        res.status(200).send(randomCompliment)
    },
    
    getFortune: (req, res) => {
        const fortune = ["Today you will go on a walk!", "You are only as strong as your head!", "Your going to find peace today.", "Youre going to die.", "You will become batman."];

        let randomIndex1 = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex1]

        res.status(200).send(randomFortune)
    },

    createDog: (req, res) => {
        req.body.id = globalID
        dogs.push(req.body)
        globalID++
        res.status(200).send(dogs)
    },

    deleteDog: (req, res) => {
        const newArr = dogs.filter((dog) => dog.id !== +req.params.id)
        dogs = newArr
        res.status(200).send(dogs)
    },

    getDogs: (req, res) => {
        res.status(200).send(dogs)
    },


    updateDogName: (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const foundDog = dogs.find((dog) => dog.id === +id);
    foundDog.name = name;
    res.status(200).send(foundDog);
  }

}
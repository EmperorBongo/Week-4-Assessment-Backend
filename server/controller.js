let userDetails = []

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
     
        let randomIndex = Math.floor(Math.random() * compliments.length)
        let randomCompliment = compliments[randomIndex]
        
        res.status(200).send(randomCompliment)
    },
    
    getFortune: (req, res) => {
        const fortune = ["Today You will become rich!", "You are only as strong as your head!", "Your going to find peace today.", "Youre going to die.", "You will become batman."];

        let randomIndex1 = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex1]

        res.status(200).send(randomFortune)
    },

    postUserDetails: (req, res) => {
        const { username, firstName, lastName, password } = req.body

       
        console.log('Received User Details:', { username, firstName, lastName, password })

        res.status(200).send('User details received successfully!')
    },

    putForgotPassword: (req, res) => {
        const { newPassword } = req.body;

    
        console.log('Reset Password:', { newPassword });

        res.status(200).send('Password reset successfully!');
    }

}
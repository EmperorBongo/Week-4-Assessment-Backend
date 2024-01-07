const fortuneBtn = document.getElementById("fortuneButton")
const complimentBtn = document.getElementById("complimentButton")
const form = document.querySelector('#dogDetails')
const Input = document.querySelector('#nameInput')




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data
            alert(data)
            console.log(res.data)
        })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune") 
        .then(res => {
            const data = res.data
            alert(data)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}

const createDog = () => {
    axios.post('http://localhost:4000/api/userdetails', { dogName })
        .then(res => {
            const data = res.data
            alert(data)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitButton.addEventListener('click', submitUserDetails)


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

const submitUserDetails = () => {
    const username = document.getElementById('username').value
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const password = document.getElementById('password').value

    console.log('User Details:', { username, firstName, lastName })

    axios.post('http://localhost:4000/api/userdetails', { username, firstName, lastName, password })
        .then(res => {
            const data = res.data
            alert(data)
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}

const forgotPassword = () => {
    const newPassword = prompt('Please reset the password:')

    axios.post('http://localhost:4000/api/forgotpassword', {newPassword})
        .then(response => {
            console.log('Server response:', response.data)
            alert('Please Reset your password')
        })
        .catch(error => {
            console.error('Error:', error)
            alert('Failed to initiate password reset. Please try again.')
        })   
}

    const userDelete = 'User id' = ()

const complimentBtn = document.getElementById("complimentButton")
complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")
fortuneBtn.addEventListener('click', getFortune)

const submitButton = document.getElementById('submitUserDetials')
submitButton.addEventListener('click', submitUserDetails)

const forgotPasswordButton = document.getElementById('forgotPassword')
forgotPasswordButton.addEventListener('click', forgotPassword)

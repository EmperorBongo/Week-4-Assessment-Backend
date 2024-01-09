const fortuneBtn = document.getElementById("fortuneButton");
const complimentBtn = document.getElementById("complimentButton");
const form = document.querySelector('#dog-form');
const dog = document.querySelector('#name-input');
const container = document.querySelector('#name-container');

const updateDogName = (dogId, newName) => {
  return axios.put(`http://localhost:4000/api/dogs/${dogId}`, { name: newName })
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error('Error updating dog name:', error)
      throw error;
    })
}

const createDog = (dog) => {
  let h4 = document.createElement('h4')
  h4.textContent = `${dog.name}`

  h4.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    const newDogName = prompt('Enter new name for the dog:')
    if (newDogName) {
      updateDogName(dog.id, newDogName)
        .then((updatedDog) => {
          h4.textContent = `${updatedDog.name}`
        })
        .catch((err) => {
            console.log(err)
        })
    }
  })

  h4.addEventListener('click', () => {
    deleteDog(dog)
  })

  container.appendChild(h4)
}

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
    .catch(err => {
      console.log(err)
    })
}

const getDogs = () => {
  axios.get('http://localhost:4000/api/dogs')
    .then((res) => {
      container.innerHTML = ""
      res.data.forEach(createDog)
    })
    .catch((err) => {
      console.error(err)
    });
};

const deleteDog = (taskObj) => {
  axios.delete(`http://localhost:4000/api/dogs/${taskObj.id}`)
    .then((res) => {
      container.innerHTML = ""
      res.data.forEach(createDog)
    })
    .catch((err) => {
      console.error(err)
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    name: dog.value
  };
  axios.post('http://localhost:4000/api/dogs', body)
    .then((res) => {
      container.innerHTML = ""
      res.data.forEach(createDog)
      dog.value = ''
    })
    .catch((err) => {
      console.error(err)
    })
})

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

getDogs()


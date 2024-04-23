/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

// ANSWER

const output = document.getElementById('output');

fetchCars();

async function fetchCars() {
    try {
      const response = await fetch('cars.json');
      if (!response.ok) {
        throw new Error('Failed to fetch cars data');
      }
      const cars = await response.json();
      displayCars(cars);
    } catch (error) {
      console.error('Error fetching cars data:', error.message);
    }
}

function displayCars(cars) {
    cars.forEach(car => {
      const carCard = createCarCard(car);
      output.appendChild(carCard);
    });
}

function createCarCard(car) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const carBrand = document.createElement('h2');
    carBrand.textContent = `Car Brand: ${car.brand}`;
  
    const modelsHeading = document.createElement('h3');
    modelsHeading.textContent = 'Models:';
  
    const modelsList = document.createElement('ul');
    car.models.forEach(modelItem => {
      const listItem = document.createElement('li');
      listItem.textContent = modelItem;
      modelsList.appendChild(listItem);
    });

    card.appendChild(carBrand);
    card.appendChild(modelsHeading);
    card.appendChild(modelsList);
  
    return card;
}
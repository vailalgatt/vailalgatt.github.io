/**
 * I need a way to make Cars
 * We need a list to store Cars in
 * draw to screen ever car in the list
 * 
 */


var cars = []

var properties = []

var jobs = []

function Car(picture, price, description, condition, make, model, year, doors, contact) {
    this.picture = picture
    this.price = price
    this.description = description
    this.condition = condition
    this.make = make
    this.model = model
    this.year = year
    this.doors = doors
    this.contact = contact

    cars.push(this)

}

function Properties(picture, price, parking, lot, bedrooms, bathrooms, yearBuilt, heating, cooling) {
    this.picture = picture
    this.price = price
    this.parking = parking
    this.lot = lot
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.yearBuilt = yearBuilt
    this.heating = heating
    this.cooling = cooling

    properties.push(this)

}

function Jobs(position, requirements, startDate, salary) {
    this.position = position
    this.requirements = requirements
    this.startDate = startDate
    this.salary = salary

    jobs.push(this)

}

var jasonsCar = new Car("http://lorempixel.com/200/200/transport", 5, "grey", "like new", "toyota", "prius", 2010, 4, "000-111-2222")
var jakesCar = new Car("http://lorempixel.com/200/200/transport", 500, "silver", "parts", "Chrysler", "300M", "2000", 4, "takethisjunk@gmail.com")

var vailsHouse = new Properties("https://s-media-cache-ak0.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807.jpg", 500000, "3 garage", "1 acre", "4", "3", 2010, "central", "central")
var johnsHouse = new Properties("https://s-media-cache-ak0.pinimg.com/736x/a4/8c/d6/a48cd68cb85fa6a82beb7085dd9fc085.jpg", 100, "2 garage", "2 acres", 3, 4, 2000, "central", "central")


function drawCars(arrCars) {
    var template = ""
    for (var i = 0; i < arrCars.length; i++) {
        var car = arrCars[i]
        template += `
            <div class="col-sm-4">
                <img src="${car.picture}">
                <h4>${car.make} ${car.model} ${car.year}</h4>
            </div>
        `
    }
    document.getElementById("list").innerHTML = template
}


function drawProperties(arrProperties) {
    var template = ""
    for (var i = 0; i < arrProperties.length; i++) {
        var properties = arrProperties[i]
        template += `
            <div class="col-sm-4">
                <img src="${properties.picture}">
                <h4>${properties.price} ${properties.bedrooms} ${properties.bathrooms}</h4>
            </div>
        `
    }
    document.getElementById("list").innerHTML = template
}

function drawJobs(arrJobs) {
    var template = ""
    for (var i = 0; i < arrJobs.length; i++) {
        var jobs = arrJobs[i]
        template += `
            <div class="col-sm-4">
                <ul>${jobs.position}</ul>
                <li>${jobs.requirements}</li>
                <li>${jobs.startDate}</li>
                <li> ${jobs.salary}</li>
            </div>
        `
    }
    document.getElementById("list").innerHTML = template
}

function createCar(e){
    e.preventDefault();
    var form = e.target;
    new Car(form.picture.value, form.price.value, form.description.value, form.condition.value, form.make.value, form.model.value, form.year.value,
    form.doors.value, form.contact.value)
    form.reset()
    drawCars(cars)
}

function createProperties(e){
    e.preventDefault();
    var form = e.target;
    new Properties(form.picture.value, form.price.value, form.parking.value, form.lot.value, form.bedrooms.value, form.bathrooms.value, form.yearBuilt.value, form.heating.value, form.cooling.value)
    form.reset()
    drawProperties(properties)
}

function createJobs(e){
    e.preventDefault();
    var form = e.target;
    new Jobs(form.position.value, form.requirements.value, form.startDate.value, form.salary.value)
    form.reset()
    drawJobs(jobs)
}



































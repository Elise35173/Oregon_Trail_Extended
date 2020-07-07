class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food += 2
    }
    eat () {
        if (this.food > 0) {
            this.food -= 1
        }
        else {
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount () {
        return this.capacity - this.passengers.length
    }
    join (traveler) {
        if (this.capacity !== this.passengers.length) {
            this.passengers.push(traveler)
        }
        else {
            return "There is no room for this passenger."
        }
    }
    shouldQuarantine () {
        let isUnhealthy = this.passengers.some(index => index.isHealthy == false)
        return isUnhealthy
    }
    totalFood () {
        let foodSum = 0
        for (let index = 0; index < this.passengers.length; index ++) {
            foodSum += this.passengers[index].food 
        }
        return foodSum
    }
}
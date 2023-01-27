const Dragon = require(`../classes/dragon`)

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals
        this.friend = friend
    }
    hasLifeGoals() {
        let goals;
        for (let i = 0; i < this.lifeGoals.length; i++) {
            goals = this.lifeGoals[i]
            console.log(`${this.name} likes to ${goals}`)
        }
    }
    helpsPeople() {
        return `${this.name} helps their friend ${this.friend}`
    }
}

module.exports = FriendlyDragon

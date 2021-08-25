
const TeamMember = require("./TeamMembers");
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getRole() {
        return toString(this.role);
    }
    getId() {
        return Number(this.id);
    }
    getEmail() {
        return toString(this.email)
    }
}

module.exports = Employee;
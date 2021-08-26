const TeamMember = require('./TeamMembers.js')

function Manager(name, role, id, email, officeNumber) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager'
}
getOfficeNumber() {
        return Number(this.officeNumber)
}
}

    Manager.prototype = Object.create(TeamMember.prototype)

    Manager.prototype.getOfficeNumber= function() {
            return Number(this.officeNumber)
        }
module.exports = Manager; 
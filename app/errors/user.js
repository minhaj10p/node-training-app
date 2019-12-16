// users.js

class UserNotFound extends Error {
    constructor(...args) { super(args) }
}

class InvalidUserObject extends Error {
    constructor(...args) { super(args) }
}

module.exports = { UserNotFound, InvalidUserObject };
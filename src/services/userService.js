import { contactService } from "./contactService"

export const userService = {
    getUser,
    signup,
    transferFunds
}

function getUser() {
    return JSON.parse(localStorage.getItem('loggedinUser'))
}

function signup(name) {
    const user = {
        name,
        coins: 100,
        moves: []
    }

    _saveUser(user)
    return { ...user }
}

async function transferFunds({ funds, contactId }) {
    const user = getUser()
    user.coins -= funds
    const contact = await contactService.getContactById(contactId)
    const move = {
        toId:contactId,
        to:contact.name,
        at:Date.now(),
        amount:funds
    }
    user.moves.unshift(move)
    _saveUser(user)
    return Promise.resolve(user)
}

function _saveUser(user) {
    localStorage.setItem('loggedinUser', JSON.stringify(user))
}
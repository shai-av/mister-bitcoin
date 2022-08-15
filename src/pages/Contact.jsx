import { Component } from "react";
import { Link } from 'react-router-dom'
import { ContactFilter } from "../cmps/ContactFilter";
import { ContactList } from "../cmps/ContactList";
import { contactService } from "../services/contactService";

export class Contact extends Component {
    state = {
        filterBy: null,
        contacts: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    onDelete = async (contactId) => {
        const contacts = await contactService.deleteContact(contactId)
        this.setState({ contacts })
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return
        return (
            <>
                <Link to="/contact/edit">Add contact</Link>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                < ContactList contacts={contacts} onDelete={this.onDelete} />
            </>
        )
    }
}
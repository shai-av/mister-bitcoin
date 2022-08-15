import { Component } from "react";
import { contactService } from "../services/contactService";

export class ContactDetails extends Component {
    state = {
        contact: null,
    }

    componentDidMount() {
        this.setContact()
    }

   async setContact() {
        try {
            const contactId = this.props.match.params.id
            const contact = await contactService.getContactById(contactId)
            this.setState({ contact })
        } catch (error) {
            console.log(error)
        }
    }

    onBack = () => {
        this.props.history.push('/contact')
    }
    
    render() {
        if (!this.state.contact) return
        const { contact: { name, phone, email } } = this.state
        return (
            <div>
                <h3>{name}</h3>
                <h3>{phone}</h3>
                <h3>{email}</h3>
                <button onClick={this.onBack}>Back</button>
            </div>
        )
    }
}
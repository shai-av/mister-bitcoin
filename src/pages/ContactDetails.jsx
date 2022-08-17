import { Component } from "react";
import { TransferFunds } from "../cmps/TransferFunds";
import { contactService } from "../services/contactService";
import { userService } from "../services/userService";

export class ContactDetails extends Component {
    state = {
        contact: null,
        loggedinUser: null
    }

    componentDidMount() {
        this.setState({ loggedinUser: userService.getUser() })
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

    TransferFunds = async (funds) => {
        const user = await userService.transferFunds({ funds, contactId: this.state.contact._id })
        this.setState({ loggedinUser: user })
    }

    _formatDate(timestamp) {
        const hour = new Date(timestamp).getHours()+''
        const min = new Date(timestamp).getMinutes()+''
        const day = new Date(timestamp).getDate()
        const month = (new Date(timestamp) + '').substring(4, 7)
        return hour.padStart(2, 0) + ':' + min.padStart(2, 0) + ' ,' + day + ' ' + month
    }

    render() {
        if (!this.state.contact) return
        const { contact: { name, phone, email ,_id}, loggedinUser } = this.state
        const moves = loggedinUser.moves.filter((move)=>move.toId === _id)
        return (
            <div className="contact-details">
                <section>
                    <h3>{name}</h3>
                    <h3>{phone}</h3>
                    <h3>{email}</h3>
                </section>
                <section>
                    <TransferFunds TransferFunds={this.TransferFunds} loggedinUser={loggedinUser} contactName={name} />
                </section>
                {moves.length > 0 &&
                    <section>
                        <ul>
                            {moves.map(({ to, at, amount }) => {
                                return <li className="flex column move-preview" key={at}>
                                    <h4>To : {to}</h4>
                                    <h4>At : {this._formatDate(at)}</h4>
                                    <h4>Amount : {amount} coins</h4>
                                </li>
                            })}
                        </ul>
                    </section>}
                <button onClick={this.onBack}>Back</button>
            </div>
        )
    }
}
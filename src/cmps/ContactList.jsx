import { ContactPreview } from "./ContactPreview"

export function ContactList({contacts,onDelete}){
    return (
        <div className="contact-list ">
            <ul className="clean-list">
                {contacts.map((c)=><ContactPreview contact={c} key={c._id}  onDelete={onDelete}/>)}
            </ul>
        </div>
    )
}
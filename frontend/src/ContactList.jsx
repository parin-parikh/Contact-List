import React from 'react'

const ContactList = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if(response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete");
            }
        }
        catch(error) {
            alert(error);
        }
    }

    return <div>
        <h2>My Contacts</h2>
        <div className='table-container'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <div className='actions'>
                                    <button className='update' onClick={() => updateContact(contact)}>Update</button>
                                    <button className='delete' onClick={() => onDelete(contact.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ContactList
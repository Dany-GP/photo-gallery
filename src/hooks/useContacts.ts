import { Contact, Contacts } from '@capacitor-community/contacts';


export default function useContacts() {
    Contacts.getContacts().then(result => {
        console.log(result);
        for (const contact of result.contacts) {
            console.log(contact);
        }
    });
}
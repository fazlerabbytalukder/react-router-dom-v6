import { getContact, getContacts } from "../contacts";

export async function getContactsoader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function getContactloader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}
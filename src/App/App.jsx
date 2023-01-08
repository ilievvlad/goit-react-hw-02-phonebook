import { Component } from "react";
import { Container, Title } from "./App.styled";
import { nanoid } from "nanoid";

import { ContactForm } from "Components/ContactForm/ContactForm";
import { ContactList } from "Components/ContactList/ContactList";
import { Filter } from "Components/Filter/Filter";

export class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: ''
	}

	handleAddContact = ({ name, number }) => {
		const names = this.state.contacts.map(contact => contact.name);
		if (names.indexOf(name) >= 0) {
			alert(name + " is already in contacts.");
			return;
		}
		this.setState(prevState => {
			return {
				contacts: [{ name, number, id: nanoid() }, ...prevState.contacts],
			};
		});
	};

	handleDelete = idx => {
		this.setState(prevState => {
			const newContactsList = prevState.contacts.filter(contact => contact.id !== idx);
			return { contacts: newContactsList };
		});
	};

	handleFilter = e => {
		this.setState({ filter: e.target.value });
	};

	handleContacts = () => {
		const { filter, contacts } = this.state;
		const normalizedFilter = filter.toLowerCase();

		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);
	};

	render() {
		const { filter } = this.state;

		return (
			<Container>
				<Title>Phonebook</Title>
				<ContactForm onSubmit={this.handleAddContact} />

				<Title>Contacts</Title>
				<Filter value={filter} onFilter={this.handleFilter} />
				<ContactList contacts={this.handleContacts()} onDelete={this.handleDelete} />
			</Container>
		);
	}
};

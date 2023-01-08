import { Component } from "react";
import { PropTypes } from "prop-types";

import { Form, Title, Input, Button } from "./ContactForm.styled";

export class ContactForm extends Component {
	state = { name: '', number: '' }

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({ name: '', number: '' });
	}

	render() {
		const { name, number } = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<label>
					<Title>Name</Title>
					<Input
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						placeholder="Enter your name"
						value={name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<Title>Number</Title>
					<Input
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						placeholder="Enter your phone"
						value={number}
						onChange={this.handleChange}
					/>
				</label>
				<Button type="submit">Add contact</Button>
			</Form>
		);
	}
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
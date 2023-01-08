import { PropTypes } from "prop-types";
import { Button, Contact, Item, Number } from "./ContactItem.styled";

export const ContactItem = ({ idx, name, number, onDelete }) => {
	const handleDelete = () => {
		onDelete(idx);
	}

	return (
		<Item>
			<Contact>{name}:<Number>{number}</Number></Contact>
			<Button onClick={handleDelete}>Delete</Button>
		</Item>
	);
};

ContactItem.propTypes = {
	idx: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
};
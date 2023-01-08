import { PropTypes } from "prop-types";
import { ContactItem } from "./ContactItem/ContactItem";

export const ContactList = ({ contacts, onDelete }) => {
	return (
		<ul>
			{contacts.map(({ id, name, number }) => (
				<ContactItem
					key={id}
					name={name}
					number={number}
					idx={id}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired
};
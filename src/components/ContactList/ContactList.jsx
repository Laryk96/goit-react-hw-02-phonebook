import PropTypes from 'prop-types';

import {
  ContatsList,
  ContatsItem,
  ContactName,
  Button,
  LabelItem,
} from './ContactList.styled';

const ContactList = ({ renderItems, deleteContact }) => {
  return (
    <ContatsList>
      {renderItems[0] && (
        <LabelItem>
          <span>Name:</span>
          <span>Tell:</span>
        </LabelItem>
      )}

      {renderItems.map(({ id, name, number }) => (
        <ContatsItem key={id}>
          <ContactName>
            <span> {name}:</span> <span>{number}</span>
          </ContactName>
          <Button
            type="button"
            aria-label="Delete"
            onClick={() => deleteContact(id)}
          >
            Delete
          </Button>
        </ContatsItem>
      ))}
    </ContatsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  renderItems: PropTypes.array.isRequired,
};

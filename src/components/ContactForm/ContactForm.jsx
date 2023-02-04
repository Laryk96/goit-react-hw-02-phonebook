import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Label, Form, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handelSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit({ id: uuidv4(), ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handelSubmitForm}>
          <Label>
            <span> Name</span>
            <Input
              onChange={this.handelChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              required
            />
          </Label>
          <Label>
            <span> Number</span>
            <Input
              onChange={this.handelChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit"> Add contact</Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;

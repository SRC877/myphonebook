import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ContactTable from './ContactTable';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.contacts = [];
    this.state.filterText = "";
  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(contact) {
    var index = this.state.contacts.indexOf(contact);
    this.state.contacts.splice(index, 1);
    this.setState(this.state.contacts);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var contact = {
      id: id,
      name: "",
      address: "",
      category: "",
      phone_no: ""
    }
    this.state.contacts.push(contact);
    this.setState(this.state.contacts);

  }

  handleContactTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var contacts = this.state.contacts.slice();
  var newContacts = contacts.map(function(contact) {

    for (var key in contact) {
      if (key == item.name && contact.id == item.id) {
        contact[key] = item.value;

      }
    }
    return contact;
  });
    this.setState({contacts:newContacts});
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ContactTable onContactTableUpdate={this.handleContactTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} contacts={this.state.contacts} filterText={this.state.filterText}/>
      </div>
    );

  }

}

export default Contacts;

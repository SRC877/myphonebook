import React, { Component } from 'react';
import ContactRow from './ContactRow';

class ContactTable extends React.Component {

    render() {
      var onContactTableUpdate = this.props.onContactTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var contact = this.props.contacts.map(function(contact) {
        if (contact.name.indexOf(filterText) === -1) {
          return;
        }
        return (<ContactRow onContactTableUpdate={onContactTableUpdate} contact={contact} onDelEvent={rowDel.bind(this)} key={contact.id}/>)
      });
      return (
        <div>
  
  
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Category</th>
              </tr>
            </thead>
  
            <tbody>
              {contact}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }

export default ContactTable;
  
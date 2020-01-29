import React, { Component } from 'react';
import EditableCell from './EditableCell';

class ContactRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.contact);
  
    }
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onContactTableUpdate={this.props.onContactTableUpdate} cellData={{
            "type": "name",
            value: this.props.contact.name,
            id: this.props.contact.id
          }}/>
          <EditableCell onContactTableUpdate={this.props.onContactTableUpdate} cellData={{
            type: "address",
            value: this.props.contact.address,
            id: this.props.contact.id
          }}/>
          <EditableCell onContactTableUpdate={this.props.onContactTableUpdate} cellData={{
            type: "phone_no",
            value: this.props.contact.phone_no,
            id: this.props.contact.id
          }}/>
          <EditableCell onContactTableUpdate={this.props.onContactTableUpdate} cellData={{
            type: "category",
            value: this.props.contact.category,
            id: this.props.contact.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
      );
  
    }
  
  }

  export default ContactRow;
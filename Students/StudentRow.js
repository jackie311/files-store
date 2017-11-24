import React from 'react';
import {Link} from 'react-router-dom';

export default class StudentRow extends React.Component {
    render(){
      return (

        <tr>
          <td className = 'studentTd'> {this.props.student.id}</td>
          <td className = 'studentTd'> {this.props.student.name}</td>
          <td className = 'studentTd'> {this.props.student.age}</td>
          <td className = 'studentTd'> {this.props.student.email}</td>
          <td className = 'studentTd'>
                  < Link to={`/students/${this.props.student.id}`}>Details</Link>

          </td>
        </tr>

      );
    }
}

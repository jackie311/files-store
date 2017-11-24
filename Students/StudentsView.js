import React from 'react';
import {Link} from 'react-router-dom';
import StudentList from './StudentList';

export default class StudentsView extends React.Component {
  constructor (props) {
      super(props);
      this.state={
        isLoading: false,
        students: [
            {id: 1, name: "Jackie", age : 29, email : "jackie@gmail.com" },
            {id: 2, nName: "XiaoChi Li", age : 23, email : "xiaochi@gmail.com" },
            {id: 3, name: "Glen", age : 26, email :"glen@gmail.com" }
        ],
    //  studentList: [],
      };
    }

      render() {
        const {isLoading} = this.state;
        if (isLoading)
          return <span>Loading student </span>

        return (
          <div>
            <StudentList student = {this.state.students} />
          </div>
        );

      }
}

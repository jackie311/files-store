import React from 'react';
import StudentRow from './StudentRow';

export default class StudentList extends React.Component {

    render(){
      var students =  [
            {id: 1, name: "Robert", age : 21, email : "robert@gmail.com" },
            {id: 2, name: "XiaoChi Li", age : 23, email : "xiaochi@gmail.com" },
            {id: 3, name: "Glen", age : 25, email :"glen@gmail.com" }
        ];
        this.props.students.forEach(student => {
                  students.push(<StudentRow student={student.key} student={student}/>);
              });

      return (
        <table className='studentList'>
          <thead>
               <th className='studentTd'>Student ID</th>
               <th className='studentTd'>Name</th>
               <th className='studentTd'>Age</th>
               <th className='studentTd'>Email</th>
         </thead>
         <tbody>
            {students}
         </tbody>
      </table>
      );
    }
}

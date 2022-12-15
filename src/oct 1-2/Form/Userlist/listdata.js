import React from "react";
//import SimpleReactValidator from 'simple-react-validator';
class Userlist extends React.Component{
    render(){
        return(
            <div>
                <table class="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">name</th>
              <th scope="col">dob</th>
              <th scope="col">email</th>
              <th scope="col">password</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>
            {this.props?.tableData?.map((pass, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{pass.name}</td>
                <td>{pass.dob}</td>
                <td>{pass.email}</td>
                <td>{pass.password}</td>
                 <td><button Onclick={()=>this.handleDelete()}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
        )
    }
}
export default Userlist;
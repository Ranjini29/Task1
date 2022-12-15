import React from "react";
import axios from "axios";
import Userdata from "./Userdata/formdata";
import Userlist from "./Userlist/listdata";
class Formdata extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
      tableData: [
        {
          name: "ranji",
          dob: "35",
          email: "ran@gmail.com",
          password: "798090980",
          address: "35,chinna street",
        },
      ],
    }
};  
componentDidMount(){
axios.post('https://jsonplaceholder.typicode.com/users/',{name:"gokul",age:"35"})
  .then((response)=> {
    // handle success
    this.setState({tableData:response.data})
    console.log(response.data);
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
}
handleGetobj=(data)=>{
  this.state.tableData.push(data);
  this.setState({tableData:this.state.tableData});
}
handleDelete=(d)=>{
  console.log('d.....-----',d)
}
  render(){
    return (
      <div className="container">
        <div class="border-10">
          <div className="row">
          <div className="col-lg-6 col-sm-6">
            <Userdata getUserform={this.handleGetobj} />
            </div>
        <div className="col-lg-6 col-sm-6">
          <Userlist tableData={this.state.tableData} />
          </div>
        </div>
        </div>
        </div>
    )
            }
          }
export default Formdata;

import React from "react";
class Table extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ranji</td>
                            <td>35</td>
                            <td>Pranav</td>
                            <td>45</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default Table;
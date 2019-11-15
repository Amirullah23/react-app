import React from 'react'


export default function TabBody(props) {
  const rows = props.employeeData.map((row,index) => {
    return (
      <tr key={index}>
  <td>{row.name}</td>
    <td>{row.job}</td>
    <td><button onClick={() => props.delEmploye(index)}>amifr</button></td>
      </tr>
    )
  })
    return (
       
             <tbody>
  {rows}
  </tbody>

        
    )
}

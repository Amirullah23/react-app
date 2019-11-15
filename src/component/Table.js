import React, { Component } from 'react'
import Head from './Head'
import TabBody from './TabBody'


export default class Table extends Component {
    render() {
        const {employeeData, delEmploye} = this.props 
        return (
           <table>
<Head />
<TabBody employeeData = {employeeData} delEmploye = {delEmploye}/> 


           </table>
           
        )
    }
}

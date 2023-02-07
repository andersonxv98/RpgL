import   { StyleSheet,SafeAreaView,TextInput,Text, Button }  from "react-native";
import React from "react";
import Employers from "../Models/employer";
export default class EmployersView extends React.Component{
    constructor(){
        super();
        //this.msg = props.msg;
        console.log("entrou construtor employersView");
        this.state = {
            a : <Employers name="roolando" cod = "22223" salary= "23123"/>,
            b : <Employers name ="canario" cod = "12432" salary ="10.32"/>,
            l_employers: [a ,b]
            
        }
    }

    addNewEmployer(e){
        // 'e' must be employer type
        this.state.l_employers.concat(e);

    }
    
    view= ()=>{
        console.log("entrou em view log");
        <div>
        {this.state.l_employers.forEach(employer => {
            console.log("TEREZA:", employer.getName()),
            <Text>{employer.getName()}</Text>,
            <Text>{employer.getCod()}</Text>,
            <Text>{employer.getPayment()}</Text>
         })}
         </div>
    }
    render(){
        const elem = (
            this.view
            );
        return elem;
    }
}
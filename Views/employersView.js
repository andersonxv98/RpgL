import   { StyleSheet,SafeAreaView,TextInput,Text, Button }  from "react-native";
import React from "react";
import Employers from "../Models/employer";
export default class EmployersView extends React.Component{
    constructor(){
        super();
        console.log("entrou construtor employersView");
          var  a = new Employers("roolando","22223", "23123"); 
           var b  = new Employers("leavin","22223", "23123");
            this.l_employers = [a ,b];
            console.log("final construtor");
    }

    addNewEmployer(e){
        // 'e' must be employer type
        console.log("inside addNewemployer");
        this.l_employers.push(e);
        this.l_employers.forEach(emp => {
            //console.log("inside loop");
            console.log("TEREZA:", emp.getName());
        
            })
    }
}
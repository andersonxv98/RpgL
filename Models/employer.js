import React from "react";

export default class Employers extends React.Component{
    constructor(props){
        super(props);
        
        
        this.name = props.name;
        this.cod = props.cod;
        this.payment= props.payment;
    }

    getName(){
        return this.name;
    }

    getCod(){
        return this.cod;
    }

    getPayment(){
        return this.payment;
    }

}
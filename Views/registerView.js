import   { StyleSheet,SafeAreaView,TextInput,Text, Button }  from "react-native";
import React from "react";
import EmployersView from "../Views/employersView";
import Employers from "../Models/employer.js";


export default class RegisterView extends React.Component{
    constructor(props){
        super(props);
        this.msg = props.msg;

        this.state = {
            name: '',
            cod: '',
            salary: ''
        }
    }


    setName(name){
        if(name != ""){
            this.state.name = name;
        }
    }

    setCod(cod){
        if(cod > 0){
            this.state.cod = cod;
        }
    }

    setSalary(salary){
        if(salary > 0){
            this.state.salary = salary;
        }
    }

    exibir = ()=>{
        console.log("O botão foi clicado: Msg:>>", this.msg);
        console.log("Nome: ",this.state.name);
        console.log("Código: ",this.state.cod);
        console.log("Salario: ",this.state.salary);
        const e = new Employers(this.state.name, this.state.cod, this.state.salary);
        console.log("getFrom employer Class:> ", e.getName());
        const w =new EmployersView();
        w.addNewEmployer(e);
        return w;
    }
    

    render(){
        const styles = StyleSheet.create({
            input: {
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            },
          });

        const elem = (
            <SafeAreaView>
                <Text>Name</Text>
                <TextInput
                id="name"
        style={styles.input}
        onChangeText={(text) => this.setState({name:text})}
        //value={4}
        placeholder="employer name"
        keyboardType="default"
      />
      <Text>Code</Text>
       <TextInput
                id="cod"
        style={styles.input}
        onChangeText={(text) => this.setState({cod:text})}
        //value={4}
        placeholder="employer code"
        keyboardType="number-pad"
      />
      <Text>Salary</Text>
       <TextInput
                id="salaybase"
        style={styles.input}
        onChangeText={(text) => this.setState({salary:text})}
        //value={4}
        placeholder="employer salary"
        keyboardType="decimal-pad"
      />
        <Button
            onPress={() => this.exibir()}
            title="Register"
            color="#841584"
            //accessibilityLabel="Learn more about this purple button"
          />
          </SafeAreaView>
          
          
          )

        
        return elem;
    }
}
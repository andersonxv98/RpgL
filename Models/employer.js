export default class Employers {
    constructor(name, cod, payment){
        this.name = name;
        this.cod = cod;
        this.payment= payment;
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
class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=Hvs0oeVeIU8NR0yORNi7xSR4DydSDmdHKHD952rc&base_currency"
    }

    async exchange(amount,firstCurrency,secondCurrency){
      const response = await fetch(`${this.url}${firstCurrency}`)

      const result = await response.json()

      const exchangedResult=amount*result.data[secondCurrency];
       return exchangedResult; 
    }



}
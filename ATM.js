var acc = 50000;
        var amount = prompt("How much amount you want to withdraw?")
        console.log(amount)
        document.write(amount + " rupees")

        var remain = acc - amount;

        if(amount > 0){
            if(amount % 500 == 0){
                if(amount <= acc){
                    alert("The cash is granted! You have withdrawn " + amount + " and you are left with" + remain)
                }
                else{
                    alert("Not enough money in ATM")
                }
            }
            else{
                alert("The minimum amount should be 500!")
            }
           
        }
        else{
            alert("Enter positive amount")
        }
        
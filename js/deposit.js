document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = inputFieldValue("deposit-field");
    const oldDepositAmount = elementAmount("deposit-total");
    const oldBalaceAmount = elementAmount("balance-total");
    const totalDepositAmount = oldDepositAmount + newDepositAmount;
    const newBalaceAmount = oldBalaceAmount + newDepositAmount;
    // error check
    if (isNaN(newDepositAmount)) {
        alert('input valid number');
        return;
    }else if(newDepositAmount < 1){
        alert('input valid amount');
        return;
    };
    addValue("deposit-total", totalDepositAmount);
    addValue("balance-total", newBalaceAmount);
})
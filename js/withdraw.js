document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = inputFieldValue("withdraw-field");
    const oldWithdrawAmount = elementAmount("withdraw-total");
    const oldBalaceAmount = elementAmount("balance-total");
    const totalWithdrawAmount = oldWithdrawAmount + newWithdrawAmount;
    const newBalaceAmount = oldBalaceAmount - newWithdrawAmount;
    // error check
    if (isNaN(newWithdrawAmount)) {
        alert('input valid number');
        return;
    } else if (newWithdrawAmount < 0.1) {
        alert('input valid amount');
        return;
    } else if (newWithdrawAmount > oldBalaceAmount) {
        alert('not enough money');
        return;
    };
    addValue("withdraw-total", totalWithdrawAmount);
    addValue("balance-total", newBalaceAmount);
})
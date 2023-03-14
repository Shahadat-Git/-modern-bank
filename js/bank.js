// console.log('bank js cnnected')

// Old deposit amount
const oldDeposit = document.getElementById('deposit-total');


// Old withdraw amount
const oldWithdraw = document.getElementById('withdraw-total');


// Old total balance amount
const oldBalance = document.getElementById('balance-total');


// addEventListener on deposit button 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get value from deposit input field 
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;
    const depositFieldAmount = parseFloat(depositFieldValue);

    // input field clear
    depositField.value = '';

    // validation and error handle
    if (isNaN(depositFieldAmount) || depositFieldAmount < 0.1) {
        alert('insert valid number');
        return;
    }

    // get old total deposit amount
    const oldDepositAmount = parseFloat(oldDeposit.innerText);

    // get old total balance amount
    const oldBalanceAmount = parseFloat(oldBalance.innerText);

    // add new deposit amount to old amount
    const totalDepositAmount = oldDepositAmount + depositFieldAmount;

    // add new deposit amount on main balance
    const totalBalanceAmount = oldBalanceAmount + depositFieldAmount;

    // add total amount on site 
    oldDeposit.innerText = totalDepositAmount;

    // add deposit amount on balance
    oldBalance.innerText = totalBalanceAmount;
});

// addEventListener on withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get value from withdraw input field 
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValue = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldValue);

    // get old total withdraw amount
    const oldWithdrawAmount = parseFloat(oldWithdraw.innerText);

    // get old total balance amount
    const oldBalanceAmount = parseFloat(oldBalance.innerText);

    // input field clear
    withdrawField.value = '';

    // validation and error handle
    if (isNaN(withdrawFieldAmount) || withdrawFieldAmount < 0.1) {
        alert('insert valid number');
        return;
    } else if (withdrawFieldAmount > oldBalanceAmount) {
        alert('not enough money');
        return;
    }

    // add new withdraw amount to old amount
    const totalWithdrawAmount = oldWithdrawAmount + withdrawFieldAmount;

    // remove new withdraw amount on main balance
    const totalBalanceAmount = oldBalanceAmount - withdrawFieldAmount;

    // add total amount on site 
    oldWithdraw.innerText = totalWithdrawAmount;

    // remove withdraw amount on balance
    oldBalance.innerText = totalBalanceAmount;
});
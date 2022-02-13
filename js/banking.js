document.getElementById('deposit-button').addEventListener('click', function () {
    // getting the input deposit and converting into numbers
    let depoInput = document.getElementById('deposit-input').value;
    const depoAmmount = parseFloat(depoInput);
    // gettting the existing deposite as text and converting in numbers
    let existingDepositeText = document.getElementById('deposit-total').innerText;
    let existingDeposite = parseFloat(existingDepositeText);
    document.getElementById('deposit-total').innerText = existingDeposite + depoAmmount
    // clearing input field 
    document.getElementById('deposit-input').value = '';

    let balancTag = document.getElementById('balance-total');
    let balance = balancTag.innerText;
    let balanceNumber = parseFloat(balance);
    balancTag.innerText = balanceNumber + depoAmmount;
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawInputTag = document.getElementById('withdraw-input');
    let withdrawValue = withdrawInputTag.value;
    let withdrawAmmount = parseFloat(withdrawValue);

    let existingWithdrawTag = document.getElementById('withdraw-total');
    let existingWithdrawwvalue = existingWithdrawTag.innerText;
    let existingWithdrawAmmout = parseFloat(existingWithdrawwvalue);

    existingWithdrawTag.innerText = withdrawAmmount + existingWithdrawAmmout;

    let balancTag = document.getElementById('balance-total');
    let balanceValue = balancTag.innerText;
    let balanceAmmount = parseFloat(balanceValue);

    balancTag.innerText = balanceAmmount - withdrawAmmount;
    withdrawInputTag.value = '';

})
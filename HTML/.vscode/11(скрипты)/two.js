function checkBonus() {
    let orderSum = document.getElementById('orderSum').value;
    let bonusName = ""; 

    if (orderSum < 1500) {
        bonusName = "Бонуса нет";
    } else if (orderSum >= 1500 && orderSum <= 2999) {
        bonusName = "Открытка";
    } else if (orderSum >= 3000 && orderSum <= 4999) {
        bonusName = "Топер";
    } else if (orderSum >= 5000) {
        bonusName = "Еще один букет";
    } else {
        bonusName = "Некорректная сумма";
    }

    document.getElementById('result').innerText = "Ваш подарок: " + bonusName;
}
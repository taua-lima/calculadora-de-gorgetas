function calcTip(event) {
    event.preventDefault();
    let bill = document.querySelector('#bill').value
    let service = document.querySelector('#service').value
    let people = document.querySelector('#people').value

    if (bill == '' | service == 0) {
        alert('Por favor, preencha os valores')
        return
    }
    if (people == '' | people <= 1) {
        people = 1
        document.querySelector('#each').style.display = 'none'
    } else {
        document.querySelector('#each').style.display = 'block'
    }

    let total = (bill * service) / people
    total = total.toFixed(2)
    document.querySelector('#tip').innerHTML = total
    document.querySelector('#totalTip').style.display = 'block'

}

document.querySelector('#totalTip').style.display = 'none'
document.querySelector('#each').style.display = 'none'
document.querySelector('#tipsForm').addEventListener('submit', calcTip)
document.querySelector(".add").addEventListener("click", codes);
var ip = document.querySelector("#comp");

function codes() {
    if (ip.value == '') {
        swal("Oops! Fields Empty...")

    } else {


        var selectElement = document.querySelector('#select1');
        var app = document.createElement('li');
        app.className = 'letsadd';
        app.innerHTML = `${ip.value} : ${selectElement.value}`;
        document.querySelector(".put").append(app);
        document.querySelector('#comp').value=``;
        window.localStorage.setItem('add',`${ip.value}`);
    }
}

document.querySelector('.clr').addEventListener('click', remove);

function remove() {
    if (document.querySelector('.put').value = '') {
        swal('All items deleted');
    } else {
        document.querySelector('.put').innerHTML = ``;
    }
}
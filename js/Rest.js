const xmlhttp = new XMLHttpRequest();
const url = "https://mahapur-api.herokuapp.com/help";
let method;

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        method(JSON.parse(this.responseText));
    }
};

function getHelpInfo(callback) {
    method = callback;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function render(helpArr) {
    let tableBody = document.getElementById("table-id");
    tableBody.innerHTML = "";
    for (let i = 0; i < helpArr.length; i++) {
        let newRow = document.createElement("tr");
        tableBody.appendChild(newRow);
        let newCell = document.createElement("td");
        newCell.textContent = helpArr[i].description;
        newRow.appendChild(newCell);
    }
    console.log(helpArr)
}

getHelpInfo(render);
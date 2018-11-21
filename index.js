let url = "https://maitre-d.tucha.ua/api/bank_statement_details";
let user = "2018112013000812"; 
let password = "Nuyeeghee5ee";  
let tbody = document.querySelector('tbody');
 

function getInfo(url) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false, user, password);
    xhr.withCredentials = true;
    xhr.onload = function() {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        return resolve(response);
      }
    }
    xhr.send();
  })
}
console.log(getInfo(url));

function buildHTML(response) {
  response.forEach(info => {
    // creating table
    let id                = document.createElement('td');
    let clientName        = document.createElement('td');
    let clientEdrpou      = document.createElement('td');
    let clientMfo         = document.createElement('td');
    let clientBankName    = document.createElement('td');
    let clientBankAccount = document.createElement('td');
    let mfo               = document.createElement('td');
    let bankAccount       = document.createElement('td');
    let docn              = document.createElement('td');
    let docdate           = document.createElement('td');
    let opdate            = document.createElement('td');
    let description       = document.createElement('td');
    let credit            = document.createElement('td');
    let tr                = document.createElement('tr');
    // adding info to table
    id.innerHTML          = info.id;
    clientName.innerHTML  = info.client_name;
    clientEdrpou.innerHTML= info.client_edrpou;
    clientMfo.innerHTML   = info.client_mfo;
    clientBankName.innerHTML = info.client_bank_name;
    clientBankAccount.innerHTML = info.client_bank_account;
    mfo.innerHTML               = info.mfo;
    bankAccount.innerHTML       = info.bank_account;
    docn.innerHTML              = info.docn;
    docdate.innerHTML           = info.docdate;
    opdate.innerHTML            = info.opdate;
    description.innerHTML       = info.description;
    credit.innerHTML            = info.kredit;
    // appending td's to tr
    tr.appendChild(id);
    tr.appendChild(clientName);
    tr.appendChild(clientEdrpou);
    tr.appendChild(clientMfo);
    tr.appendChild(clientBankName);
    tr.appendChild(clientBankAccount);
    tr.appendChild(mfo);
    tr.appendChild(bankAccount);
    tr.appendChild(docn);
    tr.appendChild(docdate);
    tr.appendChild(opdate);
    tr.appendChild(description);
    tr.appendChild(credit);
    // appending tr to tbody
    tbody.appendChild(tr);
  })
}

getInfo(url).then((response) => {
  buildHTML(response);
})
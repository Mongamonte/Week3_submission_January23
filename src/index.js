import "./styles.css";

retrieveData();

async function retrieveData() {
  const url =
    "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
  const dataPromise = await fetch(url);
  const dataJSON = await dataPromise.json();
  console.log(url);

  const url2 =
    "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065 ";
  const empPromise = await fetch(url2);
  const empJSON = await empPromise.json();
  console.log(url2);

  const objMun = dataJSON.dataset.dimension.Alue.category.label;
  console.log(objMun);
  var keyMun = Object.keys(objMun).length;
  console.log(keyMun);

  const objPopul = dataJSON.dataset.value;
  console.log(objPopul);
  var keyPopul = Object.keys(objPopul).length;
  console.log(keyPopul);

  const objEmp = empJSON.dataset.value;
  console.log(objEmp);
  var keyEmp = Object.keys(objEmp).length;
  console.log(keyEmp);

  let dataTable = document.getElementById("table");
  for (let i = 0; i < keyMun; i++) {
    console.log("Testi");
    var newRow = dataTable.insertRow(dataTable.length);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    cell0.innerHTML = Object.values(
      dataJSON.dataset.dimension.Alue.category.label
    )[i];
    cell1.innerHTML = objPopul[i];
    cell2.innerHTML = objEmp[i];
    var numb = (objEmp[i] / objPopul[i]) * 100;
    cell3.innerHTML = numb.toFixed(2) + "%";
    if (numb > 45) {
      newRow.style.backgroundColor = "#abffbd";
    } else if (numb < 25) {
      newRow.style.backgroundColor = "#ff9e9e";
    }
  }
}

let map = new Map();
let mydiv = document.getElementById("mydiv");

//*************************************Create Data Function**************************************

const Create_Data = () => {
  if (key.value != "" && value.value != "") {
    if (map.has(key.value)) {
      map.set(key.value, value.value);
      mydiv.innerHTML = "Data is Inserted Again";
    } else {
      map.set(key.value, value.value);
      mydiv.innerHTML = "Data is Inserted";
    }
    Read_Data();
  } else {
    mydiv.innerHTML = "Please Enter Key and Value";
  }
  key.value = "";
  value.value = "";
};

// *************************************Show All Data Function**************************************

function Read_Data() {
  let table = `<table border='1' id="mytable" cellspacing="0">`;
  table += `<tr><th>Sr.No</th><th>Keys</th><th>Values</th><th>Action</th></tr>`;
  map.forEach(function (v, k) {
    table += `<tr><td>${map.size}</td><td>${k}</td><td>${v}</td><td><button onclick=Update_Data('${k}','${v}')>Update</button><button id="td" onclick=Delete_Data('${k}')>Delete</button></td></tr>`;
  });
  table += `</table>`;
  document.getElementById("mydata").innerHTML = table;
}

//*************************************Delete Data Function**************************************

const Delete_Data = (k) => {
  map.delete(k);
  Read_Data();
  mydiv.innerHTML = "Data is Deleted";
};

//*************************************Update Data Function**************************************

const Update_Data = (k, v) => {
  key.value = k;
  value.value = v;
  Read_Data();
  mydiv.innerHTML = "Data is running for updated";
};

//*************************************Delete All Data Function**************************************

const Delete_All_Data = () => {
  map.clear();
  Read_Data();
  let table = document.querySelector("#mytable").remove();
  mydiv.innerHTML = "All Data is Clear";
};

// fetch method ====================================

async function fun()
{
  let data=document.querySelector("#data1")
  let a = await fetch("http://localhost:3000/student")
  let b=await a.json()
  let c = b
    .map(
      (e) =>
        `
      <tr>
      <td>${e.id}</td>
     <td>${e.name}</td>
     <td>${e.age}</td>
     <td>${e.location}</td>
     <td><button onclick="myedit(${e.id})">Update</button></td>
     <td><button onclick="mydelete(${e.id})">Delete</button></td>
      </tr>
  `
    )
    .join(" ");
  data.innerHTML = c;
}
fun()

// post method , data come from table 

function add()
{
  let frmdata={
    id:document.getElementById("idd").value,
    name:document.getElementById("namee").value,
    age:document.getElementById("age").value,
    location:document.getElementById("location").value
  }

  fetch("http://localhost:3000/student",{
    method:"POST",
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(frmdata)
  })
  .then((res)=>alert("inserted",res))
}

// delete method

function mydelete(id)
{
  fetch(`http://localhost:3000/student/${id}`,
    {method:"DELETE"
})
.then(res=>alert("data deleted successfully",res))
}

// update operation

let strid=0;
function myedit(id)
{
  strid=id
  document.querySelector("#myfrm").style.display="block"
}

function editdata()
{
  let myfrmdata = {
    id: document.getElementById("iddd").value,
    name: document.getElementById("nameee").value,
    age: document.getElementById("agee").value,
    location: document.getElementById("locationn").value
  }

fetch(`http://localhost:3000/student/${strid}`,{
  method:"PUT",
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify(myfrmdata)
})
.then(res=>alert("edit successfully",res))
}

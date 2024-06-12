
const addUserBtn=document.getElementById('addUser');
const usernameTextField=document.getElementById('username');
const recordsDisplay =document.getElementById('record');
const btntext=addUserBtn.innerText;
let userArray=[];
let edit_id=null;
let objstr= localStorage.getItem('user');
console.log(objstr);
if(objstr!=null){
  userArray=JSON.parse(objstr);

}
DisplayInfo(); 
addUserBtn.onclick=()=>{
    const name = usernameTextField.value;
    if(edit_id!=null){
          userArray.splice(edit_id,1,{'name':name})
          edit_id=null;
    }else{
        userArray.push({'name':name});
    }
    
    SaveInfo(userArray); 
    usernameTextField.value='';
    addUserBtn.innerText='addUser';

}
function SaveInfo(){
    let str = JSON.stringify(userArray);
    localStorage.setItem('user',str);
    DisplayInfo();
}
function DisplayInfo(){
   let statement='';
   userArray.forEach((user,i)=>{
      statement+=` <tr>
                        <th scope="row">${i+1}</th>
                        <td>${user.name}</td>
                        <td><i class="btn text-white fas fa-edit btn-info mx-3" onclick='EditInfo(${i})'></i><i class="btn btn-danger text-white fa fa-trash "onclick='DeleteInfo(${i})'></i></td>
                      </tr>`;
   });
   recordsDisplay.innerHTML=statement;
}
function EditInfo(id){
   edit_id=id;
   usernameTextField.value=userArray[id].name;
   addUserBtn.innerText='save changes';
}
 function DeleteInfo(id){
     userArray.splice(id,1,);
     SaveInfo();
 }
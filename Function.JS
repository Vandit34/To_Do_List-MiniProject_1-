const form=document.querySelector(".form");
const input=document.querySelector(".form_input");
const list = document.querySelector(".toDoList");
const submit=document.querySelector(".submit_btn");

form.addEventListener("submit",(data)=>{
        data.preventDefault();
        let data_id=String(Date.now());//Try to remove the "String"
    let value=input.value;  
    create_the_list(value,data_id);
    input.value="";
})

list.addEventListener("click",(x)=>{
    let unique_id=x.target.getAttribute("data-id");
    if(unique_id)
    {
        remove_element(unique_id);
    }
    
})

function create_the_list(value,data_id)
{
    const li=document.createElement("li");
    li.innerText=value;
    li.setAttribute("data-id",data_id);
    list.appendChild(li);
}

function remove_element(element)
{
    var li = document.querySelector(`[data-id=${element}]`)
//  let data_id_value=document.querySelector(`[data-id= ${unique_id} ]`);
list.removeChild(li);
// list.removeChild(element);
}
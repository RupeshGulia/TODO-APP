const container=document.querySelector(".container");
const title=document.getElementById("title");
const desc=document.getElementById("description");
const form=document.querySelector("form");

const tasks=localStorage.getItem("tasks")
?JSON.parse(localStorage.getItem("tasks"))
:[];
getAllTasks();
function removeTasks(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    })
}

function getAllTasks(){
    tasks.forEach( (value, index) => {
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv=document.createElement("div");
        div.append(innerdiv);

        const p=document.createElement("p");
        p.innerText=value.title;
        innerdiv.append(p);

        const span=document.createElement("span");
        span.innerText=value.desc;
        innerdiv.append(span);

        const btn=document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText="-";
        btn.addEventListener("click",(value,index)=>{
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            getAllTasks();
        })
        div.append(btn);

        container.append(div);
    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title:title.value,
        desc:desc.value
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    getAllTasks();
})

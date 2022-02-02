const input = document.querySelector(".input-filter");
const result = document.querySelector(".user-list");
const userList = [];

getData();

input.addEventListener("input", function(e){
    filterData(e.target.value);
});

async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=50");
    console.log(allUsers);

    const data = await allUsers.json();
    console.log(data);

    result.innerHTML = "";

    data.results.forEach(user=>{
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-information">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li);
        userList.push(li);
    })
}
function filterData(inputText){
    userList.forEach(oneUser=>{
        if(oneUser.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide");
        }else{
            oneUser.classList.add("hide");
        }
    })
}















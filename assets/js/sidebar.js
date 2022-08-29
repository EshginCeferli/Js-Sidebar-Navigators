let sidebar = document.querySelector(".sidebar")
let closeSidebar = document.querySelector(".close-sidebar");
let showSidebar = document.querySelector(".show-sidebar");

showSidebar.addEventListener("click", function () {
    if (sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide")
    }
    this.classList.add("d-none")
})

closeSidebar.addEventListener("click", function () {

    if (!sidebar.classList.contains("hide")) {
        sidebar.classList.add("hide")
    }
    showSidebar.classList.remove("d-none")
})



let input = document.querySelector(".input");

input.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        e.target.nextElementSibling.innerHTML = "";
        for (let i = 1; i <= e.target.value; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item my-list";
            li.innerText = i;

            e.target.nextElementSibling.append(li);
            let icon = document.createElement("i");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-trash-can");
            icon.classList.add("my-icon");
            li.append(icon);
            icon.style.cursor = "pointer";
            icon.onclick = function () {
                this.parentNode.remove();
            }
        }
        e.target.value = "";
    }
})


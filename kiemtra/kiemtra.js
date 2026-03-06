let tasks = ["Quét nhà", "Giặt quần áo", "Tắm", "Chơi Game", "Đi Ngủ"];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector("button");

const renderList = () => {
  taskList.innerHTML = "";

  tasks.forEach(function (e) {
    const li = document.createElement("li");
    li.textContent = e;
    taskList.appendChild(li);
  });
};

function addTask() {
  let taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Vui lòng nhập tên công việc!");
    return;
  }
  tasks.push(taskName);
  renderList();
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

renderList();


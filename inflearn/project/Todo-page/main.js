/*
유저가 todo 입력
+ 버튼: 할일 추가
delete: 할일 삭제
check: 할일이 끝남, 취소선
진행중 끝남: 언더바 이동
끝남탭: 끝남 아이템만
전체탭: 전체 아이템
*/

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let mode = "all";
let filterList;

addButton.addEventListener("click", addTask);

// 진행중, 끝남 탭 로직
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  // 할 일 추가
  //   let taskContent = taskInput.value;
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "ongoing" || mode == "done") {
    list = filterList;
  }

  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div> 
        <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
    </div>`;
    } else {
      resultHTML += `<div class="task">
        <div>${list[i].taskContent}</div> 
        <div>
            <button onclick="toggleComplete('${list[i].id}')">Check</button>
            <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
    </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      // taskList[i].isComplete = true;
      // check 눌렀을 때 true - false 왔다 갔다 하게 하기
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      // taskList.pop(i);
      // i번째 인덱스 요소 1개 제거
      taskList.splice(i, 1);
    }
    render();
  }
}

function filter(event) {
  mode = event.target.id;
  filterList = [];

  // underline 옮기기
  document.getElementById("under-line").style.width =
    event.target.offsetWitdh + "px";
  document.getElementById("under-line").style.top =
    event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("under-line").style.left =
    event.target.offsetLeft + "px";

  if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
  } else if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
  }
  render();
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

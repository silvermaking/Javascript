function hide() {
  let status = document.getElementById("wraith").style.visibility;
  if (status == "") {
    document.getElementById("wraith").style.visibility = "hidden";
  } else if (status == "hidden") {
    document.getElementById("wraith").style.visibility = "";
  }
}

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

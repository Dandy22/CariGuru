document.addEventListener("DOMContentLoaded", function () {
  const elementaryBtn = document.getElementById("elementary-school");
  const juniorBtn = document.getElementById("junior-high-school");
  const seniorBtn = document.getElementById("senior-high-school");
  const collegeBtn = document.getElementById("college-preparation");

  let activeElement = null;

  const elementaryList = document.getElementById("mentor-list-elementary-school");
  const juniorList = document.getElementById("mentor-list-junior-high-school");
  const seniorList = document.getElementById("mentor-list-senior-high-school");
  const collegeList = document.getElementById("mentor-list-college-preparation");

  elementaryBtn.addEventListener("click", () => {
    toggleList(elementaryList);
  });

  juniorBtn.addEventListener("click", () => {
    toggleList(juniorList);
  });

  seniorBtn.addEventListener("click", () => {
    toggleList(seniorList);
  });

  collegeBtn.addEventListener("click", () => {
    toggleList(collegeList);
  });

  function toggleList(list) {
    if (activeElement === list) {
      list.style.display = "none";
      activeElement = null;
    } else {
      if (activeElement) {
        activeElement.style.display = "none";
      }
      list.style.display = "flex";
      activeElement = list;
    }
  }

  // Show all lists by default
  if (elementaryList && juniorList && seniorList && collegeList) {
    elementaryList.style.display = "flex";
    juniorList.style.display = "none";
    seniorList.style.display = "none";
    collegeList.style.display = "none";
    activeElement = elementaryList;
  }
});

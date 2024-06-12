document.addEventListener("DOMContentLoaded", function () {
  let juniorHighLink = document.getElementById("junior-high-link");
  let elementaryLink = document.getElementById("elementary-link");
  let seniorLink = document.getElementById("senior-link");
  let collegeLink = document.getElementById("college-link");

  if (juniorHighLink) {
    juniorHighLink.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      window.location.href = url;
    });
  }


  if (elementaryLink) {
    elementaryLink.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      window.location.href = url;
    });
  }

  if (seniorLink) {
    seniorLink.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      window.location.href = url;
    });
  }

  if (collegeLink) {
    collegeLink.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      window.location.href = url;
    });
  }
});
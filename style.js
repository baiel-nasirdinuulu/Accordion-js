window.onload = function () {
  const wrapperE = document.querySelectorAll(".wrapper");

  //   console.log(content);
  for (let i = 0; i < wrapperE.length; i++) {
    wrapperE[i].addEventListener("click", function (e) {
      //   console.log(e);
      this.classList.toggle("active");
    });
  }
};

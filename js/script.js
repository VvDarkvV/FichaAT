if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function valueCheck() {
  let total = document.querySelectorAll('input[type="checkbox"]:checked').length;
  
  document.getElementById("forca-valor").innerHTML = total;
}

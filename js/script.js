if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

var atrib = document.querySelectorAll('atributo');

function valueCheck() {
  let total = document.querySelectorAll('input[type="checkbox"]:checked');
  atrib.forEach((element) =>{
    console(element.id);
    var count = 0;
    for(i = 0; i < total.length; i++){
    if(total[i].id = element.id){
      count++;
    }
    var valID = element.id + "-valor";
    console(valID);
    document.getElementById(valID).innerHTML = count;
    }
  });
  
}

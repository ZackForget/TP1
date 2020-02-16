btnMenu = document.querySelector("#burger");
chkboxMenu = document.getElementById('chk-menu');
btnMenu.addEventListener('click', menuActif)

function menuActif(){
    //bouton actif


    chkboxMenu.checked = true;

//    document.getElementById('fondBlanc').style.transform = "translate(0%, 0%)";
    
  //  document.getElementById('nav').style.transform = "translate(0%, -9%)";


    //if(window.innerWidth < 600){
     //   document.getElementById('containBurger').style.left = "0%"
    //}

 //   if(window.innerWidth >= 600){
  //  document.getElementById('containBurger').style.transform = "translate(0%, 0%)";
   // document.getElementById('containBurger').style.left = "0%"

   // }



}



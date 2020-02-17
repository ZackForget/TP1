btnMenu = document.querySelector("#burger");
chkboxMenu = document.getElementById('chk-menu');
btnMenu.addEventListener('click', menuActif)

function menuActif(){
    //bouton actif

    chkboxMenu.checked = true;


    document.getElementById('fondBlanc').style.transform = "translate(0%, 0%)";
    document.getElementById('burger').style.transform = "translate(0%, 0%)";
    
    if (window.innerWidth > 600) {
    //if width > 600
    document.getElementById('nav').style.transform = "translate(0%, 0%)";
    }

    if (window.innerWidth < 600) {
    //if width < 600
    document.getElementById('nav').style.transform = "translate(0%, -6%)";
      behavior: 'smooth';
  }

}

btnHeader = document.getElementById('btnAccueil');
btnHeader.addEventListener('click', smoothScrollAccueil)


function smoothScrollAccueil () {
  document.querySelector('#headerLink').scrollIntoView({
        behavior: 'smooth'
      });
  }



  btnMusique = document.getElementById('btnMusique');
  btnMusique.addEventListener('click', smoothScrollMusique)
  
  
  function smoothScrollMusique () {
    document.querySelector('#sectionMusique').scrollIntoView({
          behavior: 'smooth'
        });
    }

      

  btnPropos = document.getElementById('btnPropos');
  btnPropos.addEventListener('click', smoothScrollPropos)
  
  
  function smoothScrollPropos () {
    document.querySelector('#aPropos').scrollIntoView({
          behavior: 'smooth'
        });
    }

      

  btnStore = document.getElementById('btnStore');
  btnStore.addEventListener('click', smoothScrollStore)
  
  
  function smoothScrollStore () {
    document.querySelector('#store').scrollIntoView({
          behavior: 'smooth'
        });
    }

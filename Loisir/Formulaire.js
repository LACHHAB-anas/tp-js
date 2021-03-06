function confirmer(formulaire) {
   var nom = document.getElementById("nom").value
   var prenom = document.getElementById("prenom").value
   var mail = document.getElementById("mail").value
   var portable = document.getElementById("portable").value
   var sexe1 = document.getElementById("sexe1").checked
   var sexe0 = document.getElementById("sexe0").checked

   var lecture = document.getElementById("lecture").checked
   var musique = document.getElementById("musique").checked
   var sport = document.getElementById("sport").checked
   var danse = document.getElementById("danse").checked
   var autre = document.getElementById("autre").checked

   var vip1 = document.getElementById("vip1").checked
   var vip0 = document.getElementById("vip0").checked

   if(nom=="") alert("Veuillez saisir votre nom")
   else if(prenom=="") alert("Veuillez saisir votre prenom")
   else if(mail=="") alert("Veuillez saisir votre mail")
   else if(portable=="") alert("Veuillez saisir votre portable")
   else if(!sexe1 && !sexe0) alert("Veuillez cocher votre sexe")

   else if(!lecture && !musique && !sport && !danse && !autre) alert("Veuillez choisir les centres d'intérêts")
   else if(!vip1 && !vip0) alert("champ VIP vide")

   else window.location.href = "Merci.html"

  }
var Artistes = ["David Guetta","Patrick Bruel","Johnny Hallyday","Charles Aznavour","Francis Cabrel"]
afficherArtistes()


function afficherArtistes() {
    var artistes = document.getElementById("artistes").innerHTML =""
    for (i in Artistes){
        document.getElementById("artistes").innerHTML += "<option>"+ Artistes[i] + "</option>"
    }
    element = document.getElementById('artistes');
    element.scrollTop = element.scrollHeight;
}





function addArtiste() {
    var newArtiste = document.getElementById("newArtiste").value
    if(newArtiste.length>0) {
        Artistes.push(newArtiste)
        afficherArtistes()
        alert(newArtiste + " a été ajouté 🔥 ")
        document.getElementById("newArtiste").value =""
    } else {
        alert("Veuillez saisir un nom valide !")
    }
}

function deleteArtiste() {
    var deleteArtiste = document.getElementById('artistes').selectedIndex
    if (deleteArtiste>0) {
        alert(Artistes[deleteArtiste] + " sera supprimé ! ")
        Artistes.splice(deleteArtiste,1)
        afficherArtistes()
    } else {
        alert("Veuillez sélectionné un Artiste 🔥 ")

    }
    

}
//-----------Question 12 :
function changer() {
    document.getElementById("bloc1").style.backgroundColor = "#FF0000" 
    document.getElementById("bloc2").style.visibility = "hidden"
    document.getElementById("bloc3").style.backgroundColor = "#FFFF00"

}


//------------- fin Question 12











//----------------Question 11

function somme() {
    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value
    var number3 = document.getElementById("number3").value
    
    document.getElementById("resultat").value = parseInt(number1) + parseInt(number2) + parseInt(number3)

}





//--------------------------------------Question 10
var fruits = ['Orange', 'Pomme', 'Fraise','Kiwi','Figue','Mangue','Ananas','Poire'] ;
affichierPanier()


function affichierPanier(){
    document.getElementById("fruits").innerHTML=""
    for (i in fruits) {
        document.getElementById("fruits").innerHTML += "<p>" +fruits[i]+"</p>";
    }
}

function addFruit(){
    var newFruit = document.getElementById("addFruit").value.trim()
    if(newFruit.length > 0) {
        fruits.push(newFruit)
        affichierPanier()
        alert(newFruit + " est bien ajouté au panier 🔥 ")
        document.getElementById("addFruit").value =""
    }
    else alert("Veuillez saisir un fruit valide !")
}

function deleteFruit(){
    var deleteFruit = document.getElementById("deleteFruit").value.trim()
    if(deleteFruit.length > 0) {
    fruits = fruits.filter(fruit => fruit !== deleteFruit)
    affichierPanier()
    alert(deleteFruit + " est bien supprimé du panier 🔥 ")
    document.getElementById("deleteFruit").value =""
    }
    else alert("Veuillez saisir un fruit valide !")
}

//-------------------------fin question 10








// -------------question 9
// var a = 1
// var b = "2"
// var c = a + parseInt(b)

// console.log("a = "+ a + " de type : " + typeof(a))
// console.log("b = "+ b + " de type : " + typeof(b))
// console.log("c = "+ c + " de type : " + typeof(c))




//--------------question 6 
//document.write("Fichier JavaScript Externe") ; 






// ---------- question 7
// var x = prompt("Entrer le premier nombre:")
// var y = prompt("Entrer le deuxième nombre:")
// alert( x + " + "+y +" = " + (parseInt(x)+parseInt(y)))


// ------------question 8
// var y = prompt("Entrer un nombre entre 0 et 10 :")
// var x = Math.floor(Math.random()*Math.floor(11))
// document.write(x)
// if(x==y){
//     alert("Gagné 🔥 ")
// }else {
//     alert("Perdu §")
// }

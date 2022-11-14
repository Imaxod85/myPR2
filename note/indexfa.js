//CLE DE FA

var do4 = {
     nom: "do4",
     img: "fa/do4.png"
};

var si3 = {
     nom: "si3",
     img: "fa/si3.png"
};

var la3 = {
     nom: "la3",
     img: "fa/la3.png"
};

var sol3  = {
     nom: "sol3",
     img: "fa/sol3.png"
};

var fa3 = {
     nom: "fa3",
     img: "fa/fa3.png"
};

var mi3 = {
     nom: "mi3",
     img: "fa/mi3.png"
};

var re3 = {
     nom: "re3",
     img: "fa/re3.png"
};

var do3 = {
     nom: "do3",
     img: "fa/do3.png"
};

var si2 = {
     nom: "si3",
     img: "fa/si3.png"
};


var la2 = {
     nom: "la2",
     img: "fa/la2.png"
};


var sol2 = {
     nom: "sol2",
     img: "fa/sol2.png"
};


var fa2 = {
     nom: "fa2",
     img: "fa/fa2.png"
};

















var Notes = [do4, si3, la3, sol3, fa3, mi3, re3, do3, si2, la2, sol2, fa2];



/*
var myPix = new Array("sol/do4.png", "sol/re4.png", "sol/mi4.png", "sol/fa4.png", "sol/sol4.png", "sol/la4.png", "sol/si4.png", "sol/do5.png", "sol/re5.png", "sol/mi5.png", "sol/fa5.png", "sol/sol5.png", "sol/la5.png", "sol/si5.png", "sol/do6.png", "sol/re6.png");

var randomNum = Math.floor(Math.random() * myPix.length);

document.getElementById("myPicture").src = myPix[randomNum];

var s = 0;
*/

var s = 0;
var randomNum = Math.floor(Math.random() * Notes.length);

document.getElementById("myPicture").src = Notes[randomNum].img;


var note = document.getElementById("Note");






function maFonction() {
     var theText = document.getElementById("Note").value;
     //console.log("Ca marche !");
     document.getElementById('entrer').click();
     if (theText.toUpperCase()==Notes[randomNum].nom.toUpperCase()){
          console.log("bravo");
          s++;
          document.getElementById("restxt").innerHTML = "BRAVO ! La réponse était bien "+Notes[randomNum].nom;


     }
     else{
          console.log("OOPS");
          document.getElementById("resimg").src = "checkrouge.png";
          document.getElementById("restxt").innerHTML = "OOPS ! La réponse était "+Notes[randomNum].nom;
     }
     
     
     
     
}


function maFonction2() {
     randomNum = Math.floor(Math.random() * Notes.length);
     document.getElementById("myPicture").src = Notes[randomNum].img;

}


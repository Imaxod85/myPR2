//CLE DE SOL

var do4 = {
     nom: "do4",
     img: "sol/do4.png"
};

var re4 = {
     nom: "re4",
     img: "sol/re4.png"
};

var mi4 = {
     nom: "mi4",
     img: "sol/mi4.png"
};

var fa4 = {
     nom: "fa4",
     img: "sol/fa4.png"
};

var sol4 = {
     nom: "sol4",
     img: "sol/sol4.png"
};

var la4 = {
     nom: "la4",
     img: "sol/la4.png"
};

var si4 = {
     nom: "si4",
     img: "sol/si4.png"
};

var do5 = {
     nom: "do5",
     img: "sol/do5.png"
};

var re5 = {
     nom: "re5",
     img: "sol/re5.png"
};


var mi5 = {
     nom: "mi5",
     img: "sol/mi5.png"
};


var fa5 = {
     nom: "fa5",
     img: "sol/fa5.png"
};


var sol5 = {
     nom: "sol5",
     img: "sol/sol5.png"
};


var la5 = {
     nom: "la5",
     img: "sol/la5.png"
};


var si5 = {
     nom: "si5",
     img: "sol/si5.png"
};


var do6 = {
     nom: "do6",
     img: "sol/do6.png"
};

var re6 = {
     nom: "re6",
     img: "sol/re6.png"
};


















var Notes = [do4, re4, mi4, fa4, sol4, la4, si4, do5, re5, mi5, fa5, sol5, la5, si5, do6, re6];


var s = 0;
var randomNum = Math.floor(Math.random() * Notes.length);

document.getElementById("myPicture").src = Notes[randomNum].img;


var note = document.getElementById("Note");






function maFonction() {
     var theText = document.getElementById("Note").value;
     console.log("Ca marche !");
     document.getElementById('entrer').click();
     if (theText.toUpperCase()==Notes[randomNum].nom.toUpperCase()){
          console.log("bravo");
          s++;
          //randomNum = Math.floor(Math.random() * Notes.length);
          //document.getElementById("myPicture").src = Notes[randomNum].img;
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







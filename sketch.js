function preload(){
    
}



function setup(){
createCanvas(850,600);
input=createInput().attribute("placeholder", "Enter your name ");
input.position(350,250);
bP=createButton("SUBMIT");
bP.position(400,280);
bP.mousePressed(logic);



}
function draw(){
background("lightBlue");

  
}
function logic(){
input.hide();
bP.hide();
H=createElement("h1");
H.html("Hello! "+input.value() );
H.position(410,10);
A=createElement("h1");
A.html("Let's see if you can answer this");
A.position(230,50);
B=createElement("h1");
B.html("Question1) How is tuberculosis caused");
B.position(80,150);
C=createElement("h2");
D=createElement("h2");
D.html("a) By virus");
D.position(50,250);
E=createElement("h2");
E.html("b) By fungus");
E.position(50,300);
G=createElement("h2");
G.html("c) By protozoan");
G.position(50,350);
I=createElement("h2");
I.html("d) By Bacteria");
I.position(50,400);
output=createInput().attribute("placeholder", "Enter the correct option");
output.position(50,550); 
bp=createButton("SUBMIT");
bp.position(600,550);
bp.mousePressed(logic2);
}
function logic2(){
H.hide();
A.hide();
B.hide();
C.hide();
D.hide();
E.hide();
G.hide();

bp.hide();
output.hide();
createElement("h1");

createElement("h2");
html("Question1) "+output.value());
position(100,150);
createElement("h1");
html("CORRECT ANSWER");
position(100,300);
createElement("h2");
html("Question1) c");
position(100,350);
next=createButton("Next");
next.position(650,450);
next.mousePressed(logic3);
}

function logic3(){
hide();
hide();
hide();
hide();
hide();
hide();
hide();
hide();
hide();
output.hide();
hide();
hide();
hide();
hide();
hide();
next.hide();

    
    }



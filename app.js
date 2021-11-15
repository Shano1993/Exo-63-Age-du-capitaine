
let a = 0;

let age = document.getElementById("age")

for(a = 0; a <= 18; a++ ) {
    document.getElementById('age').innerHTML+="Le capitaine à "+a+" ans, le capitaine est jeune. <br>";
}

for(a = 19; a <= 50; a++ ) {
    document.getElementById('age').innerHTML+="Le capitaine à "+a+" ans, le capitaine n'est pas très vieux. <br>";
}

for(a = 51; a <= 100; a++ ) {
    document.getElementById('age').innerHTML+="Le capitaine à "+a+" ans, le capitaine est vieux. <br>";
}
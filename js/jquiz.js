

var lista = ["Você se parece com o Luke Cage","Você se parece com o Demolidor","Você se parece com a Jessica Jones","Você se parece com o Punho de Ferro"];

var resposta;
punho     = 0;
jessica   = 0;
luke      = 0;
demolidor = 0;

function ver(){
	if(document.getElementById('p1').checked){
		punho+= 1;
	}
	if(document.getElementById('j1').checked){
    jessica+=1;
	}
	if(document.getElementById('d1').checked){
		demolidor+=1;
	}
	if(document.getElementById('luke1').checked){
		luke+= 1;
	}

	if(document.getElementById('l2').checked){
		luke+=1;
	}
	if(document.getElementById('j2').checked){
		jessica+= 1;
	}
	if(document.getElementById('p2').checked){
		punho+= 1;
	}
	if(document.getElementById('d2').checked){
		demolidor+=1;
	}


	if(document.getElementById('p2').checked){
		punho+= 1;
	}
	if(document.getElementById('j2').checked){
		jessica+= 1;
	}
	if(document.getElementById('d3').checked){
		demolidor+=1;
	}
	if(document.getElementById('l3').checked){
		luke+=1;
	}


		if (punho >= 2) {
			resposta = " Punho de Ferro";
		 }
		else if (jessica >= 2) {
			resposta = "Jessica Jones";
		}
		else if (luke >= 2) {
			resposta = "Luke Cage";
		}
		else if (demolidor >= 2) {
			resposta = "Demolidor";
		}

	else{
		resposta=lista[Math.floor(Math.random() * lista.length)];

	}
	// resposta = lista.sort();
		document.getElementById("personagem").innerHTML = resposta;


}

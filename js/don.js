$(function() {
	function don(searchElement, results) {
		var selectedResult = -1, // Permet de savoir quel résultat est sélectionné : -1 signifie "aucune sélection"
		    previousRequest, // On stocke notre précédente requête dans cette variable
	    	previousValue = searchElement.value; // On fait de même avec la précédente valeur
		
		function getResults(keywords) { // Effectue une requête et récupère les résultats
		    var xhr = new XMLHttpRequest();
		    xhr.open('GET', './search.php?s='+ encodeURIComponent(keywords));
		
	    	xhr.addEventListener('readystatechange', function() {
	        	if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			    	console.log('------------');	
					console.log('State : ' + xhr.readyState);
					console.log('DONE : ' + XMLHttpRequest.DONE);
					console.log('status : ' + xhr.status);
					console.log('response : ' + xhr.responseText);
		            displayResults(xhr.responseText);
	        	}
		    });
		
		    xhr.send(null);
		
		    return xhr;
		}
		
		function displayResults(response) { // Affiche les résultats d'une requête
	    	results.style.display = response.length ? 'block' : 'none'; // On cache le conteneur si on n'a pas de résultats
		
		    if (response.length) { // On ne modifie les résultats que si on en a obtenu
		        response = response.split('|');
		        var responseLen = response.length;
		
		        results.innerHTML = ''; // On vide les résultats
		
		        for (var i = 0, div ; i < responseLen ; i++) {
	            	div = results.appendChild(document.createElement('div'));
	            	div.innerHTML = response[i];
		
	            	div.addEventListener('click', function(e) {
	                	chooseResult(e.target);
		            });
		        }
		    }
		}
		
		function chooseResult(result) { // Choisi un des résultats d'une requête et gère tout ce qui y est attaché
		    searchElement.value = previousValue = result.innerHTML; // On change le contenu du champ de recherche et on enregistre en tant que précédente valeur
		    results.style.display = 'none'; // On cache les résultats
		    result.className = ''; // On supprime l'effet de focus
		    selectedResult = -1; // On remet la sélection à "zéro"
		    searchElement.focus(); // Si le résultat a été choisi par le biais d'un clique alors le focus est perdu, donc on le réattribue
		}
		
		
		searchElement.addEventListener('keyup', function(e) {
	    	var divs = results.getElementsByTagName('div');
		
		    if (e.keyCode == 38 && selectedResult > -1) { // Si la touche pressée est la flèche "haut"
		        divs[selectedResult--].className = '';
		        if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
		            divs[selectedResult].className = 'result_focus';
		        }
		    } else if (e.keyCode == 40 && selectedResult < divs.length - 1) { // Si la touche pressée est la flèche "bas"
	        	results.style.display = 'block'; // On affiche les résultats
		
		        if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
	            	divs[selectedResult].className = '';
		        }
		
	        	divs[++selectedResult].className = 'result_focus';
		    } else if (e.keyCode == 13 && selectedResult > -1) { // Si la touche pressée est "Entrée"
		        chooseResult(divs[selectedResult]);
		    } else if (searchElement.value != previousValue) { // Si le contenu du champ de recherche a changé
		        previousValue = searchElement.value;
		
		        if (previousRequest && previousRequest.readyState < XMLHttpRequest.DONE) {
		            previousRequest.abort(); // Si on a toujours une requête en cours, on l'arrête
	        	}
		
		        previousRequest = getResults(previousValue); // On stocke la nouvelle requête
		
		        selectedResult = -1; // On remet la sélection à "zéro" à chaque caractère écrit
	    	}
		});
	}

var searchElement = document.getElementById('search_I'),
    results = document.getElementById('results_I');
	don(searchElement, results);

var searchElement = document.getElementById('search_II'),
    results = document.getElementById('results_II');
	don(searchElement, results);

var searchElement = document.getElementById('search_III'),
    results = document.getElementById('results_III');
	don(searchElement, results);

var searchElement = document.getElementById('search_IV'),
    results = document.getElementById('results_IV');
	don(searchElement, results);

var searchElement = document.getElementById('search_V'),
    results = document.getElementById('results_V');
	don(searchElement, results);

var searchElement = document.getElementById('search_VI'),
    results = document.getElementById('results_VI');
	don(searchElement, results);

var searchElement = document.getElementById('search_VII'),
    results = document.getElementById('results_VII');
	don(searchElement, results);

var searchElement = document.getElementById('search_VIII'),
    results = document.getElementById('results_VIII');
	don(searchElement, results);

var searchElement = document.getElementById('search_IX'),
    results = document.getElementById('results_IX');
	don(searchElement, results);

var searchElement = document.getElementById('search_X'),
    results = document.getElementById('results_X');
	don(searchElement, results);

var searchElement = document.getElementById('search_XI'),
    results = document.getElementById('results_XI');
	don(searchElement, results);

var searchElement = document.getElementById('search_XII'),
    results = document.getElementById('results_XII');
	don(searchElement, results);

var searchElement = document.getElementById('search_XIII'),
    results = document.getElementById('results_XIII');
	don(searchElement, results);

var searchElement = document.getElementById('search_XIV'),
    results = document.getElementById('results_XIV');
	don(searchElement, results);

var searchElement = document.getElementById('search_XV'),
    results = document.getElementById('results_XV');
	don(searchElement, results);

var searchElement = document.getElementById('search_XVI'),
    results = document.getElementById('results_XVI');
	don(searchElement, results);

var searchElement = document.getElementById('search_XVII'),
    results = document.getElementById('results_XVII');
	don(searchElement, results);

var searchElement = document.getElementById('search_XVIII'),
    results = document.getElementById('results_XVIII');
	don(searchElement, results);

var searchElement = document.getElementById('search_XIX'),
    results = document.getElementById('results_XIX');
	don(searchElement, results);

var searchElement = document.getElementById('search_XX'),
    results = document.getElementById('results_XX');
	don(searchElement, results);

var searchElement = document.getElementById('search_XXI'),
    results = document.getElementById('results_XXI');
	don(searchElement, results);
});
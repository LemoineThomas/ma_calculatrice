function clickNum(numb){
    //si la chaine de caractère = 0, alors on remplace le caractère
    if(document.getElementById('result').innerHTML == "0"){
        document.getElementById('result').innerHTML = numb;
    }else{
        document.getElementById('result').innerHTML += numb;
    }  
    
}
function clickOperator(operator){
    //on vérifie si l'utilisateur essaye de rentrer 2 caractères à la suite, dans ce cas, on remplace l'ancien caractère par le nouveau
    if(document.getElementById('result').innerHTML.substr((document.getElementById('result').innerHTML.length - 1), document.getElementById('result').innerHTML.length) == " "){
        document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.substr(0, (document.getElementById('result').innerHTML.length - 3))
    }
    
    if(operator == "X"){
        document.getElementById('result').innerHTML += " * ";
    }else if(operator == "."){
        document.getElementById('result').innerHTML += ".";
    }else{
        document.getElementById('result').innerHTML += " " + operator + " ";
    }

}
function clickEqual(){
    var equal = eval(document.getElementById('result').innerHTML);
    
    var historique = localStorage.getItem('historiques')
    //on vérifie si l'historique n'est pas vide
    if(historique){
        historique = JSON.parse(historique)
        //on vérifie si l'historique dépasse ou est égal à 10
        if(historique.length >= 10){
            //on push les elements dans l'ordre inverse en laissant l'element 0 vide
            for (let index = 9; index > 0; index--) {
                historique[index] = historique[index - 1];
                
            }
            //on push le nouveau calcul dans l'element 0
            historique[0] = "<p>" + document.getElementById('result').innerHTML + " = " + equal + "</p>";

            const historiqueString = JSON.stringify(historique);
            localStorage.setItem('historiques', historiqueString)
        }else{
            historique.push("<p>" + document.getElementById('result').innerHTML + " = " + equal + "</p>");
            const historiqueString = JSON.stringify(historique);
            localStorage.setItem('historiques', historiqueString)
        }
    }else{
        var historique = []
        historique.push("<p>" + document.getElementById('result').innerHTML + " = " + equal + "</p>");
        const historiqueString = JSON.stringify(historique);
        localStorage.setItem('historiques', historiqueString)
    }
    historique = localStorage.getItem('historiques')
    historique = JSON.parse(historique)
    document.getElementById('historique').innerHTML = ""
    historique.forEach(element => {
        document.getElementById('historique').innerHTML += element
    });
    document.getElementById('result').innerHTML = equal;

}

function clearResult(){
    document.getElementById('result').innerHTML = "0"
}

function goBack(){
    //on vérifie si le caractère a supprimer est un espace, dans ce cas on supprime 3 caractères puisqu'il y a un opérateur (ex: " * " ou " / " etc)
    if(document.getElementById('result').innerHTML.substr((document.getElementById('result').innerHTML.length - 1), document.getElementById('result').innerHTML.length) == " "){
        newNumb = document.getElementById('result').innerHTML.substr(0, (document.getElementById('result').innerHTML.length - 3))
    //on vérifie si il y a qu'un seul element dans la chaine de caractère, dans ce cas, la revient à 0
    }else if(document.getElementById('result').innerHTML.length == 1){
        newNumb = 0
    }
    
    else{
        newNumb = document.getElementById('result').innerHTML.substr(0, (document.getElementById('result').innerHTML.length - 1))
    }
    

    document.getElementById('result').innerHTML = newNumb;
}
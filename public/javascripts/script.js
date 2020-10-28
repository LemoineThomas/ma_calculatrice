function clickNum(numb){
    if(document.getElementById('result').innerHTML == "0"){
        document.getElementById('result').innerHTML = numb;
    }else{
        document.getElementById('result').innerHTML += numb;
    }  
    
}
function clickOperator(operator){
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

    if(historique){
        historique = JSON.parse(historique)
        if(historique.length == 10){
            for (let index = 9; index > 0; index--) {
                historique[index] = historique[index - 1];
                
            }
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
    if(document.getElementById('result').innerHTML.substr((document.getElementById('result').innerHTML.length - 1), document.getElementById('result').innerHTML.length) == " "){
        newNumb = document.getElementById('result').innerHTML.substr(0, (document.getElementById('result').innerHTML.length - 3))
    }else if(document.getElementById('result').innerHTML.length == 1){
        newNumb = 0
    }
    
    else{
        newNumb = document.getElementById('result').innerHTML.substr(0, (document.getElementById('result').innerHTML.length - 1))
    }
    

    document.getElementById('result').innerHTML = newNumb;
}
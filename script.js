document.onkeypress=function(event){
    validCharacter="0123456789.=+-*/c"
    if(event.which!=13)
        character=String.fromCharCode(event.which)
    else
        character="="
    if(validCharacter.includes(character))
        calculator(character)
}

const lis = document.querySelectorAll("ul li")
lis.forEach(node => {
    node.addEventListener("mousedown", function(event){
        const character = node.innerText
        calculator(character)
    })
});


function calculator(value){
    
    const result = document.querySelector(".result")
    const resultText = result.innerText
    let length = resultText.length
    const operators = "+-*/."
    const numbers="0123456789"
    const invalidStart = "/*+undefinedInfinity"
    const validStart = "-."

    if (resultText == "0") {
        if (!operators.includes(value))
            result.innerText = ""
    }

    if (invalidStart.includes(value) && result.innerText == "") {
        result.innerText = ""
        return
    }

    if (operators.includes(value) && operators.includes(resultText[length - 1])) {
        if (result.innerText.length > 1 || (result.innerText.length == 1 && validStart.includes(value)))
            result.innerText = resultText.slice(0, -1) + value
        return
    }

    if (value.toLowerCase() == 'c') {
        result.innerText = ""
        return
    }

    if (value == '=') {
        let solution = eval(resultText)
        result.innerText = solution
        return
    }

    length = result.innerText.length
    console.log(length)

    result.append(value)
}
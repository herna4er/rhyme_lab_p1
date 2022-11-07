const submit_btn = document.getElementById("submit-btn");
submit_btn.onclick = async function (ev) {
    ev.preventDefault()

    console.log("Clicked submit")
    const word = document.getElementById("word-query").value;
    // console.log(word)

    const query = await fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${word}`)
    
    const resultsJson = await query.json()
    console.log(query)
    console.log(resultsJson)

    const resultsContainer = document.getElementById('results-container')
    Array.from(resultsContainer.childNodes).forEach((child) => {
        child.remove()
    })

    const rhymeResultsElems = resultsJson.map((rhymeWord) => {
        const resultElem = document.createElement("span");
        resultElem.style.fontSize = `${rhymeWord.score}px`;
        resultElem.innerText = rhymeWord.word;
        console.log(rhymeWord.score)
        resultsContainer.appendChild(resultElem)
        return resultElem
    })
    console.log(rhymeResultsElems)
}
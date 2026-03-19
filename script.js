// ===== VRAGEN =====
let vragen = [
    {
        vraag: "Wat is 2 + 2?",
        antwoorden: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        vraag: "Welke taal gebruiken we in de browser?",
        antwoorden: ["Python", "C#", "JavaScript", "Java"],
        correct: 2
    }
];

// ===== VARIABELEN =====
let huidigeVraag = 0;


// ===== START KNOP =====
document.getElementById("start").onclick = function () {
    huidigeVraag = 0;
    toonVraag();
};


// ===== VRAAG TONEN =====
function toonVraag() {

    let vraagElement = document.getElementById("vraag");
    let antwoordenDiv = document.getElementById("antwoorden");

    // TODO: vraag tonen
    vraagElement.innerText = vragen[huidigeVraag].vraag;
    // TODO: antwoorden genereren (buttons!)
    antwoordenDiv.innerHTML = ""; // eerst leegmaken

    for (let i = 0; i < vragen[huidigeVraag].antwoorden.length; i++) {
        let antwoordButton = document.createElement("button");
        antwoordButton.innerText = vragen[huidigeVraag].antwoorden[i];
        antwoordButton.onclick = function ()
        {
            controleerAntwoord(i);
        };
        antwoordenDiv.appendChild(antwoordButton);
    }
    document.getElementById("volgende").disabled = true; // volgende knop uitschakelen
    document.getElementById("feedback").innerText = "Wrong";

}


// ===== ANTWOORD CONTROLEREN =====
function controleerAntwoord(index) {

    let feedback = document.getElementById("feedback");

    // TODO: controleer of antwoord juist is
    if (index === vragen[huidigeVraag].correct) {
        feedback.innerText = "Correct!";
    } else {
        feedback.innerText = "Fout!";
    }
    // TODO: feedback tonen

    document.getElementById("volgende").disabled = false;
}


// ===== VOLGENDE VRAAG =====
document.getElementById("volgende").onclick = function () {

    huidigeVraag++;

    if (huidigeVraag >= vragen.length) {
        alert("Einde van de quiz!");
        huidigeVraag = 0;
    }

    // TODO: nieuwe vraag tonen
};

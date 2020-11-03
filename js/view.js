const model = {
    page: 'vote',
    people: [
        { name: 'Per', votes: 7 },
        { name: 'Pål', votes: 9 },
        { name: 'Espen', votes: 2 },
    ],
    nameInput: '',
};

updateView();

function updateView() {
    if (model.page == 'vote') {
        updateViewVotePage();
    } else if (model.page == 'newPerson') {
        updateViewNewPersonPage();
    } else {
        updateViewVotePage();
    }
}

function updateViewVotePage() {
    let votesTableHtml = '';
    for(let i = 0; i < model.people.length; i++){
        let person = model.people[i];
        votesTableHtml += `
            <li>
                ${person.name} har ${person.votes} stemmer.
                <button onclick="model.people[${i}].votes++; updateView();">+</button>            
            </li>
        `;
    }


    document.getElementById('app').innerHTML = `
    
        <h3>Stemmeoversikt</h3>
        ${votesTableHtml}                
        <button onclick="model.page='newPerson'; updateView();">Legg til ny person</button>
    `;
}

function updateViewNewPersonPage() {
    document.getElementById('app').innerHTML = `
    
        <h3>Legg til nye personer som kan stemmes på</h3>
        <input type="text" oninput="model.nameInput=this.value" value="${model.nameInput}" />
        <button onclick="addNewPerson()">Registrere navn</button>
        <button onclick="model.page='vote'; updateView();">Gå til stemmesiden</button>
    `;
}
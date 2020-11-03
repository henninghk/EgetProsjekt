function addNewPerson(){
    model.people.push({
        name: model.nameInput,
        votes: 0,
    });
    model.page = 'vote';
    model.nameInput = '';
    updateView();
}
function addNewFilm(){
   

    if ( model.filmerInput != ''|| 
    model.filmerInput!= ''||  
    model.catagoryInput != ''|| 
    model.yearInput != ''||
    model.votesInput != ''){
        
        
        
        
        
        model.titel.push({
            filmer: model.filmerInput,
            actor: model.actorInput,
            catagory:model.catagoryInput,
            year:model.yearInput,
            votes:model.votesInput,
          
        }
        
        )
        model.page = '';
        model.filmerInput = '';
        model.actorInput = '';
        model.catagoryInput = '';
        model.yearInput = '';
        model.votesInput = '';
        
        updateView();
    }
    else alert("Et eller flere felter")
    
}
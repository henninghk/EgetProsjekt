const model ={
    page: 'vote',
    titel:
    [{
        filmer:'', actor:'', catagory:'', year:'', votes:"", },
    ],
    
    filmerInput:'',
    actorInput:'',
    catagoryInput:'',
    yearInput:'',
    votesInput:'',
    };
    
    
    updateView();
    
    function updateView(){
        if(model.page == 'vote'){
            updateViewVotePage();}
            else if (model.page == 'newFilm'){
                updateViewNewFilmPage();
            }else{
                updateViewVotePage();
            }
        }
    
    
    
        function updateViewVotePage(){
            let votesTableHtml = '';
            for(let i = 1; i < model.titel.length; i++){
                let Film = model.titel[i];
                votesTableHtml +=`
                <table id="alter">
                
                <td>${Film.filmer}</td>
                <td>${Film.actor}</td>
                <td>${Film.catagory}</td>
                <td>${Film.year}</td>
                <td>${Film.votes}</td>
                
                </table><hr>`;
            }
               
    
    
    
            document.getElementById('movies').innerHTML = `
            <h3>Film liste!</h3>
            <br></br>
            <tr>
                <th>Titel</th>
                <th>Skuespiller</th>
                <th>Sjanger</th>
                <th>Årsgang</th>
                <th>Vurdering</th>
                <tr>
                <br></br>
                ${votesTableHtml}
            <button onclick="model.page='newFilm'; updateView();">Legg til nye filmer</button>
            
    
            `;
        }
    
    
    
    
    
            function updateViewNewFilmPage(){
                
                document.getElementById('movies').innerHTML = `
                
                <h3>Her kan du legge til filmer!</h3>
                
                Tittel:<input type="text" oninput="model.filmerInput=this.value" value="${model.filmerInput}" />
                
                Skuespillere: <input type="text" oninput="model.actorInput=this.value" value="${model.actorInput}"/>
                
                Sjanger:
                <select onchange="model.catagoryInput=this.value" value="${model.catagoryInput}">
                <option value="Catagory"> Catagory:</option>
                <option value="Komedie"> Komedie:</option>
                <option value="Action"> Action:</option>
                <option value="Drama"> Drama:</option>
                <option value="Triller"> Triller:</option>
                <option value="Grøsser"> Grøsser:</option>
                <option value="Mysterie"> Mysterie:</option>
                </select>
                
                Velg: 
                <select onchange="model.yearInput=this.value" value="${model.yearInput}">
                <option value="Years"> Years:</option>
                <option value="70-talls filmer"> 70-talls filmer</option>
                <option value="80-talls filmer"> 80-talls filmer</option>
                <option value="90-talls filmer"> 90-talls filmer</option>
                <option value="00-talls filmer"> 00-talls filmer</option>
                <option value="10-talls filmer"> 10-talls filmer</option>
                <option value="20-talls-filmer"> 20-talls-filmer</option>
                </select>
                
                
                Rating:
                <select onchange="model.votesInput=this.value" value="${model.votesInput}">
                <option value="Ingen kommentar"> 0</option>
                <option value="Totalt ræva!!!"> 1</option>
                <option value="Dette var dårlig greier"> 2</option>
                <option value="Bort kastet tid"> 3</option>
                <option value="Ok film kunne blitt gjort bedere"> 4</option>
                <option value="Ok film  "> 5</option>
                <option value="Bra film "> 6</option>
                <option value="Overaskende bra film"> 7</option>
                <option value="Veldig bra film"> 8</option>
                <option value="Sykt bra film"> 9</option>
                <option value="Helt sinnsykt bra film virkelig fantastisk"> 10</option>
                <option value="Beste filmen jeg har sett!"> 10+++</option>
               
                

                </select>
                <br></br>
                

                
                
                <button onclick="addNewFilm()">Legg til film</button>
    
                <button onclick="model.page='vote'; updateView();">Gå tilbake</button>
                
                `; 
                
            }
            
            


            
            


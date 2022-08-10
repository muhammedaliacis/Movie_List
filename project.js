const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const deleteElement = document.getElementById("films");
const allDeleteElement = document.getElementById("clear-films");


//UI object start
const ui = new UI();
const storage = new Storage();

//all event load

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    deleteElement.addEventListener("click", deleteFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    allDeleteElement.addEventListener("click",allDeleteFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    let films = storage.getFilmsFromStorage();
    // let ctl = control(films, title);

    // if(ctl === 1)
    // {
    //     ui.displayMessage("danger", "Error");
    // }
    if (title === "" || director === "" || url === ""){
        ui.displayMessage("danger", "Please fill in all fields.");
    } 
    else{      // new movie
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessage("success", "Adding successful.");
    }
    ui.clearInput(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
    if (e.target.id === "delete-film"){
        e.target.parentElement.parentElement.remove();
        ui.displayMessage("success" , "The movie was deleted successfully.");
        storage.deleteFilmsFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    }
}

function allDeleteFilms(e){
    storage.alldeletefilm();
}

// function control(films, title){
//     films.forEach(function(film) {
//         if (film.title === title){
//             return (1);
//             }
//         else{
//             return (0);
//         }
//         }); 
// }
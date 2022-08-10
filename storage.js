function Storage(){


}

Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.deleteFilmsFromStorage = function(filmtitle){
    let films = this.getFilmsFromStorage();

    films.forEach(function (film, index){
        if (film.title === filmtitle){
            films.splice(index, 1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));

    }
    
    return films;
}

Storage.prototype.alldeletefilm = function(){
    let films = this.getFilmsFromStorage();
    if (confirm("Are you sure you want to delete all?")){
		while (deleteElement.firstElementChild){
			deleteElement.firstElementChild.remove();
		}
	}
	localStorage.removeItem("films");
}
function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
    const filmList= document.querySelector("#films");

    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
  `
}

UI.prototype.clearInput = function(element1, element2, element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
    

}

UI.prototype.displayMessage = function(type, message){
    const alert = document.createElement("div");
    const cardBody = document.getElementsByClassName("card-body")[0];
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    cardBody.appendChild(alert);
	setTimeout(function(){
		alert.remove();
	},1500);
}

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    films.forEach(function(film) {
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
  `
    });
}
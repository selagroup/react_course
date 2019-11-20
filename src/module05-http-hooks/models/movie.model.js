class MovieModel {
    constructor(id = 0, title='',
                year=0, poster ='',
                releaseDate = null, genres=[]){

        this.id = id;
        this.year = year;
        this.title =title;
        this.poster = poster;
        this.releaseDate = releaseDate;
        this.genres =genres;         
                    
    }
}

export default MovieModel
  
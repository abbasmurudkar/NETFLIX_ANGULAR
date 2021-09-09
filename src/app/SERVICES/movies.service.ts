import { Movies } from '../MODELS/movies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const enum endpoint {
    latest = '/movie/latest',
    now_playing = '/movie/now_playing',
    popular = '/movie/popular',
    top_rated = '/movie/top_rated',
    upcoming = '/movie/upcoming',
    trending = '/trending/all/week',
    originals = '/discover/tv',
    freetowatch = '/movie/freetowatch',

}

@Injectable({
    providedIn: 'root'
})

export class MoviesServices {
    private URL = "https://api.themoviedb.org/3"
    private api_key = environment.api
    constructor(private http: HttpClient) { }
    getlatesmovie(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getNowPlaying(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getOriginals(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getPopularMovies(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getTopRated(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getTrending(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
    getmovies(): Observable<Movies> {
        return this.http.get<Movies>(`${this.URL}${endpoint.freetowatch}`, {
            params: {
                api_key: this.api_key
            }
        });
    }
  
}



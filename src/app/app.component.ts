import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix';

  constructor(private http: HttpClient) { }

  getproduct(): Observable<any>{
return this.http.get('https://api.themoviedb.org/3/movie/550')
console.log(this.http)

  }
}


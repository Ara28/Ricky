import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  characters=[]

  constructor(
    private http: HttpClient
  ) 
  
  { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(mostrar=>{
      console.log(mostrar);
      this.characters=mostrar.info;
    })
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal, Root } from '../search.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  prodotto!:string
  obsprod!: Observable<Root>
  ris:Meal[]=[]
  constructor(private http:HttpClient){}

  cerca(prodotto:HTMLInputElement):void{
    this.prodotto=prodotto.value
    this.obsprod=this.ritorna(this.prodotto)
    this.obsprod.subscribe((data:Root)=>{this.ris=data.meals})
  }
  ritorna(prod:string){
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${prod}`
    let obsp=this.http.get<Root>(url)
    return obsp
  }


}

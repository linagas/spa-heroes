import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "./../../services/heroes.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  heroes: any = [];
  texto: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heoresService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params["name"];
      this.heroes = this._heoresService.searchHeroes(params["name"]);
      console.log(this.heroes);
    });
  }

  verHeroe(id: number) {
    console.log("id en ver heroe", id);
    this.router.navigate(["/heroe", id]);
  }
}

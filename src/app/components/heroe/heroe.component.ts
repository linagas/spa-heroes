import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any[] = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(obj => {
      this.heroe = this._heroesService.getHeroe(obj["id"]);
    });
    console.log(this.heroe);
  }

  ngOnInit() {}
}

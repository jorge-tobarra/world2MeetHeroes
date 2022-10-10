import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../../models/hero';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss'],
})
export class CreateOrUpdateComponent {
  heroData: Hero | undefined;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService,
  ) {
    this.getHeroFromParamId(heroesService);
    this.form = this.fb.group({
      name: [this.heroData?.name || null, Validators.required],
      superpower: [this.heroData?.superpower || null, Validators.minLength],
    });
  }

  onSubmit(): void {
    if (this.heroData) { // update
      const hero: Hero = {
        id: this.heroData.id,
        name: this.form.value.name,
        superpower: this.form.value.superpower || undefined,
      };
      this.heroesService.updateHero(hero);
    } else { // create
      this.heroesService
        .createHero(this.form.value.name, this.form.value.superpower || undefined);
    }
    this.router.navigate(['..']);
  }

  private getHeroFromParamId(heroesService: HeroesService) {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId && parseInt(paramId, 10)) {
      const hero = heroesService.getHeroById(parseInt(paramId, 10));
      if (hero) this.heroData = hero;
    }
  }
}

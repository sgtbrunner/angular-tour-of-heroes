import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched Hero');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fecthed Hero with id ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

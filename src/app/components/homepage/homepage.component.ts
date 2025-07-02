// components/homepage/homepage.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  featuredEvents = [
    {
      id: 1,
      title: 'Campeonato de Futebol Regional',
      date: '2025-07-15',
      location: 'Estádio Municipal, Fortaleza',
      price: 'R$ 25,00',
      image: '',
      sport: 'Futebol'
    },
    {
      id: 2,
      title: 'Torneio de Basquete Juvenil',
      date: '2025-07-20',
      location: 'Ginásio Poliesportivo',
      price: 'R$ 15,00',
      image: '',
      sport: 'Basquete'
    },
    {
      id: 3,
      title: 'Maratona de Fortaleza 2025',
      date: '2025-08-01',
      location: 'Orla de Copacabana',
      price: 'R$ 50,00',
      image: '',
      sport: 'Corrida'
    }
  ];

  sportsCategories = [
    { name: 'Futebol', icon: 'sports_soccer', count: 12 },
    { name: 'Basquete', icon: 'sports_basketball', count: 8 },
    { name: 'Vôlei', icon: 'sports_volleyball', count: 6 },
    { name: 'Corrida', icon: 'directions_run', count: 15 },
    { name: 'Natação', icon: 'pool', count: 4 },
    { name: 'Tênis', icon: 'sports_tennis', count: 7 }
  ];

  constructor(
    private router: Router,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    // Carregar imagens dos eventos
    this.loadEventImages();
  }

  private loadEventImages(): void {
    this.featuredEvents.forEach(event => {
      event.image = this.imageService.getSportImage(event.sport);
    });
  }

  searchEvents(searchTerm: string): void {
    // Implementar busca
    console.log('Searching for:', searchTerm);
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate(['/events', eventId]);
  }

  navigateToCategory(category: string): void {
    this.router.navigate(['/events'], { queryParams: { category } });
  }

  navigateToAthleteRegistration(): void {
    this.router.navigate(['/athlete-registration']);
  }
}
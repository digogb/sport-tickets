// components/header/header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="header-toolbar">
      <div class="toolbar-content">
        <!-- Logo -->
        <div class="logo-section" (click)="navigateHome()">
          <mat-icon class="logo-icon">sports</mat-icon>
          <span class="logo-text">SportTickets</span>
        </div>

        <!-- Navigation -->
        <nav class="nav-menu">
          <button mat-button class="nav-item" routerLink="/">
            <mat-icon>home</mat-icon>
            Início
          </button>
          
          <button mat-button class="nav-item" routerLink="/events">
            <mat-icon>event</mat-icon>
            Eventos
          </button>
          
          <button mat-button class="nav-item" routerLink="/athlete-registration">
            <mat-icon>person_add</mat-icon>
            Cadastro Atleta
          </button>
        </nav>

        <!-- Actions -->
        <div class="header-actions">
          <button mat-icon-button class="action-button">
            <mat-icon>notifications</mat-icon>
          </button>
          
          <button mat-icon-button class="action-button">
            <mat-icon>account_circle</mat-icon>
          </button>
          
          <!-- Mobile menu button -->
          <button mat-icon-button class="mobile-menu-button" (click)="toggleMobileMenu()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header-toolbar {
      background: white;
      color: #343a40;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 0;
    }

    .toolbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      .logo-icon {
        color: #667eea;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: 500;
        color: #343a40;
      }
    }

    .nav-menu {
      display: flex;
      gap: 0.5rem;

      @media (max-width: 768px) {
        display: none;
      }

      .nav-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: #6c757d;
        transition: all 0.3s ease;

        &:hover {
          background: #f8f9fa;
          color: #667eea;
        }

        &.active {
          background: #667eea;
          color: white;
        }

        mat-icon {
          font-size: 1.2rem;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .action-button {
        color: #6c757d;
        transition: color 0.3s ease;

        &:hover {
          color: #667eea;
        }
      }

      .mobile-menu-button {
        display: none;

        @media (max-width: 768px) {
          display: block;
        }
      }
    }

    @media (max-width: 768px) {
      .action-button:not(.mobile-menu-button) {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  toggleMobileMenu(): void {
    // Implementar menu mobile
    console.log('Toggle mobile menu');
  }
}
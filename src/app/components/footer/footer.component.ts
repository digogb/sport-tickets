// components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-content">
        <!-- Logo e descrição -->
        <div class="footer-section">
          <div class="footer-logo">
            <mat-icon class="logo-icon">sports</mat-icon>
            <h3>SportTickets</h3>
          </div>
          <p class="footer-description">
            A melhor plataforma para encontrar e comprar ingressos para eventos esportivos. 
            Conectando atletas, organizadores e fãs do esporte.
          </p>
          <div class="social-links">
            <button mat-icon-button class="social-button">
              <mat-icon>facebook</mat-icon>
            </button>
            <button mat-icon-button class="social-button">
              <mat-icon>sports_soccer</mat-icon>
            </button>
            <button mat-icon-button class="social-button">
              <mat-icon>share</mat-icon>
            </button>
          </div>
        </div>
        
        <!-- Links rápidos -->
        <div class="footer-section">
          <h4>Links Rápidos</h4>
          <ul class="footer-links">
            <li><a routerLink="/">Início</a></li>
            <li><a routerLink="/events">Todos os Eventos</a></li>
            <li><a routerLink="/athlete-registration">Cadastro de Atleta</a></li>
            <li><a routerLink="/organizer-registration">Cadastro de Organizador</a></li>
            <li><a routerLink="/about">Sobre Nós</a></li>
          </ul>
        </div>
        
        <!-- Esportes -->
        <div class="footer-section">
          <h4>Esportes</h4>
          <ul class="footer-links">
            <li><a routerLink="/events" [queryParams]="{category: 'Futebol'}">Futebol</a></li>
            <li><a routerLink="/events" [queryParams]="{category: 'Basquete'}">Basquete</a></li>
            <li><a routerLink="/events" [queryParams]="{category: 'Vôlei'}">Vôlei</a></li>
            <li><a routerLink="/events" [queryParams]="{category: 'Corrida'}">Corrida</a></li>
            <li><a routerLink="/events" [queryParams]="{category: 'Natação'}">Natação</a></li>
            <li><a routerLink="/events" [queryParams]="{category: 'Tênis'}">Tênis</a></li>
          </ul>
        </div>
        
        <!-- Suporte -->
        <div class="footer-section">
          <h4>Suporte</h4>
          <ul class="footer-links">
            <li><a routerLink="/help">Central de Ajuda</a></li>
            <li><a routerLink="/contact">Fale Conosco</a></li>
            <li><a routerLink="/terms">Termos de Uso</a></li>
            <li><a routerLink="/privacy">Política de Privacidade</a></li>
            <li><a routerLink="/refund">Política de Reembolso</a></li>
          </ul>
        </div>
        
        <!-- Contato -->
        <div class="footer-section">
          <h4>Contato</h4>
          <div class="contact-info">
            <div class="contact-item">
              <mat-icon>email</mat-icon>
              <span>contato@sporttickets.com</span>
            </div>
            <div class="contact-item">
              <mat-icon>phone</mat-icon>
              <span>(85) 3333-4444</span>
            </div>
            <div class="contact-item">
              <mat-icon>location_on</mat-icon>
              <span>Fortaleza, CE - Brasil</span>
            </div>
          </div>
          
          <!-- Newsletter -->
          <div class="newsletter">
            <h5>Newsletter</h5>
            <mat-form-field appearance="outline" class="newsletter-field">
              <input matInput placeholder="Seu email" type="email">
              <button mat-icon-button matSuffix>
                <mat-icon>send</mat-icon>
              </button>
            </mat-form-field>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; {{ currentYear }} SportTickets. Todos os direitos reservados.</p>
          <div class="footer-badges">
            <span class="badge">Seguro</span>
            <span class="badge">Confiável</span>
            <span class="badge">24/7</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      color: white;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem 2rem;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
      gap: 2rem;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }

    .footer-section {
      h3, h4, h5 {
        margin-bottom: 1rem;
        font-weight: 500;
        color: #ecf0f1;
      }

      h3 {
        font-size: 1.5rem;
      }

      h4 {
        font-size: 1.2rem;
        color: #3498db;
      }

      h5 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .logo-icon {
        color: #3498db;
        font-size: 2rem;
        width: 2rem;
        height: 2rem;
      }

      h3 {
        margin: 0;
        background: linear-gradient(45deg, #3498db, #2ecc71);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .footer-description {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }

    .social-links {
      display: flex;
      gap: 0.5rem;

      @media (max-width: 480px) {
        justify-content: center;
      }

      .social-button {
        background: rgba(52, 152, 219, 0.1);
        color: #3498db;
        border: 1px solid rgba(52, 152, 219, 0.3);
        transition: all 0.3s ease;

        &:hover {
          background: #3498db;
          color: white;
          transform: translateY(-2px);
        }
      }
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.9rem;

          &:hover {
            color: #3498db;
            padding-left: 5px;
          }
        }
      }
    }

    .contact-info {
      margin-bottom: 1.5rem;

      .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
        color: #bdc3c7;
        font-size: 0.9rem;

        mat-icon {
          color: #3498db;
          font-size: 1.1rem;
          width: 1.1rem;
          height: 1.1rem;
        }
      }
    }

    .newsletter {
      .newsletter-field {
        width: 100%;
        
        ::ng-deep {
          .mat-form-field-outline {
            color: rgba(189, 195, 199, 0.3);
          }

          .mat-form-field-outline-thick {
            color: #3498db;
          }

          .mat-input-element {
            color: white;
            
            &::placeholder {
              color: #bdc3c7;
            }
          }

          .mat-icon-button {
            color: #3498db;
            
            &:hover {
              background: rgba(52, 152, 219, 0.1);
            }
          }
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(189, 195, 199, 0.2);
      padding: 1.5rem 0;
      background: rgba(0, 0, 0, 0.1);

      .footer-bottom-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        p {
          margin: 0;
          color: #bdc3c7;
          font-size: 0.9rem;
        }
      }
    }

    .footer-badges {
      display: flex;
      gap: 0.5rem;

      .badge {
        background: linear-gradient(45deg, #2ecc71, #27ae60);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
      }

      @media (max-width: 480px) {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
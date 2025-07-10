// services/image.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // URLs de imagens de placeholder do Unsplash
  private readonly placeholderImages = {
    // Eventos esportivos
    football: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop&q=80',
    basketball: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop&q=80',
    volleyball: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=250&fit=crop&q=80',
    tennis: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop&q=80',
    swimming: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=250&fit=crop&q=80',
    running: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&q=80',
    cycling: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&q=80',
    
    // Avatares/Perfis
    defaultAvatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&h=200&fit=crop&crop=face&q=80',
    maleAthlete: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80',
    femaleAthlete: 'https://images.unsplash.com/photo-1494790108755-2616b332c123?w=200&h=200&fit=crop&crop=face&q=80',
    
    // Backgrounds
    sportsPattern: this.generateSportsPattern(),
    stadiumBackground: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&h=400&fit=crop&q=80',
    
    // Placeholder genérico
    placeholder: 'https://via.placeholder.com/400x250/667eea/white?text=SportTickets'
  };

  constructor() { }

  /**
   * Obter imagem por categoria de esporte
   */
  getSportImage(sport: string): string {
    const sportKey = sport.toLowerCase()
      .replace('futebol', 'football')
      .replace('basquete', 'basketball')
      .replace('vôlei', 'volleyball')
      .replace('tênis', 'tennis')
      .replace('natação', 'swimming')
      .replace('corrida', 'running')
      .replace('ciclismo', 'cycling');
    
    return this.placeholderImages[sportKey as keyof typeof this.placeholderImages] || this.placeholderImages.placeholder;
  }

  /**
   * Obter avatar padrão
   */
  getDefaultAvatar(): string {
    return this.placeholderImages.defaultAvatar;
  }

  /**
   * Obter avatar por gênero (opcional)
   */
  getAvatarByGender(gender?: 'male' | 'female'): string {
    switch (gender) {
      case 'male':
        return this.placeholderImages.maleAthlete;
      case 'female':
        return this.placeholderImages.femaleAthlete;
      default:
        return this.placeholderImages.defaultAvatar;
    }
  }

  /**
   * Obter imagem de evento por ID (simulado)
   */
  getEventImage(eventId: number): string {
    const images = [
      this.placeholderImages.football,
      this.placeholderImages.basketball,
      this.placeholderImages.running,
      this.placeholderImages.volleyball,
      this.placeholderImages.tennis,
      this.placeholderImages.swimming
    ];
    
    return images[eventId % images.length];
  }

  /**
   * Gerar pattern SVG para background
   */
  private generateSportsPattern(): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <pattern id="sports" patternUnits="userSpaceOnUse" width="50" height="50">
            <circle cx="10" cy="10" r="2" fill="white" opacity="0.1"/>
            <circle cx="40" cy="10" r="2" fill="white" opacity="0.1"/>
            <circle cx="25" cy="25" r="3" fill="white" opacity="0.08"/>
            <circle cx="10" cy="40" r="2" fill="white" opacity="0.1"/>
            <circle cx="40" cy="40" r="2" fill="white" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sports)"/>
      </svg>
    `;
    
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }

  /**
   * Gerar URL de placeholder personalizada
   */
  getPlaceholder(width: number = 400, height: number = 250, text: string = 'Imagem'): string {
    return `https://via.placeholder.com/${width}x${height}/667eea/white?text=${encodeURIComponent(text)}`;
  }

  /**
   * Verificar se URL de imagem é válida
   */
  isValidImageUrl(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  /**
   * Obter imagem com fallback
   */
  async getImageWithFallback(primaryUrl: string, fallbackUrl?: string): Promise<string> {
    const isValid = await this.isValidImageUrl(primaryUrl);
    if (isValid) {
      return primaryUrl;
    }
    return fallbackUrl || this.placeholderImages.placeholder;
  }
}
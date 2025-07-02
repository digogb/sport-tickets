// athlete-registration.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AthleteService } from '../../services/athlete.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-athlete-registration',
  templateUrl: './athlete-registration.component.html',
  styleUrls: ['./athlete-registration.component.scss']
})
export class AthleteRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading = false;
  maxDate = new Date();
  defaultAvatarUrl = '';
  
  sports = [
    'Futebol',
    'Basquete',
    'Vôlei',
    'Tênis',
    'Natação',
    'Corrida',
    'Ciclismo',
    'Handebol',
    'Atletismo',
    'Judô',
    'Karatê',
    'Boxe',
    'MMA',
    'Ginástica',
    'Outros'
  ];

  categories = [
    'Amador',
    'Semi-profissional',
    'Profissional',
    'Juvenil',
    'Master',
    'Veterano'
  ];

  constructor(
    private fb: FormBuilder,
    private athleteService: AthleteService,
    private snackBar: MatSnackBar,
    private router: Router,
    private imageService: ImageService
  ) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
      sport: ['', Validators.required],
      category: [''],
      birthDate: [''],
      bio: ['', Validators.maxLength(500)],
      profileImage: ['']
    });
  }

  ngOnInit(): void {
    // Configurar data máxima (hoje)
    this.maxDate = new Date();
    
    // Carregar avatar padrão
    this.defaultAvatarUrl = this.imageService.getDefaultAvatar();
    
    // Definir avatar padrão no formulário
    this.registrationForm.patchValue({
      profileImage: this.defaultAvatarUrl
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.isLoading = true;
      const formData = this.registrationForm.value;
      
      // Formatar data de nascimento se existir
      if (formData.birthDate) {
        formData.birthDate = new Date(formData.birthDate).toISOString();
      }

      this.athleteService.createAthlete(formData).subscribe({
        next: (response) => {
          this.showSuccessMessage('Atleta cadastrado com sucesso!');
          this.router.navigate(['/athletes', response.id]);
        },
        error: (error) => {
          this.showErrorMessage(error.error?.detail || 'Erro ao cadastrar atleta');
          this.isLoading = false;
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Aqui você implementaria o upload da imagem
      // Por enquanto, vamos simular com uma URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.registrationForm.patchValue({
          profileImage: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  formatPhoneNumber(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    }
    
    this.registrationForm.patchValue({ phone: value });
  }

  getErrorMessage(fieldName: string): string {
    const field = this.registrationForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} é obrigatório`;
    }
    
    if (field?.hasError('email')) {
      return 'Email inválido';
    }
    
    if (field?.hasError('minlength')) {
      return `${this.getFieldLabel(fieldName)} deve ter pelo menos ${field.errors?.['minlength'].requiredLength} caracteres`;
    }
    
    if (field?.hasError('maxlength')) {
      return `${this.getFieldLabel(fieldName)} deve ter no máximo ${field.errors?.['maxlength'].requiredLength} caracteres`;
    }
    
    if (field?.hasError('pattern')) {
      return 'Formato inválido';
    }
    
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      sport: 'Esporte',
      category: 'Categoria',
      birthDate: 'Data de nascimento',
      bio: 'Biografia'
    };
    
    return labels[fieldName] || fieldName;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.registrationForm.controls).forEach(key => {
      const control = this.registrationForm.get(key);
      control?.markAsTouched();
    });
  }

  private showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      panelClass: ['success-snackbar']
    });
  }

  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Fechar', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
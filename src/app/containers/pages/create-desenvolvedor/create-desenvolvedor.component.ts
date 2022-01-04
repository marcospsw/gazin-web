import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateDesenvolvedorDTO } from 'src/app/interfaces/desenvolvedor';
import { NivelResponseDTO } from 'src/app/interfaces/nivel';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { NiveisService } from 'src/app/services/niveis.service';

@Component({
  selector: 'app-create-desenvolvedor',
  templateUrl: './create-desenvolvedor.component.html',
  styleUrls: ['./create-desenvolvedor.component.scss'],
})
export class CreateDesenvolvedorComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private desenvolvedoresService: DesenvolvedoresService,
    private niveisService: NiveisService
  ) {}
  public newDevForm: FormGroup;
  public niveis: NivelResponseDTO[] = [];

  handleCreateDesenvolvedor() {
    if (this.newDevForm.valid) {
      const newDev = this.newDevForm.getRawValue() as CreateDesenvolvedorDTO;

      this.desenvolvedoresService.createDesenvolvedor(newDev).subscribe(
        () => {
          this.router.navigate(['/devs']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getNiveis() {
    this.niveisService.getNiveis().subscribe((nivel) => {
      this.niveis = nivel;
    });
  }

  ngOnInit(): void {
    this.newDevForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      datanascimento: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      hobby: ['', [Validators.required]],
      nivel_id: ['', [Validators.required]],
    });

    this.getNiveis();
  }
}

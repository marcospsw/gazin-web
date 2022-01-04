import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DesenvolvedorResponseDTO, UpdateDesenvolvedorDTO } from 'src/app/interfaces/desenvolvedor';
import { NivelResponseDTO } from 'src/app/interfaces/nivel';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { NiveisService } from 'src/app/services/niveis.service';
import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import add from 'date-fns/add';

@Component({
  selector: 'app-update-desenvolvedor',
  templateUrl: './update-desenvolvedor.component.html',
  styleUrls: ['./update-desenvolvedor.component.scss'],
})
export class UpdateDesenvolvedorComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private desenvolvedoresService: DesenvolvedoresService,
    private niveisService: NiveisService,
    private activatedRoute: ActivatedRoute
  ) {}
  public isLoading: boolean = false;
  public updateDevForm: FormGroup;
  public niveis: NivelResponseDTO[] = [];
  public devId: string;
  public desenvolvedor: DesenvolvedorResponseDTO;

  handleUpdateDesenvolvedor() {
    if (this.updateDevForm.valid) {
      const newDev = this.updateDevForm.getRawValue() as UpdateDesenvolvedorDTO;

      const formattedDate = zonedTimeToUtc(format(new Date(newDev.datanascimento), 'yyyy-MM-dd'), 'America/Sao_Paulo');

      console.log(formattedDate);

      this.desenvolvedoresService
        .updateDesenvolvedor(this.devId, {
          nome: newDev.nome,
          idade: newDev.idade,
          hobby: newDev.hobby,
          sexo: newDev.sexo,
          datanascimento: add(formattedDate, { days: 1 }),
          nivel_id: newDev.nivel_id,
        })
        .subscribe(
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

  async getDev(id: string) {
    this.isLoading = true;
    this.desenvolvedoresService.getOneDesenvolvedor(id).subscribe((desenvolvedor) => {
      this.desenvolvedor = desenvolvedor;

      this.updateDevForm = this.formBuilder.group({
        nome: [`${this.desenvolvedor.nome}`, [Validators.required]],
        sexo: [`${this.desenvolvedor.sexo}`, [Validators.required]],
        datanascimento: [`${format(new Date(this.desenvolvedor.datanascimento), 'yyyy-MM-dd')}`, [Validators.required]],
        idade: [`${this.desenvolvedor.idade}`, [Validators.required]],
        hobby: [`${this.desenvolvedor.hobby}`, [Validators.required]],
        nivel_id: [`${this.desenvolvedor.nivel.id}`, [Validators.required]],
      });

      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.devId = params.id;
    });
    this.getDev(this.devId);
    this.getNiveis();
  }
}

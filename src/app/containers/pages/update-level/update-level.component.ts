import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesenvolvedorResponseDTO } from 'src/app/interfaces/desenvolvedor';
import { OneNivelResponseDTO, UpdateNivelDTO } from 'src/app/interfaces/nivel';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { NiveisService } from 'src/app/services/niveis.service';

@Component({
  selector: 'app-update-level',
  templateUrl: './update-level.component.html',
  styleUrls: ['./update-level.component.scss'],
})
export class UpdateLevelsComponent implements OnInit {
  constructor(
    private niveisService: NiveisService,
    private activatedRoute: ActivatedRoute,
    private desenvolvedoresService: DesenvolvedoresService
  ) {}
  public isLoading: boolean = false;
  public desenvolvedores: DesenvolvedorResponseDTO[] = [];
  public nivel: OneNivelResponseDTO;
  public desenvolvedor: DesenvolvedorResponseDTO;

  public nivelId: string;
  public updateNivel: string;

  getOneNivel(id: string) {
    this.isLoading = true;
    this.niveisService.getOneNivel(id).subscribe((nivel) => {
      this.nivel = nivel;
      this.desenvolvedores = nivel.desenvolvedores;
      this.isLoading = false;
    });
  }

  getOneDesenvolvedor(id: string) {
    this.isLoading = true;
    this.desenvolvedoresService.getOneDesenvolvedor(id).subscribe((dev) => {
      this.desenvolvedor = dev;
      this.isLoading = false;
    });
  }

  handleDeleteDesenvolvedor(id: string) {
    this.isLoading = true;
    this.desenvolvedoresService.deleteDesenvolvedor(id).subscribe((dev) => {
      this.getOneNivel(this.nivelId);
      this.isLoading = false;
    });
  }

  handleUpdateNivel(id: string, updateNivel: UpdateNivelDTO) {
    this.isLoading = true;
    this.niveisService.updateNivel(id, updateNivel).subscribe((nivel) => {
      this.getOneNivel(nivel.id);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.nivelId = params.id;
    });

    this.getOneNivel(this.nivelId);
  }
}

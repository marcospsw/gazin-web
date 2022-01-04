import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesenvolvedorResponseDTO } from 'src/app/interfaces/desenvolvedor';
import { NivelResponseDTO } from 'src/app/interfaces/nivel';
import { NiveisService } from 'src/app/services/niveis.service';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent implements OnInit {
  constructor(private niveisService: NiveisService, private router: Router) {}

  public niveis: NivelResponseDTO[] = [];
  public isLoading: boolean = false;

  public desenvolvedores: DesenvolvedorResponseDTO[] = [];

  public createNivel: string;

  getNiveis() {
    this.isLoading = true;
    this.niveisService.getNiveis().subscribe((nivel) => {
      this.niveis = nivel;
      this.isLoading = false;
    });
  }

  handleCreateNivel(createNivel: string) {
    this.isLoading = true;
    this.niveisService.createNivel({ nivel: createNivel }).subscribe((nivel) => {
      this.getNiveis();
      this.isLoading = false;
    });
  }

  handleDeleteNivel(id: string) {
    this.isLoading = true;
    this.niveisService.deleteNivel(id).subscribe((nivel) => {
      this.getNiveis();
      this.isLoading = false;
    });
  }

  goToUpdateLevel(id: string) {
    this.router.navigate(['levels', id]);
  }
  ngOnInit(): void {
    this.getNiveis();
  }
}

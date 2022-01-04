import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDesenvolvedorDTO, DesenvolvedorResponseDTO } from 'src/app/interfaces/desenvolvedor';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-desenvolvedores',
  templateUrl: './desenvolvedores.component.html',
  styleUrls: ['./desenvolvedores.component.scss'],
})
export class DesenvolvedoresComponent implements OnInit {
  constructor(private desenvolvedoresService: DesenvolvedoresService, private router: Router) {}
  public isLoading: boolean = false;
  public desenvolvedores: DesenvolvedorResponseDTO[] = [];

  public desenvolvedor: DesenvolvedorResponseDTO;

  getDesenvolvedores() {
    this.isLoading = true;
    this.desenvolvedoresService.getDesenvolvedores().subscribe((dev) => {
      this.desenvolvedores = dev;
      this.isLoading = false;
    });
  }

  formatDate(data: Date) {
    return format(new Date(data), 'dd/MM/yyyy');
  }

  getOneDesenvolvedor(id: string) {
    this.isLoading = true;
    this.desenvolvedoresService.getOneDesenvolvedor(id).subscribe((dev) => {
      this.desenvolvedor = dev;
      this.isLoading = false;
    });
  }

  handleCreateDesenvolvedor(createDev: CreateDesenvolvedorDTO) {
    this.isLoading = true;
    this.desenvolvedoresService.createDesenvolvedor(createDev).subscribe((nivel) => {
      this.getDesenvolvedores();
      this.isLoading = false;
    });
  }

  handleDeleteDesenvolvedor(id: string) {
    this.isLoading = true;
    this.desenvolvedoresService.deleteDesenvolvedor(id).subscribe((dev) => {
      this.getDesenvolvedores();
      this.isLoading = false;
    });
  }

  goToCreateDesenvolvedor() {
    this.router.navigate(['devs/create']);
  }

  goToUpdateDev(id: string) {
    this.router.navigate(['devs/update', id]);
  }

  ngOnInit(): void {
    this.getDesenvolvedores();
  }
}

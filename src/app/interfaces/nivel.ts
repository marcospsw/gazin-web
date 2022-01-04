import { DesenvolvedorResponseDTO } from './desenvolvedor';

export interface CreateNivelDTO {
  nivel: string;
}

export interface UpdateNivelDTO {
  nivel: string;
}

export interface NivelResponseDTO {
  id: string;
  nivel: string;
  desenvolvedoresCount: Number;
  create_at: Date;
  updated_at: Date;
}

export interface OneNivelResponseDTO {
  id: string;
  nivel: string;
  desenvolvedores: DesenvolvedorResponseDTO[];
  create_at: Date;
  updated_at: Date;
}

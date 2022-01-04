export interface DesenvolvedorResponseDTO {
  id: string;
  nome: string;
  sexo: string;
  datanascimento: Date;
  idade: number;
  nivel: NivelDesenvolvedor;
  hobby: string;
  create_at: Date;
  updated_at: Date;
}

interface NivelDesenvolvedor {
  id: string;
  nivel: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateDesenvolvedorDTO {
  nivel_id: string;
  nome: string;
  sexo: string;
  datanascimento: Date;
  idade: number;
  hobby: string;
}

export interface UpdateDesenvolvedorDTO {
  nivel_id: string;
  nome: string;
  sexo: string;
  datanascimento: Date;
  idade: number;
  hobby: string;
}

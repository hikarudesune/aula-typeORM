import { Equipe } from './../../models/equipe.model';
import { EquipeVindaDeFora } from './equipe.d';

export const formatarEquipe = (dados: EquipeVindaDeFora): Equipe => {
    const equipeFormatada: Equipe = {
        nomeEquipe: dados.equipe.nome,
        empresa: dados.equipe.empresaId
    }
    return equipeFormatada
}
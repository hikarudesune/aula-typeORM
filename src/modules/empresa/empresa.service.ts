import { Empresa } from './../../models/empresa.model';
import { EmpresaVindaDeFora } from './empresa.d';

export const formatarEmpresa = (dados: EmpresaVindaDeFora): Empresa => {
    const empresaFormatada: Empresa = {
        nomeEmpresa: dados.empresa.nome,
        telefoneEmpresa: dados.empresa.telefone
    }
    return empresaFormatada
}


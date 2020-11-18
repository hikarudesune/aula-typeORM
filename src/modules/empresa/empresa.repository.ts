import { DeleteResult, getRepository, UpdateResult } from "typeorm"
import { Empresa } from "../../models/empresa.model"
import { EmpresaVindaDeFora } from "./empresa"
import { formatarEmpresa } from "./empresa.service"


export const criarEmpresaNoBD = async (dados: EmpresaVindaDeFora) =>{
    const repositorioEmpresa = getRepository(Empresa)
    const empresaFormatada = formatarEmpresa(dados)
    const empresaSalva = await repositorioEmpresa.save(empresaFormatada)
    return empresaSalva
}

export const buscarEmpresaNoBD = async (): Promise<Empresa[]> => {
const repositorioEmpresa = getRepository(Empresa)
const empresasBuscadas = await repositorioEmpresa.find()
return empresasBuscadas
}

export const buscarUmaEmpresaNoBD = async (id: number): Promise<Empresa> => {
    const repositorioEmpresa = getRepository(Empresa)
    const empresasBuscadas = await repositorioEmpresa.findOne({
        where: {
            idEmpresa: id
        }
    })

    if (!empresasBuscadas) throw new Error('Esse ID não existe no BD')
    return empresasBuscadas
}

export const alterarEmpresaNoBD = async (id: number, dados:EmpresaVindaDeFora) : Promise<UpdateResult> => {
    const repositorioEmpresa = getRepository(Empresa)
    const empresaFormatada = formatarEmpresa(dados)
    const empresaBuscada = await buscarUmaEmpresaNoBD(id)
    const empresaAlterada = await repositorioEmpresa.update(empresaBuscada, empresaFormatada)

    return empresaAlterada
}

export const deletarEmpresaNoBD = async (id:number): Promise<DeleteResult> => {
    const repositorioEmpresa = getRepository(Empresa)
    const empresaBuscada = await buscarUmaEmpresaNoBD(id)
    const empresaDeletada = await repositorioEmpresa.delete(empresaBuscada)
    return empresaDeletada
}
import { DeleteResult, getRepository, UpdateResult } from "typeorm"
import { Equipe } from "../../models/equipe.model"
import { EquipeVindaDeFora } from "./equipe"
import { formatarEquipe } from "./equipe.service"

export const criarEquipeNoBD = async (dados: EquipeVindaDeFora) =>{
    const repositorioEquipe = getRepository(Equipe)
    const equipeFormatada = formatarEquipe(dados)
    const equipeSalva = await repositorioEquipe.save(equipeFormatada)
    return equipeSalva
}

export const buscarEquipeNoBD = async (): Promise<Equipe[]> => {
const repositorioEquipe = getRepository(Equipe)
const equipesBuscadas = await repositorioEquipe.find()
return equipesBuscadas
}

export const buscarUmaEquipeNoBD = async (id: string): Promise<Equipe> => {
    const repositorioEquipe = getRepository(Equipe)
    const equipesBuscadas = await repositorioEquipe.findOne({
        where: {
            equipeId: id
        }
    })

    if (!equipesBuscadas) throw new Error('Esse ID não existe no BD')
    return equipesBuscadas
}

export const alterarEquipeNoBD = async (id: string, dados:EquipeVindaDeFora) : Promise<UpdateResult> => {
    const repositorioEquipe = getRepository(Equipe)
    const equipeFormatada = formatarEquipe(dados)
    const equipeBuscada = await buscarUmaEquipeNoBD(id)
    const equipeAlterada = await repositorioEquipe.update(equipeBuscada, equipeFormatada)

    return equipeAlterada
}

export const deletarEquipeNoBD = async (id: string): Promise<DeleteResult> => {
    const repositorioEquipe = getRepository(Equipe)
    const equipeBuscada = await buscarUmaEquipeNoBD(id)
    const equipeDeletada = await repositorioEquipe.delete(equipeBuscada)
    return equipeDeletada
}


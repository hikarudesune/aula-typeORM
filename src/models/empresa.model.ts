import { Equipe } from './equipe.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('empresa')

export class Empresa {
  @PrimaryGeneratedColumn()
  idEmpresa?: number

  @Column('varchar', { length: 150, unique: true })
  nomeEmpresa: string

  @Column('varchar', { length: 11 })
  telefoneEmpresa: string

  @OneToMany(() => Equipe, equipe => equipe.empresa)
  equipes?: Equipe[]

}


import { Assessor } from './assessor.model';
import { Empresa } from './empresa.model';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('equipe')
export class Equipe {
    @PrimaryGeneratedColumn('uuid')
    equipeId?: string

    @Column(
        {
            type: 'varchar',
            unique: true
        }
    )
    nomeEquipe: string

    @ManyToOne(()=> Empresa, empresa => empresa.equipes, {nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'empresaId'})
    empresa: Empresa | number

    @OneToMany(() => Assessor, assessor => assessor.equipe)
    assessores?: Assessor[]
}
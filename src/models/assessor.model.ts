import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Equipe } from './equipe.model'

@Entity('assessor')
export class Assessor {
    @PrimaryGeneratedColumn('uuid')
    assessorId: string

    @Column(
        {
            type: 'varchar',
            length: 200
        }
    )
    nomeAssessor: string

    @Column(
        {
            type: 'varchar',
            length: 11,
            unique: true
        }
    )
    cpfAssessor: string

    @Column(
        {
            type: 'varchar',
            length: 11
        }
    )
    telefoneAssessor: string
    @Column(
        {
            type: 'boolean'
        }
    )
    status: boolean

    @ManyToOne(()=> Equipe, equipe => equipe.assessores, {nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @JoinColumn({name: 'equipeId'})
    equipe: Equipe | string

}
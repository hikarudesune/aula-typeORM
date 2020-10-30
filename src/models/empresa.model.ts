import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('empresa')


export class Empresa{
    @PrimaryGeneratedColumn()
    empresaId: number;
    
    @Column('varchar', {length: 150, unique:true})
    nomeEmpresa: string;
}
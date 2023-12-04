// src/entities/Currency.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Account } from './Account';

@Entity()
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isoCode: string;

  @Column()
  countryOrigin: string;

  @Column()
  signCharacter: string;

  @OneToMany(() => Account, (account) => account.currency)
  accounts: Account[];
}

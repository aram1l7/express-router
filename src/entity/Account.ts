// src/entities/Account.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Bank } from './Bank';
import { Currency } from './Currency';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @ManyToOne(() => Bank, (bank) => bank.accounts)
  bank: Bank;

  @ManyToOne(() => Currency, (currency) => currency.accounts)
  currency: Currency;

  @Column()
  accountName: string;
}

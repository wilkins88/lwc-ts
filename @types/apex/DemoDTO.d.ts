/**
 * Sample typing for a DTO that an apex method may return
 */
import { Account } from 'types/account';

export interface DemoDTO {
    account: Account;
    guid: string
}
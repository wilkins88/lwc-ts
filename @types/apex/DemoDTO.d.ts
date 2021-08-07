/**
 * Sample typing for a DTO that an apex method may return
 */
import { Account } from 'types/Account';

export type DemoDTO = {
    account: Account;
    guid: string
}
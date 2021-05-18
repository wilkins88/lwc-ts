/**
 * Sample of declaring typings for a custom apex controller method
 */
declare module '@salesforce/apex/DemoController.getDemoDto' {
    import { DemoDTO } from 'types/DemoDTO';
    export default function getDemoDto(accountId: string): Promise<DemoDTO>;
}
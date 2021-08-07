import { LightningElement } from 'lwc';
import getDemoDto from '@salesforce/apex/DemoController.getDemoDto';
import { DemoDTO } from 'types/DemoDTO';

export default class DemoComponent extends LightningElement {

    demObj: DemoDTO = { account: {}, guid: '' };

    async connectedCallback() {
        this.demObj = await getDemoDto('12345678990'); // this will probably break in the controller because it is not a valid id, just here for demo
    }
        
}
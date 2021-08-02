export type LightningWebComponent = {

}

declare module 'lwc' {
    export function wire(...args: any[]): void;
    export const LightningElement: LightningWebComponent;
}

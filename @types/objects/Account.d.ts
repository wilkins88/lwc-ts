/**
 * Sample SObject typing that can be maintained
 * This would be extended as additional fields are queried
 * 
 * Ideally, queried fields are somewhat consolidated in an appropriate selector layer
 * and these interfaces can be closely aligned with selector fields
 */
export type Account = {
    Id: string;
    Name?: string;
}
public with sharing class DemoController {
    @AuraEnabled(cacheable=true)
    public static DemoDTO getDemoDto(Id accountId) {
        Account a = new Account(Id = accountId, Name = 'Demo Account');
        return new DemoDTO(a, '1234');
    }
}

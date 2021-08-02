public inherited sharing class DemoDTO {
    @AuraEnabled
    public Account account { get; set; }
    @AuraEnabled
    public String guid { get; set; }
    
    public DemoDTO(Account acct, String guid) {
        this.account = acct;
        this.guid = guid;
    }

    public DemoDTO() {}
}

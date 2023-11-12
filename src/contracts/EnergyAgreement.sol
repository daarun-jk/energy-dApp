pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;
contract EnergyAgreement{
    address payable admin;
    address payable consumer;
    address payable prosumer;
    uint public no_of_energydevices = 0;
    uint public no_of_agreement = 0;
    uint public no_of_consumers = 0;
    uint public no_of_terminationrequest = 0;
    uint public commisionpercentage = 5;

    constructor() public{
        admin = msg.sender;
    }
    
    struct EnergyDevice{
        uint energydeviceid;
        uint agreementid;
        string housename;
        string houseaddress;
        uint price;
        uint securityDeposit;
        uint timestamp;
        bool vacant;
        address payable prosumer;
        address payable currentProsumer;
        //uint reports;
        bool disableroom;
        uint energy_in_kwh;

    }
    
    mapping(uint => EnergyDevice) public Energydevice_by_No;
    
    struct EnergyAgreement{
        uint energydeviceid;
        uint agreementid;
        string Roomname;
        string RoomAddresss;
        uint price;
        uint securityDeposit;
        uint commisionpercentage;
        uint lockInPeriod;
        uint timestamp;
        address payable consumerAddress;
        address payable prosumerAddress;
        uint energy_in_kwh;

    }
    
   mapping(uint => EnergyAgreement) public EnergyAgreement_by_No;
    
    struct Consumer{
        uint consumerno;
        uint energydeviceid;
        uint agreementid;
        string Roomname;
        string RoomAddresss;
        uint price;
        uint timestamp;
        address payable consumerAddress;
        address payable prosumerAddress;
        uint energy_in_kwh;

    }
    
   mapping(uint => Consumer) public Consumer_by_No;
    
    struct RequestAgreementTermination{
        uint terminationno;
        uint energydeviceid;
        uint agreementid;
        uint timestamp;
        address prosumer;
        address consumer;
        bool terminated;
        bool rejected;
        bool completed;
    }

    mapping(uint => RequestAgreementTermination) public RequestAgreementTermination_By_No;
    
    struct Reporter{
        bool reported;
    }
  
    mapping(address => mapping(uint =>  Reporter)) public reporters;
  
    struct Terminationreq{
        bool requested;
    }
    
    mapping(uint => mapping(uint =>  Terminationreq)) public terminationreq;


    modifier onlyAdmin() {
        require(msg.sender == admin, "Only Admin can access this");
        _;
    }
    
    modifier onlyProsumer(uint _index) {
        require(msg.sender == Energydevice_by_No[_index].prosumer, "Only prosumer can access this");
        _;
    }
    
    modifier notProsumer(uint _index) {
        require(msg.sender != Energydevice_by_No[_index].prosumer, "Only consumer can access this");
        _;
    }
    
    modifier OnlyWhileVacant(uint _index){
        
        require(Energydevice_by_No[_index].vacant == true, "EnergyDevice is currently Occupied.");
        _;
    }
    
    modifier enoughPrice(uint _index) {
        require(msg.value >= uint(Energydevice_by_No[_index].price), "Not enough Ether in your wallet");
        _;
    }
    
    modifier enoughAgreementfee(uint _index) {
        require(msg.value >= uint(uint(Energydevice_by_No[_index].price) + uint(Energydevice_by_No[_index].securityDeposit)), "Not enough Ether in your wallet");
        _;
    }
    
    modifier sameConsumer(uint _index) {
        require(msg.sender == Energydevice_by_No[_index].currentProsumer, "No previous agreement found with you & prosumer");
        _;
    }
    
    modifier AgreementTimesLeft(uint _index) {
        uint _AgreementNo = Energydevice_by_No[_index].agreementid;
        uint time = EnergyAgreement_by_No[_AgreementNo].timestamp + EnergyAgreement_by_No[_AgreementNo].lockInPeriod;
        require(now < time, "Agreement already Ended");
        _;
    }
    
    modifier AgreementTimesUp(uint _index) {
        uint _AgreementNo = Energydevice_by_No[_index].agreementid;
        uint time = EnergyAgreement_by_No[_AgreementNo].timestamp + EnergyAgreement_by_No[_AgreementNo].lockInPeriod;
        require(now > time, "Times left for contract to end");
        _;
    }
    
    modifier ConsumerTimesUp(uint _index) {
        uint time = Energydevice_by_No[_index].timestamp + 30 days;
        require(now == time, "Time left to pay Consumer");
        _;
    }

    modifier notrequested(uint _index, uint _agreementid){
        require(terminationreq[_index][_agreementid].requested == false, "Already Requested");
        _;
    }
    
    modifier enabled(uint _index){
        require(Energydevice_by_No[_index].disableroom == false, "EnergyDevice Already Disabled");
        _;
    }
    
    function addEnergydevice(string memory _housename, string memory _houseaddress, uint _price, uint  _securitydeposit, uint _energy_in_kwh) public {
        require(msg.sender != address(0));
        no_of_energydevices ++;
        bool _vacancy = true;
        Energydevice_by_No[no_of_energydevices] = EnergyDevice(no_of_energydevices,0,_housename,_houseaddress, _price,_securitydeposit,0,_vacancy, msg.sender, address(0),false,_energy_in_kwh); 
        
    }
    
    function signAgreement(uint _index) public payable notProsumer(_index) enoughAgreementfee(_index) OnlyWhileVacant(_index) enabled( _index){
        require(msg.sender != address(0));
        address payable _prosumer = Energydevice_by_No[_index].prosumer;
        uint totalfee = Energydevice_by_No[_index].price + Energydevice_by_No[_index].securityDeposit;
        
        uint commision = (totalfee*commisionpercentage)/100;
        uint rest = totalfee - commision;
        admin.transfer(commision);
        _prosumer.transfer(rest);
        
        no_of_agreement++;

        Energydevice_by_No[_index].currentProsumer = msg.sender;
        Energydevice_by_No[_index].vacant = false;
        Energydevice_by_No[_index].timestamp = block.timestamp;
        Energydevice_by_No[_index].agreementid = no_of_agreement;
        EnergyAgreement_by_No[no_of_agreement]=EnergyAgreement(_index,no_of_agreement,Energydevice_by_No[_index].housename,Energydevice_by_No[_index].houseaddress,Energydevice_by_No[_index].price,Energydevice_by_No[_index].securityDeposit,commisionpercentage,365 days,block.timestamp,msg.sender,_prosumer,Energydevice_by_No[_index].energy_in_kwh);
        no_of_consumers++;
        Consumer_by_No[no_of_consumers] = Consumer(no_of_consumers,_index,no_of_agreement,Energydevice_by_No[_index].housename,Energydevice_by_No[_index].houseaddress,Energydevice_by_No[_index].price,now,msg.sender,_prosumer,Energydevice_by_No[_index].energy_in_kwh);
        
    }
    
    function payConsumerforenergy(uint _index) public payable sameConsumer(_index) ConsumerTimesUp(_index) enoughPrice(_index) enabled( _index){
        require(msg.sender != address(0));
        address payable _prosumer = Energydevice_by_No[_index].prosumer;
        uint prrice = Energydevice_by_No[_index].price;
        
        _prosumer.transfer(prrice);
        
        Energydevice_by_No[_index].currentProsumer = msg.sender;
        Energydevice_by_No[_index].vacant = false;
        no_of_consumers++;
        Consumer_by_No[no_of_consumers] = Consumer(no_of_consumers,_index,Energydevice_by_No[_index].agreementid,Energydevice_by_No[_index].housename,Energydevice_by_No[_index].houseaddress,prrice,now,msg.sender,Energydevice_by_No[_index].prosumer,Energydevice_by_No[_index].energy_in_kwh);
    }

    function agreementCompleted(uint _index) public payable onlyProsumer(_index) AgreementTimesUp(_index) enabled( _index){
        require(msg.sender != address(0));
        require(Energydevice_by_No[_index].vacant == false, "EnergyDevice is currently Occupied.");
        Energydevice_by_No[_index].vacant = true;
        address payable _Tenant = Energydevice_by_No[_index].currentProsumer;
        uint _securitydeposit = Energydevice_by_No[_index].securityDeposit;
        _Tenant.transfer(_securitydeposit);
    }
    
    function agreementTerminated(uint _index, uint _terminateno) public onlyAdmin() AgreementTimesLeft(_index) enabled( _index){
        require(msg.sender != address(0));
        require(RequestAgreementTermination_By_No[_terminateno].completed == false, "Request Already Completed");
        Energydevice_by_No[_index].vacant = true;
        RequestAgreementTermination_By_No[_terminateno].terminated = true;
        RequestAgreementTermination_By_No[_terminateno].completed = true;

    }

    function reject(uint _index, uint _agreementno, uint _terminateno) public onlyAdmin() {
        require(msg.sender != address(0));
        require(RequestAgreementTermination_By_No[_terminateno].completed == false, "Request Already Completed");
        terminationreq[_index][_agreementno].requested = false;
        RequestAgreementTermination_By_No[_terminateno].rejected = true;
        RequestAgreementTermination_By_No[_terminateno].completed = true;
    }
    
    function requestTermination(uint _index,uint _agreementid) public onlyProsumer(_index) AgreementTimesLeft(_index) notrequested(_index,_agreementid) enabled( _index){
        require(msg.sender != address(0));
        terminationreq[_index][_agreementid].requested = true;
        no_of_terminationrequest++;
        RequestAgreementTermination_By_No[no_of_terminationrequest] = RequestAgreementTermination(no_of_terminationrequest,_index,_agreementid,now,Energydevice_by_No[_index].prosumer,Energydevice_by_No[_index].currentProsumer,false,false,false);
        
    }
     
    function changeCommision(uint _commision) public onlyAdmin() {
        require(msg.sender != address(0));
        require(_commision >= 0, "can not be negative");
        require(_commision < 100, "can not be equal or more than 100");
        commisionpercentage = _commision;
    }
    
    function disableEnergydevice(uint _index) public onlyAdmin() {
        require(msg.sender != address(0));
        if(Energydevice_by_No[_index].disableroom == false){
            Energydevice_by_No[_index].disableroom = true;
        }else{
            Energydevice_by_No[_index].disableroom = false;
        }
    }
    
    function Admin() public returns (address){
        return(admin);
    }
    
    function totalfee(uint _index) public returns (uint){
        uint consumerbill = Energydevice_by_No[_index].price;
        uint securityDeposit = Energydevice_by_No[_index].securityDeposit;
        uint total =  consumerbill + securityDeposit;
        return(total);
    }
    
    function consumerbill(uint _index) public returns (uint){
        uint consumerbill = Energydevice_by_No[_index].price;
        return(consumerbill);
    }

    function securitydeposit(uint _index) public returns (uint){
        uint consumerbill = Energydevice_by_No[_index].securityDeposit;
        return(consumerbill);
    }

    function prosumerAddress(uint _index) public returns (address){
        address prosumerAddress = Energydevice_by_No[_index].prosumer;
        return(prosumerAddress);
    }

}
    
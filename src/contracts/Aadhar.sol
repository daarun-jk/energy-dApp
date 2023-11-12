pragma solidity ^0.5.16;

contract Aadhar {
    
  address public admin;
  address public con_sumers;
  
 
  uint256 public ProofIDCount = 0;
  
  constructor() public {
      admin = msg.sender;
      con_sumers = msg.sender;
  }
    
  struct ProofID {
    uint256 note_Id;
    string proofid_Hash;
    uint256 proofid_Size;
    string name;
    string house_address;
    string phone_number;
    string email_id;
    uint256 uploadTime;
    address uploader;
    uint reports;
  }
    
  mapping(uint256 => ProofID) public proofids;
    
  struct Reporter{
        bool reported;
    }
  
  mapping(address => mapping(uint =>  Reporter)) public reporters;


 event ProofIDUploaded(uint256 note_Id,string proofid_Hash,uint256 proofid_Size,string name,string house_address,string phone_number,string email_id,uint256 uploadTime,address uploader);
    
  

  modifier onlyadmin(){
        require(msg.sender==admin,"Only Admin can access this");
        _;
    }
    
  modifier onlylibrarian(){
        require(msg.sender==con_sumers,"Only con_sumers can access this");
        _;
    }
    
  modifier onlyUploaderorLibrarian(uint256 _index){
        require(msg.sender==proofids[_index].uploader || msg.sender==con_sumers,"Only ProofID Uploader can access this");
        _;
    }
    
  modifier notuploader(uint256 _index){
        require(msg.sender!=proofids[_index].uploader,"Uploader can't report proofids");
        _;
    }

  function changelibrarian(address _librarian) public onlyadmin() {
        require(msg.sender != address(0));
        con_sumers = _librarian;
    }
    
  
  function uploadProofID(string memory _proofid_Hash,uint256 _proofid_Size,string memory _name,string memory _houseaddress,string memory _phonenumber,string memory _email_id) public {
    
    require(bytes(_proofid_Hash).length > 0);
    require(bytes(_houseaddress).length > 0);
    require(bytes(_phonenumber).length > 0);
    require(bytes(_email_id).length > 0);
    require(_proofid_Size > 0);
    require(msg.sender != address(0));
    

    ProofIDCount++;

    proofids[ProofIDCount] = ProofID(ProofIDCount,_proofid_Hash,_proofid_Size,_name,_houseaddress,_phonenumber,_email_id,now,msg.sender,0);
    emit ProofIDUploaded(ProofIDCount,_proofid_Hash,_proofid_Size,_name,_houseaddress,_phonenumber,_email_id,now,msg.sender);
    }
    
  function deleteproofid(uint index) public onlyUploaderorLibrarian(index){
        require(msg.sender != address(0));
        require(ProofIDCount > 0 && index <= ProofIDCount, "Unable to Delete!");
        if(index != ProofIDCount){
        proofids[index]= ProofID(index,proofids[ProofIDCount].proofid_Hash,proofids[ProofIDCount].proofid_Size,proofids[ProofIDCount].name,proofids[ProofIDCount].house_address,proofids[ProofIDCount].phone_number,proofids[ProofIDCount].email_id,proofids[ProofIDCount].uploadTime,proofids[ProofIDCount].uploader,0);
        proofids[ProofIDCount]= ProofID(0,"",0,"","","","",0,address(0),0);
        ProofIDCount --;}
        else
        {
            proofids[index]= ProofID(0,"",0,"","","","",0,address(0),0);
            ProofIDCount--;
        }
    }
  
}

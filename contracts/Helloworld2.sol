pragma solidity 0.8.4;

contract HelloWorldPermanent {

    string public message;


    constructor(string memory _message){
        //"NON CHANGABLE MESSAGE";
        message = _message;
        
    }

}
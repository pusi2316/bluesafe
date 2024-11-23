pragma solidity ^0.8.17;

abstract contract testContract {
    //this is a test .sol file
     address private _crossmintAddress;

    constructor(address crossmintAddress) {
        setCrossmintAddress(crossmintAddress);
    }

    modifier onlyCrossmint() {
        _checkCrossmint();
        _;
    }

    function GetCrossmintAddress() public view virtual returns (address) {
        return _crossmintAddress;
    }

    function setCrossmintAddress(address crossmintAddress)
        public
        virtual
        onlyOwner
    {
        _crossmintAddress = crossmintAddress;
    }

    function _checkCrossmint() internal view virtual {
        require(
            _msgSender() == _crossmintAddress,
            "The caller can be Crossmint only."
        );
    }
}

contract contractNew {

}

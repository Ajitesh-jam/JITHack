// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Market {
    struct SkinOwner {
        string name;
        uint256 price;
        address payable walletAddress;
    }

    mapping(string => uint256[]) public playerSkins; // Will store the skinIDs (integer array) owned by a user with username
    mapping(uint256 => SkinOwner) public OwnerOfSkin; // Maps skinID to SkinOwner (struct that contains all info of creator)
    uint256[] public allSkins;

    function editSkin(
        uint256 _skinId,
        uint256 _price,
        address payable walletAddress,
        string memory _username
    ) public {
        require(
            msg.sender == OwnerOfSkin[_skinId].walletAddress,
            "Only owner of skin can modify its details"
        );

        // Update the SkinOwner
        OwnerOfSkin[_skinId] = SkinOwner({
            name: _username,
            walletAddress: walletAddress,
            price: _price
        });
    }

    function getAllSkins() external view returns (uint256[] memory) {
        return allSkins;
    }

    function getSkins(
        string memory username
    ) public view returns (uint256[] memory) {
        // Returns the skinIDs array owned by the given username
        return playerSkins[username];
    }

    function sellSkin(uint256 _price, string memory _username) public {
        // Generate new skin ID
        uint256 _skinId = allSkins.length;

        // Create a new SkinOwner
        SkinOwner memory newOwner = SkinOwner({
            name: _username,
            walletAddress: payable(msg.sender),
            price: _price
        });

        // Add skin to OwnerOfSkin mapping
        OwnerOfSkin[_skinId] = newOwner;

        // Add skin ID to allSkins array
        allSkins.push(_skinId);

        // Add skin ID to the player's skins
        playerSkins[_username].push(_skinId);
    }

    function buySkin(uint256 _skinId, string memory _username) public payable {
        // Get details of the skinId from OwnerOfSkin
        SkinOwner memory skin = OwnerOfSkin[_skinId];

        // Check if the buyer has sent enough Ether
        require(msg.value == skin.price, "Incorrect Ether amount sent.");

        // Transfer the Ether to the current owner
        skin.walletAddress.transfer(skin.price);

        // Add skinID to playerSkins of the buyer
        playerSkins[_username].push(_skinId);

        // Update the OwnerOfSkin to the new owner
        OwnerOfSkin[_skinId] = SkinOwner({
            name: _username,
            walletAddress: payable(msg.sender),
            price: skin.price
        });
    }
}

//contarct address: 0xAc2B7C887C99432eFA14236C7834675832F686a4

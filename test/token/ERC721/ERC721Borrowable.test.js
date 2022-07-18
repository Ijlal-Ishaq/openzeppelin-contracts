const {
    shouldBehaveLikeERC721,
    shouldBehaveLikeERC721Metadata,
} = require('./ERC721.behavior');
  
const ERC721Mock = artifacts.require('ERC721BorrowableMock');

contract('ERC721Borrowable', function (accounts) {
    const name = 'Non Fungible Borrowable Token';
    const symbol = 'B-NFT';

    beforeEach(async function () {
        this.token = await ERC721Mock.new(name,symbol);
    });

    shouldBehaveLikeERC721('ERC721', ...accounts);
    shouldBehaveLikeERC721Metadata('ERC721', name, symbol, ...accounts);
});
  
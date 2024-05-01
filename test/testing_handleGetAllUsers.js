const { expect } = require('chai');
const sinon = require('sinon');
const { handleGetAllUsers } = require('../controller/user');
const User = require('../models/user'); // Assuming this is your User model

describe('handleGetAllUsers', () => {
  it('should return all users', async () => {
    // Mock the User model's find method
    const mockUsers = [{ name: 'User 1' }, { name: 'User 2' }];
    sinon.stub(User, 'find').resolves(mockUsers);

    // Mock the response object
    const res = {
      json: sinon.stub()
    };

    await handleGetAllUsers(null, res);

    expect(res.json.calledOnce).to.be.true;
    expect(res.json.calledWith(mockUsers)).to.be.true;

    User.find.restore();
  });
});

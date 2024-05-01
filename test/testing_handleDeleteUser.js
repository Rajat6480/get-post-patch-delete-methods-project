const { expect } = require('chai');
const sinon = require('sinon');
const { handleDeleteUser } = require('../controller/user');
const User = require('../models/user');

describe('handleDeleteUser', () => {
  it('should delete a user', async () => {
    
    const req = {
      params: { id: 'user_id' }
    };

    
    const res = {
      json: sinon.stub()
    };

    
    sinon.stub(User, 'findByIdAndDelete').resolves();

    
    await handleDeleteUser(req, res);

    
    expect(res.json.calledWith({ id: 'user_id', msg: 'DELETED SUCCESSFULLY....' })).to.be.true;

    
    User.findByIdAndDelete.restore();
  });
});

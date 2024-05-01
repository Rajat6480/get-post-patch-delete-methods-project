const { expect } = require('chai');
const sinon = require('sinon');
const { handleUpdateUser } = require('../controller/user');
const User = require('../models/user');

describe('handleUpdateUser', () => {
  it('should update a user', async () => {
    
    const req = {
      params: { id: 'user_id' },
      body: {
        first_name: 'Updated First Name',
        last_name: 'Updated Last Name',
        email: 'updated@example.com',
        gender: 'updated_gender',
        job_title: 'Updated Job Title'
      }
    };

    
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    
    sinon.stub(User, 'findByIdAndUpdate').resolves();

    
    await handleUpdateUser(req, res);

    
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ msg: 'successful update...' })).to.be.true;

    
    User.findByIdAndUpdate.restore();
  });
});

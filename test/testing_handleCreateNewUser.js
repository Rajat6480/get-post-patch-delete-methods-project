const { expect } = require('chai');
const sinon = require('sinon');
const { handleCreateNewUser } = require('../controller/user');
const User = require('../models/user'); 

describe('handleCreateNewUser', () => {
  it('should create a new user', async () => {
    
    const req = {
      body: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@example.com',
        gender: 'male',
        job_title: 'Software Engineer'
      }
    };

    
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub()
    };

    
    const newUser = {
      _id: 'user_id',
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      jobTitle: req.body.job_title
    };
    sinon.stub(User, 'create').resolves(newUser);

    
    await handleCreateNewUser(req, res);

    
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith({ msg: 'Success...' })).to.be.true;

    
    User.create.restore();
  });
});

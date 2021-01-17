const handlers = require('./index');

describe('Endpoints', () => {
  describe('users', () => {
    describe('get', () => {
      it('test', async () => {
        // mock para axios
        const axios = {
          get: jest.fn().mockResolvedValue({ data: 1}),
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        await handlers({ axios }).get({}, res)
        expect(res.status.mock.calls).toEqual([
          [200]
        ]);
        expect(res.send.mock.calls).toEqual([
          [1]
        ]);
      });
     
    })
  })
})
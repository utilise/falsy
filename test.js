var expect = require('chai').expect
  , falsy = require('./')

describe('falsy', function() {
  it('should return false, despite args', function() {
    expect(falsy(1,2,3)).to.be.false
  })

  it('should return false, despite context', function() {
    expect(falsy.call('foo')).to.be.false
  })
})
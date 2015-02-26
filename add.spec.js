var expect = require('expect')
var add = require('./add')

describe('the add module', () => {
  it('should add 2 and 5', () => {
    expect(add(2,5)).toEqual(7)
  })
  it('should add 1 and 9', () => {
    expect(add(1,9)).toEqual(10)
  })
})
import rpn from './index'

it('testing the function itself with pre-compited values', () => {
  expect(rpn('2 3 +')).toEqual(5)
  expect(rpn('3 3 +')).toEqual(6)
  expect(rpn('3.5 4.5 +')).toEqual(8)
  expect(rpn('3 4 - 5 +')).toEqual(4)
  expect(rpn('4 5 + 6 *')).toEqual(54)
  expect(rpn('6 4 5 + *')).toEqual(54)
  expect(rpn('2 2 3 3 / * /')).toEqual(1)
  expect(rpn('5 1 2 + 4 * + 3 -')).toEqual(14)
})


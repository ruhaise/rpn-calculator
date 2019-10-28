export const rpn = (rpn: string): number => {
  const operators: any = {
    '*': (a: number, b: number): number => a * b,
    '+': (a: number, b: number): number => a + b,
    '-': (a: number, b: number): number => a - b,
    '/': (a: number, b: number): number => a / b,
    '**': (a: number, b: number): number => a ** b,
  }
  const [stack, solve] = [
    [] as any,
    rpn
      .replace(/\^/g, '**')
      .split(/\s+/g)
      .filter((el) => !/\s+/.test(el) && el !== ''),
  ]
  solve.forEach((symbol: string) => {
    if (!isNaN(parseFloat(symbol)) && isFinite(Number(symbol))) {
      stack.push(symbol)
    } else if (Object.keys(operators).includes(symbol)) {
      const [a, b] = [stack.pop(), stack.pop()]
      stack.push(operators[symbol](parseFloat(b), parseFloat(a)))
    } else {
      throw `${symbol} is not a recognized symbol`
    }
  })
  if (stack.length === 1) return stack.pop()
  else throw `${rpn} is not a proper RPN. Please check it and try again`
}

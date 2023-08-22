import CalcInterestOfInvestment from "../src/app/CalcIntestOfInvestment"

test('should calculate investment', async () => {
  const calcInterestOfInvestment = new CalcInterestOfInvestment();
  const investment = await calcInterestOfInvestment.execute({initialCapital: 3500, interestRate: 1.7, investmentTime: 12});
  expect(investment).toEqual({
    interest: 784.69,
    finalBalance: 4284.69,
  })
})
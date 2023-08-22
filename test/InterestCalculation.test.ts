import InterestCalculation from "../src/app/InterestCalculation";


test('Should calculate the interest of an investiment', () => {  
  const interest = InterestCalculation.calculate({ 
    initialCapital: 18000, 
    interestRate: 2.5,
    investmentTime: 4
  })
  expect(interest).toBe(19868.63);
})

import InterestCalculation from "../src/app/InterestCalculation";

test('Should calculate the final balance of an investiment', () => {  
  const finalBalance = InterestCalculation.calculateBalance({ 
    initialCapital: 18000, 
    interestRate: 2.5,
    investmentTime: 4
  })
  expect(finalBalance).toBe(19868.63);
})

test('Should calculate the interest of an investiment', () => {  
  const interest = InterestCalculation.calculateInterest(19868.63, 18000);
  expect(interest).toBe(1868.63);
})


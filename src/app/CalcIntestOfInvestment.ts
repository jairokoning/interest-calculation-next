import InterestCalculation from "./InterestCalculation";

export default class CalcInterestOfInvestment {
  async execute({ initialCapital, interestRate, investmentTime }: Input) {
    const finalBalance = InterestCalculation.calculateBalance({initialCapital, interestRate, investmentTime})
    const interest = InterestCalculation.calculateInterest(finalBalance, initialCapital);
    return { interest, finalBalance };
  }
}

type Input = {
  initialCapital: number;
  interestRate: number;
  investmentTime: number;
}
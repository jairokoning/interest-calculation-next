export default class InterestCalculation {
  static calculateBalance({initialCapital, interestRate, investmentTime}: InterestCalc): number {
    let finalValueOfInvestiment = initialCapital;  
    for (let time = 1; time <= investmentTime; time++) {
      finalValueOfInvestiment += finalValueOfInvestiment * (interestRate / 100);
    }
    return Number(finalValueOfInvestiment.toFixed(2));
  }

  static calculateInterest(finalBalance: number, initialCapital: number) {
    return Number((finalBalance - initialCapital).toFixed(2));
  }
}

type InterestCalc = {
  initialCapital: number;
  interestRate: number;
  investmentTime: number;
}
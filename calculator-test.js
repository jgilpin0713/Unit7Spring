it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 15000,
    years: 7,
    rate: 12.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('272.06');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 2000000,
    years: 5,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('38479.88');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 3,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('87.54');
});



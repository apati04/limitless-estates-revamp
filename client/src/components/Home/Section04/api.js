import React from 'react';
const data = [
  {
    title: 'Appreciation',
    body:
      'Appreciation is an increase in the value of an asset over time. The increase can occur for a number of reasons, including increased demand or weakening supply, or as a result of changes in inflation or interest rates. This is the opposite of depreciation, which is a decrease over time.'
  },
  { 
    title: 'Cash Flow', 
    body:
      "Cash flow refers to the amount of income that is left after taking the rental income and subtracting all expenses including debt service.  What is left is called the cash flow. It can be expressed as a positive or negative number."
  },
  { 
    title: 'Tax Benefits', 
    body: [
      <label key="0label">Tax Deductions for Landlords include: </label>,
      <ul key="1ul"><li>Interest</li>,
      <li key="2li">Depreciation for Rental Real Property</li>, 
      <li key="3li">Repairs</li>,
      <li key="4li">Personal Property</li>, 
      <li key="5li">Pass-Through Tax Deduction</li>, 
      <li key="6li">Travel</li>, 
      <li key="7li">Home Office</li>, 
      <li key="8li">Insurance</li></ul>
    ] 
  },
  { 
    title: 'Leveraging Debt', 
    body:
      "Leverage is the use of various financial instruments or borrowed capital to purchase and/or increase the potential return of investment—the term is used on both Wall Street and in the Main Street real estate market." 
  }, 
  { title: 'Business Backed by a Hard Asset', 
  body: 
[<span key="b0"><strong>Hard Assets in Real Estate: </strong>The value of real estate. Commercial property is a unique investment class when compared to other hard assets in that not only does it typically preserve its value during periods of inflation, but leased commercial property can also be an income producing asset, paying dividends back to investors.</span>] },

  { title: 'Housing is a necessity', body: [
<span key="house-0">Houses, fundamentally, are just aggregations of labor and materials — the cost approach to valuation. As personal income for most in the labor force increases at the rate of consumer inflation plus a value for any skill appreciation contributing to their employer’s benefit, over time a smaller percentage of that inflating income is spent carrying a home.  </span>,
<span key="house-2"> Link to full article: <a href="https://journal.firsttuesday.us/is-housing-a-luxury-or-necessity/6770/" target="_blank" rel="noopener noreferrer">journal.firsttuesday.us/is-housing-a-luxury-or-necessity</a></span> 
  ]

},
{ title: 'Tenants Pay Down the Debt', body: ' '},
];

export default data;

import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function RisksOne(props) {
  return (
    <div>
      <div>
        <strong>Overview</strong>
        <Typography>
          Investing in real estate along with any type of investing involves
          significant risk, including the risk that you could lose some or all
          of your money. This section describes some of the most significant
          risk factors affecting the investment and its Investors. These factors
          are not intended to deter you from investing in real estate, rather
          educate you on the many factors at play when doing so.
        </Typography>
      </div>
      <div>
        <strong>Speculative Nature</strong>
        <Typography>
          Time has shown that the real estate market goes down without warning,
          sometimes resulting in significant losses. Some of the risks of
          investing in real estate include changing laws, including
          environmental laws; floods, fires, and other Acts of God, some of
          which can be uninsurable; changes in national or local economic
          conditions; changes in government policies, including changes in
          interest rates established by the Federal Reserve; and international
          crises. You should invest in real estate in general, only if you can
          afford to lose your investment and are willing to live with the ups
          and downs of the real estate industry.
        </Typography>
      </div>
      <div>
        <strong>Illiquidity of Real Estate</strong>
        <Typography>
          Real estate is generally illiquid, meaning that it is not typically
          capable of being readily sold for cash at fair market value. Thus, the
          investment might not be able to sell properties as quickly or on the
          terms that it would like. We might be required to expend significant
          amounts of money to correct defects or make improvements before a
          property can be sold. Moreover, the overall economic conditions that
          might cause the Fund to want to sell properties are generally the same
          as those in which it would be most difficult to sell.
        </Typography>
      </div>
      <div>
        <strong>No Guarantee of Distributions</strong>
        <Typography>
          The ability to make the distributions you expect, and ultimately to
          give you your money back, depends on a number of factors, including
          some beyond its control.
        </Typography>
      </div>
      <div>
        <strong>
          Inability to Participate in the Management of the investment
        </strong>
        <Typography>
          As an Investor, you will not have a right to vote or otherwise
          participate in managing the investment, except on very limited
          matters. Instead, the Manager will make all decisions, including
          investment decisions. Investors will have the right to remove the
          Manager only in very limited circumstances.
        </Typography>
      </div>
      <div>
        <strong>Property Values Could Decrease</strong>
        <Typography>
          Factors that could cause the value of our property to decline include,
          but are not limited to: Changes in interest rates; Competition from
          existing properties and new construction; Changes in national or local
          economic conditions; Changes in zoning; Environmental contamination or
          liabilities; Changes in local market conditions; Fires, floods, and
          other casualties; Uninsured losses; Undisclosed defects in property.
        </Typography>
      </div>
      <div>
        <strong>Ability to Attract and/or Retain Tenants</strong>
        <Typography>
          Our success depends on our ability to attract and retain tenants in
          our properties. The risks we face include the following:
        </Typography>
        <ul>
          <li key="asd1">
            Competition from other landlords could keep us from raising rents,
            or require us to provide financial or other inducements or
            concessions to attract tenants (g., rent concessions or costs
            incurred for tenant improvements).
          </li>
          <li key="asd2">
            Changes in economic conditions generally could reduce demand for our
            properties.
          </li>
          <li key="asd3">Existing tenants might not renew their leases.</li>,
          <li key="asd4">
            Portions of buildings could remain vacant for extended periods.
          </li>
          <li key="asd5">
            We are subject to the risk that our tenants may default on their
            obligations, or file for bankruptcy protection.
          </li>
        </ul>
      </div>
      <div>
        <strong>Operating Expenses</strong>
        <Typography>
          The costs of operating real estate – including taxes, insurance,
          utilities, and maintenance – tend to move up over time. We have
          limited control over some of our operating costs, and if our costs
          increase it may reduce the amount available for distribution to
          investors.
        </Typography>
      </div>
      <div>
        <strong>Reliance on Third Parties</strong>
        <Typography>
          If a third party on-site property management and construction performs
          poorly or becomes unable to fulfill its obligations, the business
          could be severely disrupted and our financial condition could be
          adversely affected. Disputes between us and our third party service
          providers could disrupt our business and may result in litigation or
          other forms of legal proceedings.
        </Typography>
        <Link to={{ pathname: "/investing-risks", search: "?page=2" }}>
          Page 2
        </Link>
      </div>
    </div>
  );
}
export default RisksOne;

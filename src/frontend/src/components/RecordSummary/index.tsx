import React from 'react';
import CasesSummary from './CasesSummary'
import ChargesList from './ChargesList'
import CountyBalances from './CountyBalances'
import { RecordSummaryType, CountyBalanceType } from '../SearchResults/types';

interface Props {
  summary: RecordSummaryType;
}

export default class RecordSummary extends React.Component<Props> {
  render() {
    const {
      total_charges,
      cases_sorted,
      eligible_charges,
      county_balances,
      total_balance_due,
      total_cases
    } = this.props.summary;

    return (
      <div className="bg-white pa3">
        <h2 className="mb3 f5 fw7">Search Summary</h2>
        <div className="flex-ns">
          <CasesSummary casesSorted={cases_sorted} totalCases={total_cases}/>
          <ChargesList eligibleCharges={eligible_charges} totalCharges={total_charges}/>
          <CountyBalances totalBalance = {total_balance_due} balances={county_balances}/>
        </div>
      </div>
    );
  }
}


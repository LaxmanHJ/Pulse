import { Dropdown } from 'semantic-ui-react';
import React from 'react';

const coinOptions = [
  {
    key: 'Bitcoin',
    text: 'Bitcoin',
    value: 'BTC',
  },
  {
    key: 'Ethereum',
    text: 'Ethereum',
    value: 'ETH',
  },
  {
    key: 'SHIB',
    text: 'SHIB',
    value: 'SHIB',
  },
  {
    key: 'Tether',
    text: 'Tether',
    value: 'USDT',
  }];

 
const DropdownSelection = () => (
    
  <Dropdown
    placeholder='Select Coin'
    fluid
    selection
    options={coinOptions}
/>
)

export default DropdownSelection

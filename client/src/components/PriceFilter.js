import React from 'react'
import { Form, Checkbox, Divider } from 'semantic-ui-react'
import { PriceFilterOptions } from '../reducers/priceFilter'

const priceSelectionLabel = {
  '0_2500': 'Under $25',
  '2500_5000': '$25 - $50',
  '5000_7500': '$50 - $75',
  '7500_10000': '$75 - $100'
}

const PriceFilter = ({priceFilter, handleChange}) => {
    return (
      <>
        <Divider section />
      <Form>
        <Form.Field>
          <b>Price</b>
        </Form.Field>
        <hr className='thick' />
       { Object.keys(PriceFilterOptions).map((k,i) => {
        return (
          <Form.Field
           key = {i}
          >
            <Checkbox
              label= {priceSelectionLabel[k]}
              name= {k}
              value= {PriceFilterOptions[k]}
              checked={priceFilter.includes(PriceFilterOptions[k])}
              onChange={handleChange}
            />
          </Form.Field>
        )
       })}
      </Form>
      </>
    )
}

export default PriceFilter


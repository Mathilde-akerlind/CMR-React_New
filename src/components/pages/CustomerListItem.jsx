import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'

export default function CustomerListItem({ customerData }) {
  return (
    <div>
      <CardItem
        src="images/img-9.jpg"
        text={customerData.name}
        path={`/customers/${customerData.id}`}
      />

    </div>
  )
}

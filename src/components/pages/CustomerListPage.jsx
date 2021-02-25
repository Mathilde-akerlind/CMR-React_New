import React, { useState, useEffect } from 'react'
import CustomerListItem from './CustomerListItem'
import '../../App.css'
import './Cards.css'


export default function CustomerListPage() {

  const [customerList, setCustomerList] = useState([])

  useEffect(() => {
    getCustomerList()
  }, [])

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCustomerList(data.results))
  }

  return (
    <>
      <div className="cards">
        <h1> Customers </h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {customerList && customerList.map((item, index) => {
                return <CustomerListItem
                  key={item.id} customerData={item} />
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

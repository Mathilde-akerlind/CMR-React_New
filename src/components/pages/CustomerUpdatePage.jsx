import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css'


export default function CustomerUpdatePage(props) {

  const customerId = props.match.params.id

  const [formData, setFormData] = useState({})
  const history = useHistory()

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFormData(data));
  }

  useEffect(() => {
    getCustomerItem()
  }, [])


  function handleOnChange(e) {
    setFormData(
      {
        ...formData, [e.target.name]: e.target.value
      }
    )
  }


  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input type={type || "text"} name={name}
          value={formData[name] || ""}
          onChange={handleOnChange}
        />
      </div>
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => history.push(`/customers/${customerId}`))
  }

  return (
    <div className="customerFix">

      <form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name ")}
        {renderInput("email", "Customer Email ", "email")}
        {renderInput("organisationNr", "Organisation Number ")}
        {renderInput("paymentTerm", "Payment Term ", "number")}
        {renderInput("phoneNumber", "Phone Number ", "number")}
        {renderInput("reference", "Reference ")}
        {renderInput("vatNr", "Vat Number ")}
        {renderInput("website", "Website ", "url")}
        <button type="submit">Update Customer</button>
      </form>
    </div>
  )
}

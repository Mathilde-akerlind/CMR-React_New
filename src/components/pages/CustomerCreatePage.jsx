import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory()


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
          onChange={handleOnChange}
        />
      </div>
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        history.push('/customers')
      })
  }

  return (
    <div className="customerFix">

      <form onSubmit={handleOnSubmit}>
        <h1>Create Customer</h1>
        {renderInput("name", "Customer Name ")}
        {renderInput("email", "Customer Email ", "email")}
        {renderInput("organistionNr", "Organisation Number ")}
        {renderInput("paymentTerm", "Payment Term ", "number")}
        {renderInput("phoneNumber", "Phone Number ", "number")}
        {renderInput("reference", "Reference ")}
        {renderInput("vatNr", "Vat Number ")}
        {renderInput("website", "Website ", "url")}
        <button type="submit">Create Customer</button>
      </form>

    </div>
  );
}

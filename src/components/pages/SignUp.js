import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css'

function SignUp() {

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: "Mathilde.Akerlind@yh.nackademin.se",
    password: "javascriptoramverk"
  })

  function handleOnChange(e) {
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "https://frebi.willandskill.eu/api-token-auth/";
    const payload = {
      email: formData.email,
      password: formData.password,
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("WEBB20", data.token)
        history.push('/customers')
      })
  }

  return (
    <div className="sign-up">

      <div>
        <form onSubmit={handleOnSubmit}>
          <label>Email: </label>
          <br />
          <input name="email" value={formData.email} onChange={handleOnChange} />
          <br />
          <label>Password: </label>
          <br />
          <input name="password" value={formData.password} onChange={handleOnChange} />
          <br />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function AboutPage() {

  const NewStyle = styled.h1`
  color:rgb(223, 154, 174);
  font-size: 40px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  font-family: "Times New Roman", Times, serif;
  `

  const OtherStyle = styled(NewStyle)`
  font-size: 30px;
  color: rgb(231, 189, 201);
  `

  const [aboutInfo, setAboutInfo] = useState({})

  useEffect(() => {
    getAboutInfo()
  }, [])

  function getAboutInfo() {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAboutInfo(data))
  }

  return (
    <div className="aboutPage">
      <div>
        <NewStyle>About me</NewStyle>
        <OtherStyle>
          Name: {aboutInfo.firstName} {aboutInfo.lastName}
          <br />
      Email: {aboutInfo.email}
        </OtherStyle>
      </div>
    </div>
  )
}



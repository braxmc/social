import React from 'react'
import styled from 'styled-components'

export const HomeWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ebebeb;

  h1 {
    font-family: 'Geo', sans-serif;
    font-size: 80px;
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 25px;
  }
`

export const HomeContent = styled.div`

`

export const ButtonWrap = styled.div`
  display: flex;
`

export const Button = styled.button`
    font-size: 20px;
    padding: 15px;
    border-radius: 8px;
    width: 120px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    color: #EBEBEB;
    background: #000;
    border: 1px solid #000;
    

    &:hover {
      background: rgba(0,0,0,0.6);
    }
`


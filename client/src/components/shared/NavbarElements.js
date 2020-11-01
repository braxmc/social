import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrap = styled.div`
  height: 50px;
  background: #000;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 35px;
    padding-left: 20px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
`

export const NavLink = styled(Link)`
  padding-right: 40px;
  padding-bottom: 1px;
  color: #EBEBEB;
  font-size: 18px;
` 


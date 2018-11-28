import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Context from './Context'
import styled from 'styled-components'


let Container = styled.div`
    display: flex;
    padding: 0px 10%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 25px rgba(0,0,0,0.16);
    height: 80px;
`

let Logo = styled.img`
    object-fit: cover;
    max-width: 165px;
    max-height: 165px;
`

let Btn = styled.button`
    width: 150px;
    height: 35px;
    background-color: #013852;
    border-radius: 50px;
    border: none;
    color: white;
    outline: none;
`

let SearchInput = styled.input`
    width: 145px;
    height: 34px;
    border-radius: 50px;
    border: 1px solid #013852;
    margin-right: 5px;
    padding-left: 5px;
    outline: none;
`



class Header extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (ctx) => {
                        return (
                            <Container>
                                <Logo width="150px;" src={require('./assets/The-Clinic-Logo.png')} />
                                <div>
                                    <SearchInput placeholder="search a patient" />
                                    <Btn >ADD Patient</Btn>
                                </div>
                            </Container>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}


export default Header
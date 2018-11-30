import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Context from './Context'
import styled from 'styled-components'


let Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 80%;
    background-color: #fff;
    min-height: 150px;
    padding: 0 10%;
    border-radius: 10px;
    justify-content: space-between;
`

let PatientItem = styled.div`
    background-color: #fff;
    border: 1px solid #013852;
    min-height: 150px;
    height: 180px;
    width: 220px;
    margin: 30px 0 ;
    border-radius: 8px;
    padding: 8px ;
`

let PatientImg = styled.img`
    width: 65px;
    height: 65px;
    object-fit: cover;
    margin: 10px;
    margin-left: 5px;
    
`


let PatientInfo = styled.div`
    Display:flex;
`

let PatientName = styled.p`
    font-size: 1.2rem;
    margin-top: 10%;
`

let PatientAge = styled.p`
    font-size: 1rem;
`

let PatientDrugs = styled.p`

`




class Main extends Component {
    render() {
        return (
            <Context.Consumer>
                {
                    (ctx) => {
                        return (
                            <Container>
                                <PatientItem>
                                    <PatientInfo>
                                        <PatientImg />
                                        <PatientName>Mustafa Alfaisal</PatientName>
                                    </PatientInfo>
                                    <PatientAge>23 Years old</PatientAge>
                                    <PatientDrugs>cold and flo</PatientDrugs>
                                </PatientItem>
                            </Container>
                        )
                    }
                }
            </Context.Consumer>
        )
    }
}


export default Main
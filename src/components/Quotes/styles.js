import styled from 'styled-components'

export const QuoteContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const QuoteCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 540px;
    margin: auto;
    border-radius: .5rem;
    margin-top: 2rem;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: #fff;
    background-color: #101522;


    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
        
 `

export const Title = styled.h1`
    font-size: 30px;
    letter-spacing: 2px;
    margin: .2rem 0;
    `

export const Quote = styled.p`
    font-size: 16px;
    letter-spacing: 2px;
    line-height: 1.6;    
    `


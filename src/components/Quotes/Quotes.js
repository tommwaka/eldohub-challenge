import React from 'react'
import { Title, QuoteContainer, QuoteCard, Quote } from './styles'


const Quotes = ({ quote }) => {
    return (
        <>
            <QuoteContainer>
                <QuoteCard>
                    <Title>{quote.categories}</Title>
                    <Quote>{ quote.value }</Quote>
                </QuoteCard>
            </QuoteContainer>
            
        </>
    )
}

export default Quotes

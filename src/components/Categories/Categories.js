import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

import chuck from '../../images/chuck.png'


import { 
    CategoriesContainer, 
    QuotesContainer, 
    CatHeader, 
    Title, 
    SubTitle, 
    Cats, 
    Logo, 
    Img, 
    Anchor,
    Loader
} from './styles'

import Quotes from '../Quotes/Quotes'

const Categories = () => {                                                                          

    const [categories, setCategories] = useState([])
    const [quote, setQuote] = useState([])
    const [clicked, setClicked] = useState(false)
    
    useEffect(() => {
        const fetchCategories = async () => {
            await axios.get('https://api.chucknorris.io/jokes/categories')
                .then(response => setCategories(response.data))
        }
        fetchCategories()
    }, [categories])

    

    
    const fetchQuotes = (e, cat) => {
        axios.get(`https://api.chucknorris.io/jokes/random?category=${cat}`)
            .then(response => setQuote(response.data))   
        
            setClicked(true)
        }

    return (
        <>
            <CategoriesContainer>
                <Logo>
                    <Img src={chuck} />
                </Logo>
                <CatHeader>
                    <Title>Chuck Norris Jokes</Title>
                    <SubTitle>Click on any category to get joke</SubTitle>
                </CatHeader>

                {!categories.length ? <CircularProgress /> : (
                        <Cats>
                        {
                           categories.map((cat) => {
                               return <Anchor key={ cat } onClick={(e) => { fetchQuotes(e, cat) }}>{cat}</Anchor>
                            })
                        }
                        </Cats>

                )}
                
            </CategoriesContainer>     
            
            {!clicked ? <Loader><CircularProgress /> </Loader> : (
                <QuotesContainer>
                    <Quotes quote={quote} key={ quote.value} />
                </QuotesContainer>
                
            )}
        </>
    )
}

export default Categories

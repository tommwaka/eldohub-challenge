import styled from 'styled-components'

export const CategoriesContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Andika New Basic', sans-serif;
`

export const CatHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export const Title = styled.h1`
    margin: .2rem 0;
`

export const SubTitle = styled.p`
    font-size: 20px;
    margin: .5rem 0;
`

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export const Anchor = styled.a`
    margin: 0 .5rem;
    padding: .5rem;
    background-color: #101522;
    color: #ffffff;
    border-radius: .3rem;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #000;
        transition: .3s ease;
    }
`

export const Cats = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;

    @media(max-width: 780px){
        grid-template-columns: repeat(4, 1fr)
    } 
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    height: 150px;
`

export const QuotesContainer = styled.div``
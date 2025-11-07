import React from "react"
import MainContent from "../../components/MainContent"
import { MaratonaTitleContainer, MaratonaTitle , MaratonaContentContainer , MaratonaContentRight , MaratonaH2 , MaratonaParagraph , MaratonaContentLeft} from './style';

export function Maratonas () {
    return (
        <>
        <MainContent>
            <MaratonaTitleContainer> {/* col */}
                <MaratonaTitle>Maratonas</MaratonaTitle>
            </MaratonaTitleContainer>
            
            <MaratonaContentContainer>  {/* row */}
                <MaratonaContentRight>
                    <MaratonaH2>Topa uma maratona?</MaratonaH2>
                    <MaratonaParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis convallis nisi, quis bibendum quam interdum in. Nam ullamcorper aliquet nisi, sed rhoncus libero varius et. Curabitur imperdiet consectetur ipsum vitae ornare. Praesent molestie metus elit. Pellentesque consequat id nulla ut suscipit.</MaratonaParagraph>
                    <button></button>
                </MaratonaContentRight>

                <MaratonaContentLeft>
                <p style={{color: "#fff"}}>lalalalala</p>
                    
                </MaratonaContentLeft>
            </MaratonaContentContainer>

        </MainContent>
        </>
    )
}
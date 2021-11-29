import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CountriesContext } from '../Context'

import {Image} from "react-bootstrap"

export const CountryListContainer = styled.li`
   width: 600px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 0.5em;
   margin: 0.5em;
   border: 1px solid rgba(0,0,0.5);
   border-radius: 10px;
`

export const FlagImage = styled(Image)`
    margin-right: 0.5em;
    width: 65px;
    height: 65px;
`

/** 
 * This component is responsible for rendering a country list, with
 * an add or delete functionality
 */
function CountryListItem(props) {
    const {countryName, flagImageURL, selectedCountryIndex} = props

    const {actions} = useContext(CountriesContext)

    return (
        <CountryListContainer>
            <div>
                <FlagImage src={flagImageURL} alt="flag"/>
                <span>{countryName}</span>
            </div>
            <div className="align-self-center">
                {selectedCountryIndex === undefined ?
                    (<button 
                        onClick={() => actions.addSelectedCountry({
                            countryName,
                            flagImageURL
                        })}
                    >+</button>) : 
                    (<button 
                        onClick={() => actions.removeSelectedCountry(selectedCountryIndex)}
                    >x</button>)
                }
            </div>
         </CountryListContainer>
    )
}

CountryListItem.propTypes = {
    /** the name of the country */
    countryName: PropTypes.string,
    /** URL of the flag image */
    flagImageURL : PropTypes.string,
    /** the index of the item in the selected country list; null/undefined if not in selected country */
    selectedCountryIndex : PropTypes.number,
}

CountryListItem.defaultProps = {
    countryName : "Untitled",
    flagImageURL : "",
    selectedCountryIndex : undefined
}

export default CountryListItem


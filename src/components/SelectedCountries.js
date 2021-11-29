import React, {useContext} from 'react'
import CountryListItem from './CountryListItem'

import { CountriesContext } from '../Context'

/** This component handles purely rendering the user's selected countries */
function SelectedCountries(props) {
    const {selectedCountries} = useContext(CountriesContext)
    return (
        <div className="m-5 w-50">
            <h4 className=""> Selected Countries</h4>
            <ul className="list-group pr-2">
                {selectedCountries.length > 0 && selectedCountries.map((country, index) => (
                    <CountryListItem countryName={country.countryName} flagImageURL={country.flagImageURL} selectedCountryIndex={index}/>
                ))}
            </ul>
        </div>
    )
}

export default SelectedCountries


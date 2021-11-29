import React, {useState, createContext, useEffect} from 'react'
import Cookies from 'js-cookie';

export const CountriesContext = createContext()

/**
 * This context handles adding and deleting countries from the selected list
 * It also handles saving it as a cookie to facilitate persistence.
 */
export function CountriesProvider(props) {
    const [selectedCountries, setSelectedCountries] = useState([])

    useEffect(() => {
        setSelectedCountries(Cookies.get('selectedCountries') ? JSON.parse(Cookies.get('selectedCountries')) : [])
    }, [])

    function addSelectedCountry(country) {
        if (selectedCountries.find((c, index) => c.countryName === country.countryName) === undefined ){
            const newSelectedCountries = [...selectedCountries, country]
            setSelectedCountries(newSelectedCountries)
            Cookies.set("selectedCountries", JSON.stringify(newSelectedCountries))
        }
    }

    function removeSelectedCountry(removedIndex) {
        const newSelectedCountries = selectedCountries.filter((_, index) => index !== removedIndex)
        setSelectedCountries(newSelectedCountries)
        Cookies.set("selectedCountries", JSON.stringify(newSelectedCountries))
    }

    return (
        <CountriesContext.Provider value={{
            selectedCountries,
            actions: {
                addSelectedCountry : addSelectedCountry,
                removeSelectedCountry : removeSelectedCountry,
            }
        }}>
            {props.children}
        </CountriesContext.Provider>
    )
}
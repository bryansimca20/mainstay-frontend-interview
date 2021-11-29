import React, {useState} from 'react'
import CountryListItem from './CountryListItem'
import {Form} from "react-bootstrap"
import axios from "axios"

const API_URL = "https://restcountries.com/v3.1/name/"

/** 
 * This component handles the search bar functionality and the results from the search
 */
function Search() {
    const [countryList, setCountryList] = useState([])
    const [isLoading, setLoading] = useState(false)

    async function getResultsFromSearch(searchValue) {
        if (searchValue !== "") {
            setLoading(true)
            const res = await axios.get(`${API_URL}/${searchValue}`)
            const data = res.data
            setCountryList(data)
        } else {
            // We need this so that when the search bar is empty
            // it won't display anything
            setCountryList([])
        }
        setLoading(false)
    }
    return (
        <div className="m-5 w-50">
            <h2>{isLoading ? "Loading search results..." : null}</h2>
            <Form>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        placeholder="Start typing a country name here"
                        name="searchValue"
                        onChange={(event) => getResultsFromSearch(event.target.value)}
                    >
                        
                    </Form.Control>
                </Form.Group>
            </Form>
            <h4 className="mt-2">Search Results: </h4>
            <ul className="list-group pr-2">
                {countryList.map((country, index) => (
                    <CountryListItem countryName={country.name.common} flagImageURL={country.flags.png} />
                ))}
            </ul>
        </div>
    )
}

export default Search


import { useEffect, useState } from "react";


export default function SearchBar({ allParticipants, setSearchedParticipants }) {

    const [searchText, setSearchText] = useState("");

    function HandleSearch() {
        // filter on original array
        const filteredParticipants = allParticipants.filter(p => `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchText.toLowerCase()))
        // save in support array and show search results
        setSearchedParticipants(filteredParticipants)
    }

    useEffect(HandleSearch, [searchText])

    return (
        <>
            <input type="search"
                name="searchBar"
                className="form-control mb-3"
                id="searchBar"
                placeholder="cerca partecipante"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </>
    )
}
 const getPuzzle = (wordCount) => {
     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
         if (response.status === 200) {
             return response.json()
         } else {
             throw new Error('Unable to get puzzle')
         }
     }).then((data) => {
            return data.puzzle
        })

    }
 

    const getCountry = (countryCode) => {
        return fetch('https://restcountries.eu/rest/v2/all', {}).then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Unable to fetch data')
            }
        }).then((data) => {
            return country = data.find((country) => country.alpha2Code === countryCode)
        })
    }

/* const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const requestCountries = new XMLHttpRequest()

    requestCountries.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country.name)
        } else if (e.target.readyState === 4) {
            reject('An error')
        } 
    })

    requestCountries.open('GET', 'https://restcountries.eu/rest/v2/all')
    requestCountries.send()

}) */
 
import { useState } from 'react'

import './App.scss'
import mockData from './mock-data.json' 
import HeroCard from './HeroCard/HeroCard'
import SearchBar from './SearchBar/SearchBar'



function App() {
  const characters = mockData.characters
  const [searchParam, setSearchParam] = useState('')
  const [filteredHeroes, setFilteredHeroes] = useState(characters)

  const searchFunc = (param) => {
    setSearchParam(param)
    setFilteredHeroes(characters.filter(char => (char.name.toLowerCase().includes(param.toLowerCase()))))
  }

  return (
    <>
       <SearchBar 
          searchFunc={searchFunc}
       />
    <div className="heroGrid">
      {filteredHeroes.map(char => {
         return (
            <HeroCard
               key={char.id}
               name={char.name}
               image={char.image}
            />
         )
      })}
    </div>
    </>
  )
}

export default App

import './SearchBar.scss'

function SearchBar({ searchFunc }) {


  return (
    <div className="searchCont">
        <input type="text" autoComplete='false' onChange={(e) => searchFunc(e.target.value)}/>
    </div>
  )
}

export default SearchBar
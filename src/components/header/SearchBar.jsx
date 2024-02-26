
export default function SearchBar() {
  return (
    <div className='col-sm-4' >
      <input type='text'  style={{ marginTop: "50px"}}className='input' required placeholder='search products ...'></input>
      <input type="button" value="Search"/>
    </div>
  )
}

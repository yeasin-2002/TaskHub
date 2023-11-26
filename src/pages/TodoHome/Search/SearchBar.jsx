import { BsSearch } from "react-icons/bs"
import { useDispatch } from "react-redux"

import { setSearchValue } from "../../../Redux/feature/search/search"

const SearchBar = () => {
  const dispatch = useDispatch()

  const searchInputHandler = (e) => {
    e.preventDefault()
    dispatch(setSearchValue(e?.target?.value))
  }
  return (
    <>
      <form className=" px-4 py-4" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <BsSearch />
          </div>
          <input
            onChange={searchInputHandler}
            type="search"
            id="searchValue"
            className="block w-full rounded-lg border border-Shades bg-Amber p-2.5 pl-10 text-sm text-gray-900 focus:border-Shades focus:ring-Shades  "
            placeholder="Search"
          />
        </div>

        <div className="mt-6 flex justify-center gap-x-6 md:hidden">
          <button className="rounded-3xl bg-Light p-2 px-4 ring ring-Shades">Filter</button>

          <button className="rounded-3xl bg-Light p-2 px-4 ring ring-Shades">cateroy</button>

          <button className="rounded-3xl bg-Light p-2 px-4 ring ring-Shades">Participant</button>
        </div>
      </form>
    </>
  )
}
export default SearchBar

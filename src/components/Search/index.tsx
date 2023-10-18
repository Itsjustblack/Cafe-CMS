const SearchBar = () => {
  return (
    <div className="flex justify-between gap-x-5">
        <div className="bg-white flex flex-row pl-4 pr-5 h-[50px] space-x-3 items-center rounded-md">
            <div className="relative w-6 h-6">
                <img src="/assets/search.svg" alt="" />
            </div>
            <input type="text" placeholder="Search product..." className="bg-transparent w-[300px] text-[#313131] placeholder:text-[#919191] outline-0 text-base placeholder:text-base" />
        </div>
        <div className="bg-white flex justify-center items-center h-[50px] p-3 rounded-md">
          <div className="relative w-6 h-6">
            <img src="/assets/filter.svg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default SearchBar
import { SearchBar } from "./SearchBar"

export const AppBar=()=>{
return <div className="flex justify-between">
    <div>
        YOUTUBE
    </div>
    <div>
        <SearchBar/>
    </div>
    <div>
        SIGNIN
    </div>
</div>
}

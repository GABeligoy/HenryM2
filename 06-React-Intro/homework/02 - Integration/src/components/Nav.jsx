import SearchBar from "./SearchBar";

export default function Buscar(props){
    return(
        <div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}
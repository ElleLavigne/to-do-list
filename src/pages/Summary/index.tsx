import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";

import { SummaryContainer, SummaryContent } from "./styles";

export function Summary(){
    return(
        <SummaryContainer>
            <Header/>
            <SummaryContent>

            <SearchBar/>
            </SummaryContent>
        </SummaryContainer>
    )
}
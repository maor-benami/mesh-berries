import {useCherries} from "./hooks/use-cherries.tsx";

import {FirmnessSelector} from "./components/firmness-selector.tsx";
import {BerriesView} from "./components/berries-view.tsx";
import {SearchBox} from "./components/search-box.tsx";

function App() {
    const {
        groupedByFirmness,
        selectedFirmness,
        setSelectedFirmness,
        filteredData,
        search,
        setSearch,
        searchDebounced,
    } = useCherries();

    return (
        <div className="flex flex-col gap-4 rounded-lg border border-gray-300 m-8 p-4">
            <div>
                <h1 className="text-lg font-bold">Poke Berries</h1>
                <p className="text-xs text-gray-500">How tough are you?</p>
            </div>

            <div className="flex gap-6">
                <FirmnessSelector
                    groupedByFirmness={groupedByFirmness}
                    selectedFirmness={selectedFirmness}
                    setSelectedFirmness={setSelectedFirmness}
                />

                <div className="flex-grow relative">
                    <div className="h-full flex flex-col gap-4">
                        <SearchBox
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />

                        <div className="flex-grow relative">
                            <div className="absolute inset-0 overflow-y-scroll pr-2">
                                <BerriesView
                                    data={filteredData}
                                    searchDebounced={searchDebounced}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

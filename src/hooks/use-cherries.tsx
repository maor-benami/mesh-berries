import {useEffect, useMemo, useState} from "react";
import {groupBy} from "lodash";
import {firmnessLevels, type FirmnessLevel} from "../types.ts";
import {useDebounce} from "./use-debounce.tsx";

export function useCherries() {
    const DATA_KEY = "cherry_data";
    const cached = localStorage.getItem(DATA_KEY);

    const [data, setData] = useState(cached ? JSON.parse(cached) : []);
    const [selectedFirmness, setSelectedFirmness] = useState<FirmnessLevel>(firmnessLevels[0]);

    async function fetchData() {
        const res = await fetch("https://pokeapi.co/api/v2/berry?limit=1000");
        const {results} = await res.json();

        const detailPromises = results.map(async (berry: any) => {
            const res = await fetch(berry.url);
            return res.json();
        });

        const fullBerries = await Promise.all(detailPromises);

        const normalized = fullBerries.map(b => {
            return ({
                name: b.name,
                firmness: b.firmness.name,
                flavors: b.flavors.map((f: any) => ({
                    flavor: f.flavor.name,
                    potency: f.potency
                }))
            });
        });

        setData(normalized);
        localStorage.setItem(DATA_KEY, JSON.stringify(normalized));
    }

    useEffect(() => {
        if (cached) {
            return
        }
        fetchData().then()
    }, []);

    const groupedByFirmness = useMemo(() => {
        return groupBy(data, "firmness");
    }, [data]);

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState<any[]>([]);

    const searchDebounced = useDebounce(search, 200);

    useEffect(() => {
        const current = groupedByFirmness[selectedFirmness] || [];
        const filtered = current.filter(berry =>
            berry.name.toLowerCase().includes(searchDebounced.toLowerCase())
        );
        setFilteredData(filtered);
    }, [searchDebounced, selectedFirmness, groupedByFirmness]);

    return {
        data,
        groupedByFirmness,
        selectedFirmness,
        setSelectedFirmness,
        search,
        setSearch,
        filteredData,
        searchDebounced,
    };
}

import type {Berry} from "../types.ts";
import {Highlight} from "./highlight.tsx";

function BerryItem(props: {
    berry: Berry
    searchDebounced: string
}) {
    return (
        <div key={props.berry.name} className="border border-gray-300 shadow rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="rounded-full rounded-tl-none rounded-bl-none border border-gray-300 overflow-hidden border-l-0 my-2">
                        <div className="w-10 h-10" style={{
                            backgroundSize: "90%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(https://logowik.com/content/uploads/images/346_raspberry_pi_logo.jpg)`,
                        }}>
                        </div>
                    </div>

                    <div className="font-semibold">{props.searchDebounced ?
                        <Highlight
                            name={props.berry.name}
                            search={props.searchDebounced}
                        /> : props.berry.name}
                    </div>
                </div>

                <div className="flex gap-2 p-3">
                    {props.berry.flavors.filter(item => item.potency > 0).map(flavor => {
                        return (
                            <div key={flavor.flavor}
                                 className="flex gap-2 items-center rounded-full px-3 py-1 bg-gray-100 border border-gray-300">
                                <div
                                    className="text-sm font-semibold">{flavor.flavor}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export function BerriesView(props: {
    data: Berry[]
    searchDebounced: string,
}) {
    return (
        <div className="flex flex-col gap-4">
            {props.data.map(berry => {
                return (
                    <BerryItem
                        key={berry.name}
                        berry={berry}
                        searchDebounced={props.searchDebounced}
                    />
                )
            })}
        </div>
    )
}
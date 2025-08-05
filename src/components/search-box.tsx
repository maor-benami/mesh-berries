import React from "react";

export function SearchBox(props: {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}) {
    return (
        <div className="flex justify-end">
            <input
                type="text"
                placeholder="Search by name"
                className="w-64 outline-0 border border-gray-300 rounded-full px-3 py-1"
                {...props}
            />
        </div>
    )
}
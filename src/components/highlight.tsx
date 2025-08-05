export function Highlight(props: { name: string, search: string }) {
    return (
        props.name.split(props.search).map((item, i) => (
            <>
                <span className="inline-block bg-amber-300">{i > 0 ? props.search : ''}</span>{item}
            </>
        ))
    )
}

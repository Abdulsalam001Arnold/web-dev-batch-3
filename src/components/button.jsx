


export default function Button({name}) {
    const year = new Date().getFullYear()
    return(
        <button className="p-4 rounded-[10px] bg-black text-white">
            Click Me! {year} {name}
        </button>
    )
}
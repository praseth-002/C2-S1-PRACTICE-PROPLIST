export default function Card(props) {
    return (
        <div key={props.id}>
            <img src={props.image.src} alt={props.image.alt} />
            <p className="name">{props.name}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
import "./styles.css";

export const Image = ({ image, name }) => {
    return <div className="image">
        <div className="image-text">{name?.length > 0 && name[0].toUpperCase()}</div>
    </div>

}

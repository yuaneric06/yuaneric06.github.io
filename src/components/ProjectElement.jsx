import './ProjectElement.css'

export default function ProjectElement(props) {
    const { title, tools, description, icon, ...rest } = props.data;
    return (
        <section className="project-element-section">
            <div className="project-element-icon">
                {icon}
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{tools}</p>
        </section>
    )
}
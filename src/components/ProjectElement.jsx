import './ProjectElement.css'

export default function ProjectElement(props) {
    const { title, tools, description, icon, iconBackgroundColor, ...rest } = props.data;
    console.log(iconBackgroundColor);
    const iconStyles = {
        backgroundColor: iconBackgroundColor
    }
    const toolElements = tools.map(tool => {
        return (
            <span className="tool">{tool}</span>
        )
    })
    return (
        <section className="project-element-section">
            <div className="pixel-corners">
                <div style={iconStyles} className="project-element-icon">
                    {icon}
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="tools">
                    {toolElements}
                </div>
            </div>
        </section>
    )
}
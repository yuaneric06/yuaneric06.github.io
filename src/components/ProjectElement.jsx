import { ExternalLink, Github } from "lucide-react";
import './ProjectElement.css'

export default function ProjectElement(props) {
    const { title, tools, description, icon, iconBackgroundColor, demoLink, codeLink, ...rest } = props.data;
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

                <div className="links">
                    <a className="demo-button" target="_blank" href={demoLink}>
                        <ExternalLink className="w-3 h-3 inline mr-2" />
                        DEMO
                    </a>
                    <a className="code-button" target="_blank" href={codeLink}>
                        <Github className="w-3 h-3 inline mr-2" />
                        CODE
                    </a>
                </div>
            </div>
        </section>
    )
}
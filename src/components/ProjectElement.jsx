import { ExternalLink, Github } from "lucide-react";
import './ProjectElement.css'

export default function ProjectElement(props) {
    const { title, tools, description, icon, iconBackgroundColor, demoLink, codeLink, finishDate, ...rest } = props.data;
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
                <div className="flex justify-between mb-3">
                    <h1 className="relative top-5 left-8 text-4xl sm:text-base flex-1">{title}</h1>
                    <span className="bg-black text-white px-2 py-1 text-[10px] border-2 border-black ml-2">
                        FINISHED: {finishDate}
                    </span>
                </div>

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
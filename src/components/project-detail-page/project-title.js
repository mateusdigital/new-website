
export default function ProjectTitle_({info}) {
    const title = info.title;
    return (
        <>
            <header className="project-detail-header">
                <h1>{title}</h1>
            </header>
        </>
    )
}
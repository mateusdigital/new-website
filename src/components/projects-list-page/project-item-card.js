import Link_             from "@/components/link";
import GamesInformation_ from "@/components/games/games-information";

export default function ProjectItemCard_({name}) {
    const info = GamesInformation_(name);

    if(!info) {
        // debugger;
        console.log(name);
        return (<></>)
    }

    const title     = info.title;
    const year      = info.year;
    const platform  = info.platform;
    const type      = info.type;

    const img_extension = (type == "demo") ? "gif" : "png";

    const details_page_url = `/projects/${name}`;
    const img_path         = `/img/${type}/${name}.${img_extension}`;

    const alt_text = `Screenshot of "${title}"`;

    return (
        <>
            <article className="project-list-card">
                <Link_ href={details_page_url}>
                    <header>
                        <img src={img_path} alt={alt_text}/>
                    </header>

                    <section className="info">
                        <span>{title}</span>
                        <span>{year}</span>
                        <span>{platform}</span>
                    </section>
                </Link_>
            </article>
        </>
    )
}
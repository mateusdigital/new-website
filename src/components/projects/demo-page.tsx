import DefaultPage from "../components/DefaultPage";
import ProjectPresentation_ from
  "../components/project-detail-page/project-presentation";

import ProjectTitle_ from "./project-title";
import Link from "../link";

export default function DemoPage_({info, children})
{
  const name = info.name;
  const tech = info.tech.join(", ");
  const year = info.year;

  const license = "GPLv3";
  const git_url = `https://github.com/mateusdigital/${name}`;

  return (
    <>
      <DefaultPage pageId="projects">
        <section className="projectDetailPageContainer">
          <ProjectPresentation_ info={
    info} />
          <ProjectTitle_ info={info} />
          {children}

          <ul>
            <b>General Info:</b><br />
            <li><b>Tech:</b> {tech}</li>
            <li><b>Year:</b> {year}</li>
            {/* <li>
              <b>{platform_title}:</b>
              <span dangerouslySetInnerHTML={{ __html: platform_content }}></span>
            </li> */}
            <li><b>License:</b> {license}</li>
            <li><b>Source Code:</b> <Link href={git_url}>{git_url}</Link></li>
          </ul>
        </section>
      </DefaultPage>
    </>
  )
}

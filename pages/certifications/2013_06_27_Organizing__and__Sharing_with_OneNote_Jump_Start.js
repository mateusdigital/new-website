
import DefaultPage_ from "@/components/default-page";
import Link_ from "@/components/link";

export default function Page() {
  return (
    <>
      <DefaultPage_ page_id="certifications">
        <a href="/res/certifications/MVA/2013_06_27_Organizing__and__Sharing_with_OneNote_Jump_Start-1.png">
          <img className="certificationDetailPageHeader" src="/res/certifications/MVA/2013_06_27_Organizing__and__Sharing_with_OneNote_Jump_Start-1.png"></img>
        </a>
        <section>
          <ul>
            <b>Links:</b><br />
            <li><b>PDF Version:</b> <Link_ href="/res/certifications/MVA/2013_06_27_Organizing___pdf_url___Sharing_with_OneNote_Jump_Start.pdf">Download</Link_></li>
          </ul>
        </section>
      </DefaultPage_>
    </>
  )
}

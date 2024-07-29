import Accordion from '../../components/ui/Accordion'



function RightSideBar() {
    return (
        <div className="col-12 col-lg-3 order-3 order-lg-3">
            <Accordion accordion={newlyAcquiredBooks} />
            <Accordion accordion={openAccessLinks} />
        </div>
    )
}




const newlyAcquiredBooks = {
    id: "books",
    title: "NEWLY ACQUIRED BOOKS",
    content: "This is a content"
}


const links = [
    { title: "Access Engineering", link: "https://www.accessengineeringlibrary.com/" },
    { title: "EBSCO Databases", link: "https://search.ebscohost.com/Login.aspx/" },
    { title: "Infotrac", link: "https://link.gale.com/apps/menu?userGroupName=phslsu&prodId=MENU/" },
    { title: "Engineering Study Material", link: "http://ww7.engineeringstudymaterial.net/?usid=24&utid=4925535969/" },
    { title: "Cogprints", link: "https://web-archive.southampton.ac.uk/cogprints.org/" },
    { title: "Directory of Open Access Books", link: "https://www.doabooks.org/" },
    { title: "Get Free Books", link: "https://www.getfreeebooks.com/" },
    { title: "Project Gutenberg", link: "https://www.gutenberg.org/" },
    { title: "Intechopen", link: "https://www.intechopen.com/" },
]

const linksMap = links.map((link, index) => <li className='fs-8' key={index}><a href={link.link} target="_blank">{link.title}</a></li>)

const openAccessLinks = {
    id: "links",
    title: "OPEN ACCESS LINKS",
    content: linksMap
}

export default RightSideBar
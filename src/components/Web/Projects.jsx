import Project from "./Project"
export default function Projects(){
    const projects = [
        {
            title:"Book Review",
            src:"2.jpg"
        },
        {
            title:"International Space Station Locator",
            src:"1.jpg"
        },
        {
            title:"Jokes Junction",
            src:"3.jpg"
        }
    ]
    return(
        < div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap",gap:"40px"}}>
            {
                projects.map(project=>{
                    return <Project title={project.title} src={project.src}/>
                })
            }
            {
                projects.map(project=>{
                    return <Project title={project.title} src={project.src}/>
                })
            }
            
        </div>
    )
}
import Project from "../Web/Project"
export default function ProjectM(){
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
        < div className="fade-in"style={{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",gap:"40px"}}>
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
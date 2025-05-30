import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"
import cv from "../../../assets/CV.svg"

const Fun = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2', position: 'relative' }}>
        <div className="container">
          <div className="row flex-column-reverse">
            <div className="col-md-12 d-flex justify-content-end align-items-bottom">
              <a className='px-2 text-right' href="mailto:sujots92@gmail.com"><img width="20" height="20" src={gmail} className="logo" alt="mail" style={{verticalAlign: 'middle', marginTop: "5px"}}/></a>
              <a className='px-2 text-right' href="https://www.linkedin.com/in/sujot/"><img width="20" height="20" src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-2 text-right' href="https://github.com/3xcess"><img width="20" height="20" src={github} className="logo" alt="github" /></a>
              <a className='px-2 text-right' href="https://github.com/3xcess/3xcess.github.io/blob/main/src/assets/CV_PDF.pdf"><img width="20" height="20" src={cv} className="logo" alt="github" /></a>
            </div>
            <h1 className="display-3 col-md-1 text-center" style={{color: "#39392D"}}>Blogs</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
            <h5>Coming Soon...</h5>
        </div>
      </div>


    </>
  )
}

export default Fun
import './landing.css'
import Sujot from '../../../assets/Images/Sujot.JPG'
import github from "../../../assets/Github.svg"
import linkedin from "../../../assets/Linkedin.svg"
import gmail from "../../../assets/Gmail.svg"

const Landing = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2' }}>
        <div className="container ">
          <h1 className="display-3 d-flex justify-content-center"><img src={Sujot} className="display-pics" alt="Sujot Singh" /></h1>
          <div className='d-flex justify-content-center'>
            <h1 className="display-3 d-flex justify-content-center px-2" style={{color: "#39392D"}}>Sujot</h1>
            <h1 className="display-3 d-flex justify-content-center px-1" style={{color: "#39392D"}}>Singh</h1>
          </div>
          <h4 className='text-center' style={{ color: '#39392D' }}>Short Desc</h4>

          <div className="col-md-12 d-flex justify-content-end align-items-bottom">
              <a className='px-2 text-right' href="mailto:sujots92@gmail.com"><img width="20" height="20" src={gmail} className="logo" alt="mail" style={{verticalAlign: 'middle', marginTop: "5px"}}/></a>
              <a className='px-2 text-right' href="https://www.linkedin.com/in/sujot/"><img width="20" height="20" src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-2 text-right' href="https://github.com/3xcess"><img width="20" height="20" src={github} className="logo" alt="github" /></a>
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h5><b>Desc 1</b></h5>
            <h5><b>Desc 1</b></h5>
            <h5><b>Desc 1</b></h5>
            <p>Some short stuff to put in here</p>
            <p>Some more short stuff to put in here</p>
            <p>Even more short stuff to put in here</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
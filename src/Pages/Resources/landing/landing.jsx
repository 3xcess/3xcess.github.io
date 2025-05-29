import './landing.css'
import Sujot from '../../../assets/Images/Sujot.JPG'

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
        <hr />
      </div>
    </>
  )
}

export default Landing
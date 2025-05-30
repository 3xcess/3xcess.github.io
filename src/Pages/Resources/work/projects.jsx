const Project = () => {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: '#F7F7F2' }}>
        <div className="container">
          <div className="row flex-column-reverse">
            <h1 className="display-3 col-md-1 text-center" style={{color: "#39392D"}}>Projects</h1>
          </div>
        </div>
      </div>

    <div className="container py-3">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>SCX/Ba-Bawm</h5>
                    <p className="card-text" style={{ color: "#48483A", textAlign:"left" }}>
                        A system for automated workload profiling and scheduler switching to optimize the Linux Kernel performance. <br></br>Built using SCX, Sched-Ext, and eBPF.
                    </p>
                    <a href="https://github.com/EddieFed/scx-ba-bawm" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>Transleight of Hand</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        An explorative proof-of-concept study into the many security implications of WASM-Native Execution Discrepancies. <br></br>Done using C/C++(gcc) and WASM(Emscripten).
                    </p>
                    <a href="https://github.com/EddieFed/wasm-exploits" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>YUME: A tale of Dreams & Nightmares</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        An action-adventure game exploring the themes of fantasy and dreams with key focus on scalable software development and maintainence.<br></br>Built using Unity 6.0
                    </p>
                    <a href="https://github.com/3xcess/CS426_Final_Project_YUME" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="container py-3">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>CustOS</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        A self made, lightweight custom Operating System built on the Linux Kernel. Further iterations refined to have a GUI and networking capability.<br></br>Designed to be lightweight and customizable.
                    </p>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: "#B8C1AE", color: "#fff" }}>Not Public</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>StegoCipher</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        A steganographic cipher system built for embedding and extracting data using images optimized for minimising the size inflation post encryption.<br></br>Written in Python. 
                    </p>
                    <a href="#" className="btn btn-sm" style={{ backgroundColor: "#B8C1AE", color: "#fff" }}>Not Public</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow" style={{ backgroundColor: "#F2F3E2" }}>
                    <div className="card-body">
                    <h5 className="card-title" style={{ color: "#48483A" }}>Portfolio Website</h5>
                    <p className="card-text" style={{ color: "#48483A" }}>
                        This page is also one of my projects! It's my first foray into web development, even if its no more than an alternate CV as of right now.<br></br>Built using React, Vite, and Bootstrap.
                    </p>
                    <a href="https://github.com/3xcess/3xcess.github.io" className="btn btn-sm" style={{ backgroundColor: "#899878", color: "#fff" }}>View</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    </>
  )
}

export default Project
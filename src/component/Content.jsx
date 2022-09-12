import react from 'react' 
import mypic from '../images/mypic.jpg'

function Content() {
    return(
        <div className='content'>
            <main>
                <div> 
                    <h1>Hello! This is Manasa Vallabhapurapu!</h1>
          <h1>Welcome to my Portfolio</h1>
          <p>I am an International Student Pursing Masters in Computer Science with Specialization in Information Systems.</p> 
          <p> Currently, I am  working as Graduate Assistant in the Department of Engineering Management and System Engineering. </p>
        </div>

        <div className='buttons'>
            <a href="https://drive.google.com/file/d/1zKDdoZK3p5KPi4ILic4hK8OpIvHa55z2/view?usp=sharing"><button className="cta portfolio">DOWNLOAD MY CV</button></a>
        </div>
            </main>
        <figure>
        <img src={mypic} alt="Manasa Vallabhapurapu" className='mypic-image' width={450} />
        <div className='image-bg'></div>

                </figure>
                </div>

    )
}
export default Content
import Title from './Title'
import {services} from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title t1='Our ' t2='Services'/>
      <div className="section-center services-center">
        {services.map((serv)=>{
          return(
            <article className="service" key = {serv.id}>
            <span className="service-icon"><i className={serv.icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{serv.title}</h4>
              <p className="service-text">
                {serv.text}
              </p>
            </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
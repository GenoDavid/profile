import React from 'react'
import classes from './Introduction.module.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Form from '../form/Form'

const Introduction = () => {
  return (
    <div className={classes.menu}>
      <div className={classes.box}>
        <Row >
          <Col lg="8">
            <h3 className={classes.heading}>21 Intresting Web Develpoment Project Ideas For Beginner 2023[Latest]</h3>
            <div className={classes.content}>
              <img className={classes.image} src='https://iheartcraftythings.com/wp-content/uploads/2021/04/Cartoon-Face-DRAWING-%E2%80%93-STEP-10.jpg' />
              <div className={classes.bio}>
                <p>By Chinchan</p>
                <p>Chinchan is Program marketing manager at UpGrad for the Software development program. Prior to UpGrad, he was a part of the French ride-sharing unicorn "BlaBlaCar" in India. He is a....</p>
              </div>
            </div>
            <div className={classes.link}>
              <Link className={classes.home}>Home-</Link>
              <Link className={classes.home}>Full Stack Development-</Link>
              <p>21 Intresting Web Develpoment Project Ideas For Beginner 2023[Latest]</p>
            </div>
            <div className={classes.sumary}>
              <h1 className={classes.sumhead}>Summary:</h1>
              <h5 className={classes.sumpara}>In this artical,you will learn the 21 Intresting Web Development Ideas & Topics 2023.</h5>
              <h5 className={classes.sumparas}>Take a glimpse below.</h5>
            </div>
            <ul className={classes.listorder}>
              <li className={classes.order}>1. One-page layout</li>
              <li className={classes.order}>2. Login authentication</li>
              <li className={classes.order}>3. Product landing page</li>
              <li className={classes.order}>4. Giphy with a unique API</li>
              <li className={classes.order}>5. JaveScript quiz game</li>
              <li className={classes.order}>6. To-do list</li>
              <li className={classes.order}>7. SEO-friendly website</li>
              <li className={classes.order}>8. JavaScript drawing</li>
              <li className={classes.order}>9. Search engine result page</li>
              <li className={classes.order}>10. Google home page lookalike</li>
              <li className={classes.order}>11. Tribute page</li>
              <li className={classes.order}>12. Survey form</li>
            </ul>
            <i className={classes.italy}>Read the full article to know more  about all the 21 Web Development project Ideas & Topics in detail.</i>
            <div className={classes.total}>
              <h4 className={classes.web}>Web Development Project Ideas</h4>
              <div className={classes.spanpara}>
                <span >With digital presence becoming a necessity for brands to expand and gain exposure among potential customers, the web development industry is taking off rapidly, and so is the demand for Web Developers. In fact, web development has emerged as a promising field right now, attracting aspirants from all educational and professional backgrounds. As industries continue facing fierce competition among fellow brands and services, the ones keeping up with trends steal the limelight. The severe expansion of digitally engaged audiences has proved that web development is no more a choice but a necessity to reach a broader customer base, increase engagement and promote services.</span>
              </div>
              <div className={classes.spanpara}>
                <p className={classes.highlight}>You can also check out our <Link className={classes.free}>free courses</Link> offerd by Flash code under IT technology.</p>
              </div>
              <div className={classes.spanpara}>
                <span >Considering how web development is experiencing continuous growth with technological advancement, following web development trends is essential to sustain the audience’s volatile attention. Aspects like architecture, application, chatbots, motion UI, and IoT are popularly incorporated into service structures with API project ideas for beginners, demanding significant experience to master and create complying websites and applications. </span>
              </div>
              <div className={classes.spanpara}>
                <span>Practicing web development projects with code bridges the gap between theoretical knowledge and practical application, and the best way to grasp web development concepts is by working on real-world projects. Web development projects for final-year students or fresh graduates and API project ideas for beginners help them test their theoretical knowledge and enhance their practical skills. </span>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className={classes.leftbox}>
              <h3 className={classes.leftcontent}>Our Trending Software Engineerig Courses</h3>
              <hr className={classes.line} />

              <div className={classes.leftpara}>
                <p>Master Of Science In Computer Science From LJMU</p>
              </div>
              <div className={classes.leftpara}>
                <p>Executive PG Program In Software Development Specification In Full Stack Development From IIIT-B</p>
              </div>
              <div className={classes.leftpara}>
                <p>Advanced Certificate Programme In Cyber Security From IIIT-B</p>
              </div>
              <div className={classes.leftpara}>
                <p>Full Stack Softwrae Development In Bootcamp</p>
              </div>
              <div className={classes.leftpara}>
                <p>Software Development Bootcamp In Flash Code</p>
              </div>
            </div>
            <div className={classes.leftimg}>
              <h3 className={classes.leftcontent}>Our Trending Software Engineerig Courses</h3>
              <hr className={classes.line} />
              <img className={classes.leftimage} src='https://www.upgrad.com/blog/wp-content/uploads/2023/01/FSD.png' />
            </div>
            <Form />
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Introduction
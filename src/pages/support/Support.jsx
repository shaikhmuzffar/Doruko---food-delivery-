import React, { useState } from 'react'
import FAQData from './FAQData'
import './support.css'

// images 
import arrowUp from '../../assets/icons/whiteArrow.png'
import arrowRight from '../../assets/icons/blackArrow.png'
import send from '../../assets/icons/send.png'

// components
import Sandwitchmenu from '../../components/sandwitchMenu/Sandwitchmenu'
import SectionHeading from '../../components/global/sectionHeading/SectionHeading'


export default function Support() {
    const [accordian, setAccordian] = useState("");

    const sandwitchMenuLinks = [
        {
          lable:'back to shop',
          linkTo:"/",
          active:false
        },
        {
          lable:'support',
          linkTo:"/support",
          active:true,
        },
      ]
    return (
        <div>
            <div className="supportSection">
                <Sandwitchmenu sandwitchMenuLinks={sandwitchMenuLinks} />

                <div className="FAQs">
                    <SectionHeading title="Frequently Asked Questions" />
                    {
                        FAQData.map((FAQ, index) => <SingleFAQ key={index} index={index} accordian={accordian} setAccordian={setAccordian} FAQ={FAQ} />)
                    }
                </div>

                <div className="seperator"></div>

                <div className="contactForm">
                    <SectionHeading title="Still questions?" />
                    <form action="">
                        <div className="contactEmail">
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='user@gmail.con' />
                        </div>
                        <div className="contactMessage">
                            <label htmlFor="">Message</label>
                            <textarea name="" id="" style={{ resize: "none" }} placeholder='message...' ></textarea>
                        </div>

                        <a href="" className="btn-primary send"> <img src={send} alt="" /> Send</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

function SingleFAQ({ FAQ, index, accordian, setAccordian }) {
    const { question, answer } = FAQ;
    console.log(accordian)
    return (
        <div className="singleFAQ">
            <div className={accordian === `msg${index}` ? "FAQQuestion black" : "FAQQuestion"} >
                <span>{question}</span>
                <div className="Arrow" >
                    {
                        accordian === "msg" + index ? <img src={arrowUp} onClick={() => setAccordian("")} /> : <img src={arrowRight} onClick={() => setAccordian(`msg${index}`)} alt="" />
                    }
                    {/* <img src={accordian===`msg${index}`? arrowUp : arrowRight} alt=""/> */}
                </div>
            </div>
            {
                accordian === `msg${index}` ? <div className=" FAQAnswer show">
                    <span>{answer}</span>
                </div> : ""
            }
        </div>
    )
}

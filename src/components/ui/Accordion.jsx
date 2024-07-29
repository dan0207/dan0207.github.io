import AccordionShapeOpen from '../../assets/accordion-shape-open.png'
import AccordionShapeClose from '../../assets/accordion-shape-close.png'
import { useState } from 'react'

function Accordion({ accordion = { id: "", title: "Accordion Title", content: <>Accordion content</> } }) {
    const [accordionShape, setAccordionShape] = useState(AccordionShapeOpen)

    const toggleAccordion = () => {
        if (accordionShape == AccordionShapeOpen) setAccordionShape(AccordionShapeClose)
        else setAccordionShape(AccordionShapeOpen)
    }

    return (
        <>
            <div className="accordion d-flex flex-column">
                <button onClick={toggleAccordion} className="btn border border-0 text-primary position-relative text-center" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`}>
                    <img src={accordionShape} className="img-fluid" alt="" />
                    <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap">
                        <p>{accordion.title}</p>
                    </div>
                </button >
                <div id={`${accordion.id}`} className="collapse show px-4">
                    {accordion.content}
                </div>
            </div>
        </>
    )
}

export default Accordion
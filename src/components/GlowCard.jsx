import React from 'react'

const GlowCard = ({ card, children, index }) => {
    const cardRef = React.useRef([]);

    const handleMouseMove = (index) => (e)=>{
        const card = cardRef.current[index];
        if(!card)return;

        // to get mouse position on card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left -rect.width/2;
        const mouseY = e.clientY - rect.top - rect.height/2;

        // to get the angle of mouse position
        let angle = Math.atan2(mouseY, mouseX) * 180 / Math.PI;
        angle = (angle + 360) % 360;
        card.style.setProperty('--start', angle+60);
    }

    return (
        <div ref={(el)=>(cardRef.current[index] = el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10">
            <div className="glow"/>

            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
            {children}
        </div>
    )
}
export default GlowCard;
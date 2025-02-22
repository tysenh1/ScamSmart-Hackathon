import React from 'react'

interface CircleProgressProps {
    percentage: number;
    circleWidth: number;
}
  

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, circleWidth }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  
    return (
    <div>
        <svg 
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle 
                cx={circleWidth / 3}
                cy={circleWidth / 2} 
                strokeWidth="15px"
                r={radius} 
                className="fill-none stroke-white"
            />
            <circle 
                cx={circleWidth / 3} 
                cy={circleWidth / 2} 
                strokeWidth="15px"
                r={radius} 
                className='circle-progress'
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            />
        </svg>
    </div>
  )
}

export default CircleProgress
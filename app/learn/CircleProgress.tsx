import React from 'react'

interface CircleProgressProps {
    percentage: number;
    circleWidth: number;
}
  

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, circleWidth }) => {
  const radius = 40;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  
    return (
    <div>
        <svg className='mx-5 mt-12' 
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
            <circle 
                cx={circleWidth / 3}
                cy={circleWidth / 2} 
                strokeWidth="10px"
                r={radius} 
                className="fill-none stroke-white"
            />
            <circle 
                cx={circleWidth / 3} 
                cy={circleWidth / 2} 
                strokeWidth="10px"
                r={radius} 
                className='fill-white stroke-red-500 circle-stroke text-black'
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            >
            </circle>
            <text textAnchor='middle' className='font-bold text-xl text-center text-anchor' x='0' y='0' dy='83' dx='50'>{`${percentage}%`}</text>
        </svg>
    </div>
  )
}

export default CircleProgress
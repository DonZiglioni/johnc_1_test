import React, { useRef, useEffect } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return (
        <canvas ref={canvasRef} {...props} height={900} width={1000} />
    )
}

export default Canvas
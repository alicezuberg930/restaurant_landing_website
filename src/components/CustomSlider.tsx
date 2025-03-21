'use client'
import React, { useState, useRef, useEffect } from "react"
import '@/styles/slider.scss'
export interface Settings {
    children?: React.ReactNode,
    slidesToShow: number,
    autoplay?: boolean,
    autoplaySpeed?: number,
    infinite?: boolean,
    responsive?: { breakpoint: number, slidesToShow?: number, customMargin?: number }[],
    showDot?: boolean,
    showButton?: boolean,
    currentSlide?: number | null
}

const CustomSlider: React.FC<Settings> = ({
    children, slidesToShow = 1, autoplay = false, autoplaySpeed = 3000, infinite = true, responsive = [], showDot = true, showButton = true, currentSlide = null
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const totalSlides = React.Children.count(children)
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow)
    // Add states for touch/drag functionality
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [dragDistance, setDragDistance] = useState(0)
    const [customMargin, setCustomMargin] = useState(0)

    const updateSlidesToShow = () => {
        let newSlidesToShow = slidesToShow
        let newMargin = 0
        responsive.forEach((breakpoint) => {
            if (window.innerWidth <= breakpoint.breakpoint) {
                newSlidesToShow = breakpoint.slidesToShow ?? slidesToShow
                newMargin = breakpoint.customMargin ?? 0
            }
        })
        setVisibleSlides(newSlidesToShow)
        setCustomMargin(newMargin)
    }

    useEffect(() => {
        updateSlidesToShow()
        window.addEventListener("resize", updateSlidesToShow)
        return () => window.removeEventListener("resize", updateSlidesToShow)
    }, [])

    useEffect(() => {
        if (currentSlide != null) {
            setCurrentIndex(currentSlide)
        }
    }, [currentSlide])

    const nextSlide = () => {
        if (currentIndex < totalSlides - visibleSlides) {
            setCurrentIndex(currentIndex + 1)
        } else if (infinite) {
            setCurrentIndex(0) // Loop back to start
        }
        setDragOffset(0) // Reset drag offset when using button
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else if (infinite) {
            setCurrentIndex(totalSlides - visibleSlides) // Loop back to end
        }
        setDragOffset(0) // Reset drag offset when using buttons
    }

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => { if (!isDragging) nextSlide() }, autoplaySpeed)
            return () => clearInterval(interval)
        }
    }, [currentIndex, autoplay, autoplaySpeed, isDragging])

    // Touch/Drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true)
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        setStartX(clientX)
        setDragDistance(0)
    }

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const diff = clientX - startX
        setDragDistance(Math.abs(diff)) // Track total distance moved
        const slideWidth = sliderRef.current!.offsetWidth / visibleSlides
        const newOffset = (diff / slideWidth) * (100 / visibleSlides)
        setDragOffset(newOffset)
    }

    const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return
        setIsDragging(false)
        // Minimum pixels to consider it a drag instead of a click
        const MIN_DRAG_DISTANCE = 70
        // If movement is less than threshold, treat as click and don't change slide
        if (dragDistance < MIN_DRAG_DISTANCE) {
            setDragOffset(0)
            return
        }
        const clientX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX
        const diff = clientX - startX
        if (diff < 0) { // Dragging left (next)
            if (currentIndex < totalSlides - visibleSlides) {
                setCurrentIndex(currentIndex + 1)
            } else if (infinite) {
                setCurrentIndex(0)
            }
        } else if (diff > 0) { // Dragging right (previous)
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1)
            } else if (infinite) {
                setCurrentIndex(totalSlides - visibleSlides)
            }
        }
        setDragOffset(0)
    }

    const baseTranslate = currentIndex * (100 / visibleSlides)
    const totalTranslate = baseTranslate - dragOffset

    return (
        <div className={`slider-wrapper`}>
            <div className='slider-nav' ref={sliderRef}
                style={{
                    marginLeft: `-${customMargin * 4}px`,
                    marginRight: `-${customMargin * 4}px`,
                    transform: `translateX(-${totalTranslate}%)`,
                    transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {
                    React.Children.map(children, (child, i) => {
                        return (
                            <div key={i} style={{ width: `${100 / visibleSlides}%`, flex: '0 0 auto' }}>{child}</div>
                        )
                    })
                }
            </div>
            {showButton &&
                <>
                    <button onClick={prevSlide} className='prev-button'>
                        <div className="button-icon"></div>
                    </button>
                    <button onClick={nextSlide} className='next-button'>
                        <div className="button-icon"></div>
                    </button>
                </>
            }

            {/* Hiển thị dots */}
            {showDot ?
                <ol className='page-dots'>
                    {
                        React.Children.map(children, (child, i) => {
                            return (
                                <li key={i} className={`dot ${currentIndex == i ? 'is-selected' : ''}`}></li>
                            )
                        })
                    }
                </ol> : <></>
            }
        </div>
    )
}

export default CustomSlider
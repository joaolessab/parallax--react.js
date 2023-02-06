import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

const IndividualPage = ({ offset, gradient, onClick }) => {
    const getBackground = (color) => {
        if (color === 'pink') return 'linear-gradient(to right, deeppink 0%, coral 100%)'
        else if (color === 'teal') return 'linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
        else return 'linear-gradient(to right, tomato 0%, gold 100%)'
    }

    return (
        <>
            <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#20232f',                        
                        clipPath: 'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)',
                        position: 'absolute',
                        width: '170%',
                        height: '100%',
                        cursor: 'pointer'
                    }}
                />
            </ParallaxLayer>

            <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',         
                        clipPath: 'polygon(70% 0, 100% 0, 80% 100%, 50% 100%)',
                        position: 'absolute',
                        width: '170%',
                        height: '100%',
                        cursor: 'pointer',
                        background: getBackground(gradient)
                    }}
                />
            </ParallaxLayer>

            <ParallaxLayer
                offset={offset}
                speed={0.3}
                style={{
                    fontSize: '300px',
                    color: '#545864',
                    justifyContent: 'start'
                }}
            >
                <span>0{offset + 1}</span>
            </ParallaxLayer>
        </>
    )
}

const HorizontalSections = () => {
    const ref = useRef()

    return (
        <div>
            <Parallax
                ref={ref}
                pages={3}
                horizontal
            >
                <IndividualPage offset={0} gradient="pink" onClick={() => ref.current.scrollTo(1)} />
                <IndividualPage offset={1} gradient="teal" onClick={() => ref.current.scrollTo(2)} />
                <IndividualPage offset={2} gradient="tomato" onClick={() => ref.current.scrollTo(0)} />
            </Parallax>
        </div>
    )
}

export default HorizontalSections
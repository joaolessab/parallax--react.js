import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

const Cat = () => {
    const ref = useRef()

    return (
        <div
            style={{
                backgroundColor: 'black'
            }}
        >
            <Parallax pages={4} ref={ref}>
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundImage: 'url(/moon.png)',
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: 'url(/land.png)',
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer
                    offset={0.2}
                    speed={0.05}
                    onClick={() => ref.current.scrollTo(3)}
                >
                    <h2 style={{color: 'white'}}>Welcome to my Website</h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.2}
                    speed={2}
                    onClick={() => ref.current.scrollTo(0)}
                >
                    <h2 style={{color: 'white'}}>End of the website!</h2>
                </ParallaxLayer>
                
                <ParallaxLayer
                    sticky={{ start: 0.9, end: 2.5}}
                >
                    <img src='/cat.gif' alt='' />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Cat
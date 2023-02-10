import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

const Cat = () => {
    const ref = useRef()

    return (
        <div>
            <Parallax
                pages={4}
                ref={ref} 
                style={{
                    backgroundColor: 'black',
                }}
            >
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
                    style={{ textAlign: 'center' }}
                >
                    <h2 className='headlines'>
                        Check where this cat's going!
                    </h2>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.2}
                    speed={2}
                    onClick={() => ref.current.scrollTo(0)}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className='headlines'>
                        Just landed. Bye!
                    </h2>
                </ParallaxLayer>
                
                <ParallaxLayer
                    sticky={{ start: 0.9, end: 2.5}}
                    style={{ textAlign: 'center' }}
                >
                    <img src='/cat.gif' alt='' />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Cat
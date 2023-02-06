import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Morty = () => {    
    const alignCenter = { display: 'flex', alignItems: 'center' }

    const card = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.25rem',
        height: '10rem',
        width: '25%',
        textAlign: 'center',
        borderRadius: '10px'
    }

    return (
        <div>
            <Parallax
                pages={5}
                style={{ backgroundColor: 'blue' }}
            >
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={1}
                    style={{ ...alignCenter, justifyContent: 'center', backgroundColor: 'yellow' }}
                >
                    <p style={{fontSize: '1.5rem'}}>Order Morty</p>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1, end: 3 }}
                    style={{ ...alignCenter, justifyContent: 'flex-start' }}
                >
                    <img src='/morty-captured.gif' alt='' width='55%' />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end', backgroundColor: 'white' }}
                >
                    <div style={{ ...card, marginRight: '15%', backgroundColor: '#9d65d0' }}>
                        <img src='/portal.gif' alt='' width='100%' />
                        <img src='/portal.gif' alt='' width='100%' />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={2}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end', backgroundColor: 'black' }}
                >
                    <div style={{ ...card, marginRight: '15%', backgroundColor: '#5b65ad' }}>
                        <img src='/portal.gif' alt='' width='100%' />
                        <img src='/portal.gif' alt='' width='100%' />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={3}
                    speed={1.5}
                    style={{ ...alignCenter, justifyContent: 'flex-end', backgroundColor: 'purple' }}
                >
                    <div style={{ ...card, marginRight: '15%', backgroundColor: '#5b9547' }}>
                        <img src='/portal.gif' alt='' width='100%' />
                        <img src='/portal.gif' alt='' width='100%' />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer 
                    offset={4}
                    speed={1.5}
                >
                    <p>Well, Morty is safe!</p>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Morty
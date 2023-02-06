import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Woody = () => {    
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
            <Parallax pages={5} style={{ backgroundColor: 'blue' }}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <p style={{fontSize: '1.5rem'}}>Scroll down</p>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div style={{ ...card, marginLeft: '15%', backgroundColor: '#ff6d6d' }}>
                        <p>I'm a sticky layer</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div style={{ ...card, marginRight: '15%', backgroundColor: '#9d65d0' }}>
                        <p>I'm not</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div style={{ ...card, marginRight: '15%', backgroundColor: '#5b65ad' }}>
                        <p>Neither am I</p>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Woody
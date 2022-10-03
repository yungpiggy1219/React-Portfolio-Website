import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
        <div className="container ">
            <h1>Hello, <br />
                my name is Yung-Chu, <br />
                <div className='typing'> <div className='fixWord'>and I am a</div>
                    <Typewriter
                        options={{
                            strings: ['designer.', ' gamer.', ' researcher.', ' developer.'],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 30,
                            pauseFor: 250,
                            skipAddStyles: false,
                        }}
                    />
                </div>
            </h1>
        </div >
    );
};


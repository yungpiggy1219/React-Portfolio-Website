export default function About() {
  return (
    <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div class="container">
                    <h1>Hello,
                        my name is Yung-Chu,
                        and I am a <span class="typed-text"></span><span class="cursor">&nbsp;</span></h1>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./coding.svg"
                />
            </div>
        </div>
    </section>
);
}
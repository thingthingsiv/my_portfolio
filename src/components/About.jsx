
const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Welcome! I'm a QA Automation Engineer with 3 years of experience in 
                functional, UI , API, and performance testing in the banking sector. Passionate 
                about DevOps exploring CI/CD, Docker, Kubernetes, and infrastructure 
                automation to bridge testing and deployment. 
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                    <span className="text-pink-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img 
                       src="images/logo2.png" 
                       alt="Logo"
                       width={40}
                       height={40}
                       className="ml-auto md:w-[80px] md:h-[50px]" />
                </div>

            </div>

        </div>

    </section>
  )
}

export default About
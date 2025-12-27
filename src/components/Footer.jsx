import { ButtonPrimary } from "./Button";


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'skill',
      href: '#skill'
    },
    {
      label: 'Experience',
      href: '#experience'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/thingthingsiv',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/thingthing-siv/',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/sivthingthing',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/x_scaredycat',
    },
    
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                <h2 className="headline-1 mb-8 lg:max-w-[12ch] ">
                    Let&apos;s work together today!
                </h2>
                <ButtonPrimary 
                   href="mailto:sivthingthing@gmail.com"
                   label="Start project"
                   icon=""
                />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>

                        <ul>
                            {sitemap.map(({label, href}, key)=>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {socials.map(({label, href}, key)=>(
                                <li key={key}>
                                    <a 
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                    >
                                        {label}
                                    </a>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                href="" 
                className=""
                >
                    <img 
                    src="images/logo2.png"
                    width={80}
                    height={50} 
                    alt="Logo" />

                </a>
                <p className="text-zinc-500 text-sm">
                    &copy; 2026 <span className="text-zinc-200">sivthingthing</span>
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer
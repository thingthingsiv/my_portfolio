
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: 'images/katalon.png',
    label: 'Katalon',
    desc: 'Test Automation',
  },
  {
    imgSrc: 'images/appium.png',
    label: 'Appium',
    desc: 'Mobile Automation',
  },
  {
    imgSrc: 'images/java.svg',
    label: 'Java',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/groovy.png',
    label: 'Groovy',
    desc: 'Scripting Language',
  },
  {
    imgSrc: 'images/jmeter.png',
    label: 'JMeter',
    desc: 'API & Performance Testing',
  },
  {
    imgSrc: 'images/jenkins.png',
    label: 'Jenkins',
    desc: 'CI/CD Automation',
  },
  {
    imgSrc: 'images/github.png',
    label: 'Git & GitHub',
    desc: 'Version Control',
  },
  {
    imgSrc: 'images/dockers.webp',
    label: 'Docker',
    desc: 'Containerization',
  },
  {
    imgSrc: 'images/kubernet.png',
    label: 'Kubernetes',
    desc: 'Container Orchestration',
  },
  {
    imgSrc: 'images/Argocd.png',
    label: 'Argo CD',
    desc: 'GitOps Deployment',
  },
  {
    imgSrc: 'images/ansible.png',
    label: 'Ansible',
    desc: 'Automation Tool',
  },
  {
    imgSrc: 'images/Google Cloud.png',
    label: 'Google Cloud',
    desc: 'Cloud Platform',
  },
];

  
  const Skills = () => {
    return (
      <section id="skill" className="section" >
        <div className="container">
          <h2 className="headline-2">Essential Tools I Use</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Here are the tools and languages that I currently use in my daily work
            and projects.
          </p>
  
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItems.map(({imgSrc, label, desc}, key) =>(
                    <SkillCard 
                    
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}/>
                ))
            }
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
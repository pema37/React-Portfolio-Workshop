import React from 'react';
import { MdDeveloperMode } from "react-icons/md";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import "../componentStyles/Skills.css";


const SkillIcon = ({ skill }) => (
  <div className='skill-card'>
    <h3 className='skill-icon'>{skill.Icon}</h3>
    <p className='skill-title'>{skill.name}</p>
  </div>
);


const Skills = () => {
  const skills = [
    {
      name: 'Full Stack Web Development',
      Icon: <MdDeveloperMode aria-label="Full Stack Web Development" />
    },
    {
      name: 'JavaScript',
      Icon: <IoLogoJavascript aria-label="JavaScript" />
    },
    {
      name: 'HTML5',
      Icon: <IoLogoHtml5 aria-label="HTML5" />
    },
    {
      name: 'CSS3',
      Icon: <IoLogoCss3 aria-label="CSS3" />
    },
    {
      name: 'NodeJS',
      Icon: <IoLogoNodejs aria-label="NodeJS" />
    },
  ];

  
  return (
    <section className='skills'>
      <h2 id='skillsH2'>Skills</h2>
        <div className="skill-holder">
        {skills.map((skill, i) => <SkillIcon skill={skill} key={i} />)}
      </div>
    </section>
  )
}

export default Skills;


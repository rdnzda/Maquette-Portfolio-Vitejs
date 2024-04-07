import { Skill } from "./Skill";

export const Skills = () => {
    return (
        <div className="skills-container">
            <h3>Mes compétences</h3>
            <div className="skills">
                <h4>Front-End</h4>
                <div className="frontend">
                    <Skill skill='HTML & CSS' number='90' id='c-a'/>
                    <Skill skill='JavaScript' number='75' id='c-b'/>
                    <Skill skill='React' number='60' id='c-c'/>
                </div>
                <h4>Back-End</h4>
                <div className="backend">
                    <Skill skill='NodeJS' number='25' id='c-d'/>
                </div>
            </div>
        </div>
    ) 
}
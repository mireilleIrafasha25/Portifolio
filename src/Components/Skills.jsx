
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'JavaScript', percentage: 65 },
  { name: 'CSS', percentage: 80 },
  { name: 'C++', percentage: 70 },
  { name: 'Tailwind css', percentage: 86 },
  { name: 'MySql', percentage: 60},
  { name: 'Java', percentage: 65 },
  { name: 'React', percentage: 70 },
];

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: '#10B981', // Tailwind text-green-400
                    pathColor: '#10F999',
                    trailColor: '#1F2937',
                  })}
                />
              </div>
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

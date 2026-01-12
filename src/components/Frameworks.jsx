import { OrbitingCircles } from "./OrbitingCircles";

const Frameworks = () => {
  const skills = [
    "rest",
    "typescript",
    "cplusplus",
    "github",
    "css3",
    "writing",
    "express",
    "git",
    "html5",
    "javascript",
    "nextjs",
    "react",
    "nodejs",
    "tailwindcss",
    "vitejs",
    "mongodb",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default Frameworks;

const Icon = ({ src }) => (
  <img
    src={src}
    alt=""
    className="rounded-sm duration-200 hover:scale-110"
  />
);

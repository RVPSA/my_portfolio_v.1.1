type SkillCardProps = {
  skillType: string;
  skills: string[];
};
/**
 * Skill showcase component
 * @param SkillCardProps
 */
const SkillCard = (prop: SkillCardProps) => {
  return (
    <>
      <div className="text-white border-[#494d56] border-2 w-full">
        <div className="border-[#494d56] border-b-2 p-2">{prop.skillType}</div>
        <div className="p-2">
          {prop.skills.map((data,index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SkillCard;

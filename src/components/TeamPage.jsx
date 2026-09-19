import MemberCard from "./MemberCard.jsx";

const TeamPage = ({ members }) => {
  return (
    <section className="team-section">
      <div className="section-heading">
        <h2>Our Team</h2>

        <p>{members.length} team members</p>
      </div>

      <div className="team-grid">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            avatar={member.avatar}
            bio={member.bio}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
const MemberCard = ({
  name,
  role,
  avatar,
  bio,
}) => {
  return (
    <div className="member-card">
      <img
        src={avatar}
        alt={`${name} avatar`}
        className="member-avatar"
      />

      <h3>{name}</h3>

      <p className="member-role">
        {role}
      </p>

      <p className="member-bio">
        {bio}
      </p>
    </div>
  );
};

export default MemberCard;
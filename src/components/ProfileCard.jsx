const ProfileCard = ({ name, title, avatar, location }) => {
  return (
    <div className="profile-card">
      <img
        src={avatar}
        alt={`${name} profile`}
        className="profile-avatar"
      />

      <h3>{name}</h3>

      <p className="profile-title">{title}</p>

      <p className="profile-location">
        📍 {location}
      </p>
    </div>
  );
};

export default ProfileCard;
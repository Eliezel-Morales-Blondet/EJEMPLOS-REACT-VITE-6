export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    },
    {
      id: 2,
      name: "Tiffany",
      title: "Gerente de ingeniería",
      bio: "He trabajado en tecnología por 15 años y me encanta ayudar a las personas a crecer en esta industria."
    },
    {
      id: 3,
      name: "Doug",
      title: "Back-End developer",
      bio: "He sido desarrollador de software por más de 20 años y me encanta trabajar con Go y Rust."
    }
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
        <Card
          name="Mark"
          title="Front-End developer"
          bio="I like to work with different front-end technologies and play video games."
        />
        <Card
          name="Tiffany"
          title="Engineering manager"
          bio="I have worked in tech for 15 years and love to help people grow in this industry."
        />
        <Card
          name="Doug"
          title="Back-End developer"
          bio="I have been a software developer for over 20 years and I love working with Go and Rust."
        />
    </div>
  );
}
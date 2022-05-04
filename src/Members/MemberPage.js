import './MemberPage.css';
import MemberCard from './MemberCard';

function MemberPage() {
  return (
    <>
      <h1 style={{ padding: "auto" }}>Team Name</h1>
      <div className="container">
        <MemberCard
          name="Shaunak Chandra"
          designation="Front-End Web Developer"
          gitlink="https://github.com/Kingsky1t"
          instalink=""
          linkedinlink="https://www.linkedin.com/in/shaunak-chandra-6b3363215/"
          link=""
        />
        <MemberCard
          name="Shaunak Chandra"
          designation="Front-End Web Developer"
          gitlink="https://github.com/Kingsky1t"
          instalink=""
          linkedinlink="https://www.linkedin.com/in/shaunak-chandra-6b3363215/"
          link=""
        />
        <MemberCard
          name="Shaunak Chandra"
          designation="Front-End Web Developer"
          gitlink="https://github.com/Kingsky1t"
          instalink=""
          linkedinlink="https://www.linkedin.com/in/shaunak-chandra-6b3363215/"
          link=""
        />
        <MemberCard
          name="Shaunak Chandra"
          designation="Front-End Web Developer"
          gitlink="https://github.com/Kingsky1t"
          instalink=""
          linkedinlink="https://www.linkedin.com/in/shaunak-chandra-6b3363215/"
          link=""
        />
      </div>
    </>
  );
}

export default MemberPage;

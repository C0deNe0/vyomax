import TeamCarousel from "@/components/teamCarousel";
import { teamMembers } from "@/constants/constants";

export default function About() {
  return (
    <main className="min-h-screen">
      <TeamCarousel team={teamMembers} title="Meet Our Team 👨‍🚀" />
    </main>
  );
}

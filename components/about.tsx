import TeamCarousel from "@/components/teamCarousel";
import { teamMembers } from "@/constants/constants";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0b153b] text-white flex flex-col items-center justify-center py-12 px-4">
      <TeamCarousel team={teamMembers} title="Meet Our Team" />
    </main>
  );
}

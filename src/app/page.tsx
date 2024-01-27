import HeroSection from "../components/HeroSection/Index";
import DownloadSection from "@/components/DownloadSection/Index";
import EmployeeSection from "@/components/EmployeeSection/Index";
import FeedbackSection from "@/components/FeedbackSection/Index";
import TaskSection from "@/components/TaskSection/Index";
import Features from "../components/Features";
import Management from "../components/Management";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <main data-testid="temp" style={{ backgroundColor: "#F3F4F6" }}>
      <HeroSection />
      <Features />
      <Management />
      <TeamSection />
      <TaskSection />
      <EmployeeSection />
      <DownloadSection />
      <FeedbackSection />
    </main>
  );
}

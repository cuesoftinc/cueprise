import styles from "./page.module.css";
import HeroSection from "../components/HeroSection/Index";
import DownloadSection from "@/components/DownloadSection/Index";
import EmployeeSection from "@/components/EmployeeSection/Index";
import FeedbackSection from "@/components/FeedbackSection/Index";
import TaskSection from "@/components/TaskSection/Index";
import Features from "../components/Features";

export default function Home() {
  return (
    <main data-testid="temp" className={styles.main} style={{backgroundColor:'#F3F4F6'}}>
      <HeroSection />
      <Features />
      <TaskSection />
      <EmployeeSection />
      <DownloadSection />
      <FeedbackSection />
    </main>
  );
}

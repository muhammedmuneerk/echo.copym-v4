import RWARoadmap from "./sections/RWARoadmap";
import InvestorRoadmap from "./sections/InvestorRoadmap";
export default function Roadmap() {
  return (
    <div className="min-h-screen bg-green-50">
      <RWARoadmap/>
      <InvestorRoadmap />
    </div>
  );
}
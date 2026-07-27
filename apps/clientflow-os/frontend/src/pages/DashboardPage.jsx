import { Link } from "react-router-dom";
import SectionCard from "../components/SectionCard";
import WorkQueueList from "../components/dashboard/WorkQueueList";
import NextActionsList from "../components/dashboard/NextActionsList";
import SummarySnapshot from "../components/dashboard/SummarySnapshot";
import EnvironmentStatus from "../components/dashboard/EnvironmentStatus";
import {
  workQueue,
  nextActions,
  summarySnapshot,
  environment,
} from "../lib/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
      <SectionCard
        title="Work Queue"
        description="The items that should move first."
      >
        <WorkQueueList items={workQueue} />
      </SectionCard>

      <div className="space-y-6">
        <SectionCard
          title="Next Actions"
          description="Choose a lane, then move into the route."
        >
          <NextActionsList items={nextActions} />
        </SectionCard>

        <SectionCard
          title="Summary Snapshot"
          description="Small context blocks that support quick decisions."
        >
          <SummarySnapshot items={summarySnapshot} />
        </SectionCard>

        <SectionCard
          title="Environment"
          description="Light build context for the current workspace."
        >
          <EnvironmentStatus items={environment} />
        </SectionCard>
      </div>
    </div>
  );
}
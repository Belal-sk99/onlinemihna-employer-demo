import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MOCK_JOBS } from "@/shared/lib/mock-data";
import type { JobStatus, JobType } from "@/shared/types";

const STATUS_STYLES: Record<JobStatus, string> = {
  published:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  draft: "border-border bg-muted text-muted-foreground",
  closed: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
};

const TYPE_LABELS: Record<JobType, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  gig: "GIG",
};

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function JobList() {
  return (
    <Card className="border-border/70">
      <CardHeader>
        <CardTitle className="text-lg">Job Postings</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">
                  Title
                </th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">
                  Type
                </th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">
                  Salary
                </th>
                <th className="px-6 py-3 text-center font-medium text-muted-foreground">
                  Applications
                </th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">
                  Posted
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_JOBS.map((job) => (
                <tr
                  key={job.id}
                  className="border-b last:border-0 transition-colors hover:bg-muted/30"
                >
                  <td className="px-6 py-4 font-medium">{job.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {TYPE_LABELS[job.type]}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {job.salary}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {job.applicationsCount}
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="outline"
                      className={`capitalize ${STATUS_STYLES[job.status]}`}
                    >
                      {job.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {formatDate(job.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}

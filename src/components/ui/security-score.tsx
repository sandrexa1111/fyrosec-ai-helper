import { cn } from "@/lib/utils";

interface SecurityScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SecurityScore({ score, size = "md", className }: SecurityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "from-success/20 to-success/10";
    if (score >= 60) return "from-warning/20 to-warning/10";
    return "from-destructive/20 to-destructive/10";
  };

  const sizeClasses = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-32 h-32 text-4xl",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full border-4 bg-gradient-to-br font-bold",
        sizeClasses[size],
        getScoreColor(score),
        getScoreBackground(score),
        className
      )}
      style={{
        borderColor: `hsl(var(--${score >= 80 ? 'success' : score >= 60 ? 'warning' : 'destructive'}))`,
      }}
    >
      <div className="text-center">
        <div className={getScoreColor(score)}>{score}</div>
        {size !== "sm" && (
          <div className="text-xs text-muted-foreground font-normal">SCORE</div>
        )}
      </div>
      {score >= 80 && (
        <div className="absolute inset-0 rounded-full animate-pulse-glow" />
      )}
    </div>
  );
}
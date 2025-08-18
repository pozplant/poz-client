// src/features/home/hooks/useHomeData.ts
import { useEffect, useState } from "react";

interface TaskData {
  currentTask: string;
  progress: number;
}

export default function useHomeData() {
  const [task, setTask] = useState<TaskData>({
    currentTask: "",
    progress: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHomeData() {
      setLoading(true);
      try {
        const res = await fetch("https://your-backend.com/api/home");
        const data = await res.json();

        setTask({
          currentTask: data.task.currentTask,
          progress: data.task.progress,
        });

        setError(null);
      } catch (err: any) {
        console.error(err);
        setError("할 일 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchHomeData();
  }, []);

  return { task, loading, error };
}

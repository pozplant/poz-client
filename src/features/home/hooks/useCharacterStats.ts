import { useEffect, useState } from "react";

interface CharacterData {
  nickname: string;
  messages: string[];
}

interface StatsData {
  level: number;
  experience: number;
  plantsCollected: number;
}

export default function useHomeData() {
  const [character, setCharacter] = useState<CharacterData>({
    nickname: "NICKNAME",
    messages: ["환영합니다!"],
  });

  const [stats, setStats] = useState<StatsData>({
    level: 1,
    experience: 0,
    plantsCollected: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHomeData() {
      setLoading(true);
      try {
        const res = await fetch("https://your-backend.com/api/home");
        const data = await res.json();

        setCharacter({
          nickname: data.character.nickname,
          messages: data.character.messages || ["환영합니다!"],
        });

        setStats({
          level: data.stats.level,
          experience: data.stats.experience,
          plantsCollected: data.stats.plantsCollected,
        });

        setError(null);
      } catch (err: any) {
        console.error(err);
        setError("캐릭터 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchHomeData();
  }, []);

  return { character, stats, loading, error };
}

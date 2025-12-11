import { useEffect, useState } from "react";
import { Card, Button } from "@radix-ui/themes";
import { FaCalendarDays, FaLink } from "react-icons/fa6";
import { htmlToText } from "html-to-text";

// Velog RSS → JSON 변환 API
const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=https://v2.velog.io/rss/@byo&_=${Date.now()}`;

const WritingSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Velog RSS fetch
  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const res = await fetch(RSS_API, { cache: "no-store" });
        const data = await res.json();

        if (!data.items) {
          throw new Error("RSS 데이터가 비어있습니다.");
        }

        // 날짜 정렬 (최신순)
        const sorted = data.items.sort(
          (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
        );

        // 상위 3개만
        const limited = sorted.slice(0, 3);

        // description → Markdown-like text로 변환 + 120자 미리보기
        const processed = limited.map((item) => ({
          title: item.title,
          url: item.link,
          date: item.pubDate,
          preview:
            htmlToText(item.description, {
              wordwrap: false,
            }).slice(0, 120) + "...",
        }));

        setPosts(processed);
      } catch (err) {
        console.error(err);
        setError("Velog RSS를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  return (
    <section id="writing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Writing & Contributions
        </h2>

        {/* Loading */}
        {loading && <p className="text-center text-gray-500">불러오는 중...</p>}

        {/* Error */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} size="3" className="grid grid-cols-3">
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <FaCalendarDays className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("ko-KR")}
              </div>

              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {post.preview}
              </p>

              <Button asChild variant="outline" size="2">
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  <FaLink className="w-4 h-4 mr-2" />
                  Read Article
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;

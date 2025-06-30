import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { BlogCard } from "@/components/custom";
import { getFeaturedPosts } from "@/data/blog";

export const BlogSection = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const featuredPosts = getFeaturedPosts();
  const postsToShow = showAll ? featuredPosts : featuredPosts.slice(0, 2);

  return (
    <section 
      className="md:mx-32 mx-8 mb-32"
      aria-labelledby="blog-heading"
    >
      <div className="pb-20">
        <h2 
          id="blog-heading"
          className="text-5xl md:text-7xl font-bold text-black dark:text-white max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Latest <br />
          <span className="text-4xl md:text-6xl">Blog Posts</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-neutral-600 dark:text-neutral-200 max-w-sm mx-auto text-center">
          Insights, tutorials, and thoughts on modern web development and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {postsToShow.map((post) => (
          <article key={post.id}>
            <BlogCard post={post} />
          </article>
        ))}
      </div>

      {featuredPosts.length > 2 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
            aria-expanded={showAll}
            aria-controls="blog-posts-grid"
          >
            {showAll ? (
              <>
                Show Less <ArrowUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show More <ArrowDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
import { Link } from "@tanstack/react-router";
import { Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/packages";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  return (
    <Link to="/blog" className="group block overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>{date}</span>
          <span className="h-1 w-1 rounded-full bg-orange" />
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readMins} min read</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-deep group-hover:text-orange">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
          <span className="text-xs font-semibold text-navy-deep">By {post.author}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange">Read <ArrowUpRight className="h-3.5 w-3.5" /></span>
        </div>
      </div>
    </Link>
  );
}

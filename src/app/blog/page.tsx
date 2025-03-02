import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock3Icon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BlogHome() {
  // In a real app, you would fetch this data from an API or CMS
  const featuredPost = {
    slug: "animochat-matchmaking-v3",
    title: "AnimoChat new match making logic",
    excerpt:
      "We've updated our match making logic to help you find the perfect match!",
    date: "March 2, 2025",
    readTime: "8 min read",
    category: "Animochat",
    coverImage: "/placeholder.svg?height=600&width=1200",
  };

  //   const recentPosts = [
  //     {
  //       slug: "mastering-typescript-for-react-developers",
  //       title: "Mastering TypeScript for React Developers",
  //       excerpt:
  //         "Discover how TypeScript can improve your React development workflow and help catch errors early.",
  //       date: "February 25, 2025",
  //       readTime: "6 min read",
  //       category: "TypeScript",
  //       coverImage: "/placeholder.svg?height=400&width=600",
  //     },
  //     {
  //       slug: "the-power-of-server-components",
  //       title: "The Power of Server Components",
  //       excerpt:
  //         "Explore how React Server Components are changing the way we think about rendering and data fetching.",
  //       date: "February 18, 2025",
  //       readTime: "5 min read",
  //       category: "React",
  //       coverImage: "/placeholder.svg?height=400&width=600",
  //     },
  //     {
  //       slug: "optimizing-images-for-web-performance",
  //       title: "Optimizing Images for Web Performance",
  //       excerpt:
  //         "Learn techniques to optimize your website's images for better performance and user experience.",
  //       date: "February 10, 2025",
  //       readTime: "7 min read",
  //       category: "Performance",
  //       coverImage: "/placeholder.svg?height=400&width=600",
  //     },
  //   ];

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-vercel-black">
          Nhat Vu's blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to my blog eme
        </p>
      </header>

      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
              <h3 className="text-2xl font-bold mb-2">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-4">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span className="mr-4">{featuredPost.date}</span>
                <Clock3Icon className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
              </div>
              <Button asChild className="w-fit">
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read Article <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <Button variant="outline" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <Badge className="mb-2">{post.category}</Badge>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock3Icon className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div> */}
      {/* </section> */}
    </div>
  );
}

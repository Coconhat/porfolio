import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  CalendarIcon,
  Clock3Icon,
  ArrowLeftIcon,
  MessageSquareIcon,
  ShareIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const posts = {
  "animochat-matchmaking-v3": {
    title: "AnimoChat's Matchmaking v3: Third Time's a Charm",
    excerpt:
      "We've completely rebuilt our matchmaking system with 3 waiting rooms to save you from awkward re-matches!",
    date: "March 2, 2025",
    readTime: "6 min read",
    category: "AnimoChat",
    author: {
      name: "Nhat Vu Le",
      avatar: "/tyron-avatar.svg",
      title: "(eme)",
    },
    content: `
      
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Our previous matchmaking system was like throwing strangers into a room blindfolded and hoping they'd hit it off. It worked! Mostly. But there was one tiny problem: the dreaded re-match. You know that moment when you've just finished an awkward conversation with someone, hit "next," and—surprise!—there they are again? It's the digital equivalent of running into your ex at the grocery store right after your breakup. Not fun.</p>

         <p class="text-lg text-vercel-black  mt-5  mb-3"> for more information about the previous match making please read tyron's blog <a href="https://blog.tyronscott.me/blog/animochat"><span class="text-blue-600">here</span></a></p>

       
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">matchmaking v3: Third Time’s a Charm</h2>

        

        <p class="text-lg leading-relaxed mb-6 text-vercel-black">So, we've revamped our matchmaking logic. Instead of one waiting room where everyone mingles like awkward teenagers at a school dance, we now have THREE waiting rooms:</p>
        


        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">This means if you and your chat partner decide to part ways, you'll each be shuffled into separate waiting rooms—dramatically reducing the chance of an awkward digital reunion. It's like having bouncers escort you out different exits after a failed blind date.</p>
        
      
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">the technical magic (or, how to avoid digital awkwardness at scale)</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Behind the scenes, our matchmaking is still powered by the same Postgres functions—our digital cupids—but now they're working triple shifts. Here's a simplified look at how the magic happens:</p>
        
     <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"><code>CREATE OR REPLACE FUNCTION find_match(_user_id text)
RETURNS TABLE (match_id UUID, user1 text, user2 text, status TEXT) AS $$
BEGIN
  -- If already matched, return current match
  IF already_matched THEN
    RETURN QUERY SELECT match_info;
  END IF;

  -- If just left a match, move to a different waiting room
  IF just_left THEN
    INSERT INTO waiting_room (user_id, timestamp) ON CONFLICT DO NOTHING;
  END IF;

  -- Remove inactive users from waiting room
  DELETE FROM waiting_room WHERE inactive;

  -- Try to find a match in the same waiting room
  IF match_found THEN
    DELETE FROM waiting_room WHERE matched;
    INSERT INTO matches (user1, user2, status) VALUES (you, match, 'active');
    RETURN QUERY SELECT match_details;
  ELSE
    -- Stay in waiting room
    RETURN QUERY SELECT waiting_status;
  END IF;
END;
$$ LANGUAGE plpgsql;</code></pre>

        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">If this made absolutely no sense to you, here's the ELI5 version:</p>
        
        <ol class="list-decimal pl-6 mb-8 space-y-2 text-vercel-black">
          <li class="text-lg">We check if you're already chatting with someone (no double-dating here)</li>
          <li class="text-lg">if you are in the waiting room, match with the same person in that waiting room.
              <li class="text-lg">If you just ghosted someone, you go to another room while the person you ghosted goes to a different room</li>
             
         
          </li>
          <li class="text-lg">We clean up by removing room that are ended</li>
          <li class="text-lg">We find you a match from your waiting room (that dont contain your ex-chat) </li>
          <li class="text-lg">If we find a match, we introduce you two and kick you both out of the waiting rooms :D</li>
          <li class="text-lg">If not, you keep waiting (maybe practice your opening lines?)</li>
        </ol>
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">so what does this mean for you?</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">For the average AnimoChat user, this means less digital déjà vu and more fresh conversations. You can now hit "next" with confidence, knowing that your paths are unlikely to cross again with that person who thought your joke about String theory was "actually quantum physics" (ugh).</p>
        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Think of it as our gift to the socially awkward (which, let's be honest, is most of the internet). We've created a system where you can bail on a conversation and not have to worry about explaining yourself if you match again 30 seconds later. lol</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 italic my-8">
          <p class="text-xl text-gray-600">In a world where digital connections are random, the least we can do is make sure they're not repetitively random.</p>
        </blockquote>
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">wrapping up</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">AnimoChat's three-room matchmaking isn't just a technical upgrade—it's an awkwardness avoidance system.</p>
        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">So next time you find yourself in a delightfully random conversation on AnimoChat, remember: there's a complex system of digital bouncers working tirelessly to ensure your next match will be someone completely new to judge your memes and typos.</p>
        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Happy chatting! And remember, if the matchmaking ever feels slow, it's not the system—it's just that everyone else found their digital soulmate before you. (Just kidding... mostly.)</p>
        
    <p class="text-lg leading-relaxed mt-8 italic text-gray-600">P.S. To our competitors still using single-waiting-room systems: We love a good throwback! Hope your customers enjoy the retro experience—maybe throw in some dial-up sounds for the full effect? But hey, if you ever decide to join us in 2025, we’ll save you a seat (no waiting room required). 😉</p>
      `,
  },
};

// interface BlogPostProps {
//   params: { slug: string };
// }

// export async function generateStaticParams() {
//   return [{ slug: "animochat-matchmaking-v3" }];
// }

export default function BlogPost() {
  //   const { slug } = params;
  const post = posts["animochat-matchmaking-v3"];

  //   if (!post) {
  //     notFound();
  //   }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 pl-0 hover:bg-gray-100">
          <Link href="/">
            <ArrowLeftIcon className="mr-2 h-4 w-4 text-vercel-black" />
            <span className="text-vercel-black">Back to all posts</span>
          </Link>
        </Button>

        <div className="mb-2">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            {post.category}
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-vercel-black">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

        <div className="flex items-center mb-8">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-vercel-black">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.title}</p>
          </div>
          <Separator orientation="vertical" className="mx-4 h-8" />
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
            <span className="mr-4">{post.date}</span>
            <Clock3Icon className="h-4 w-4 mr-1 text-gray-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-vercel-black">
                      Written by {post.author.name}
                    </p>
                    <p className="text-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>
                <div className="flex space-x-2"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

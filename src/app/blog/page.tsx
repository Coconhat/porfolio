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

const post = {
  title: "AnimoChat's Matchmaking v3: Third Time's a Charm",
  excerpt:
    "We've completely rebuilt our matchmaking system with 3 waiting rooms to save you from awkward re-matches!",
  date: "March 2, 2025",
  readTime: "6 min read",
  category: "AnimoChat",
  author: {
    name: "Nhat Vu",
    avatar: "/ememememe",
    title: "(eme)",
  },
  content: `
      
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Our previous matchmaking system was like throwing strangers into a room blindfolded and hoping they'd hit it off. It worked, mostly. But there was one tiny problem: the dreaded re-match. You know that moment when you've just finished an awkward conversation with someone, hit "next," and there they are again? It's like leaving an awkward coffee shop chat, only to find you parked next to each other. Not fun.</p>

<p class="text-lg text-vercel-black mt-5 mb-3">
  For more information about the previous matchmaking, please read Tyron's blog 
  <a href="https://blog.tyronscott.me/blog/animochat" target="_blank" rel="noopener noreferrer">
    <span class="text-blue-600">here</span>
  </a>
</p>


       
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">Matchmaking v3: Third Time’s a Charm</h2>

        

        <p class="text-lg leading-relaxed mb-6 text-vercel-black">So, we've revamped our matchmaking logic. Instead of one waiting room where everyone might get rematch with the same person, we now have THREE waiting rooms:</p>
        


        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">This means if you and your chat partner decide to part ways, you'll each be shuffled into separate waiting rooms—dramatically reducing the chance of an awkward reunion. It's like having bouncers escort you out different exits after an awkward meetup :D</p>
        
      
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">The technical magic (or, how to avoid digital awkwardness at scale)</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Behind the scenes, our matchmaking is still powered by the same Postgres functions but now they're working triple shifts. Here's a simplified look at how the magic happens:</p>
        
     <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"><code>CREATE OR REPLACE FUNCTION find_match(user_id text)
RETURNS TABLE (match_id UUID, user1 text, user2 text, status TEXT) AS $$
BEGIN
  -- If already matched, return current match
  IF (SELECT EXISTS(SELECT 1 FROM matches WHERE (user1 = user_id OR user2 = user_id) AND status = 'active')) THEN
    RETURN QUERY SELECT m.match_id, m.user1, m.user2, 'existing'::TEXT 
                 FROM matches m 
                 WHERE (m.user1 = user_id OR m.user2 = user_id) AND m.status = 'active';
    RETURN;
  END IF;

  -- Clear any existing waiting status
  DELETE FROM waiting_room WHERE user_id = user_id;
  
  -- Remove inactive users
  DELETE FROM waiting_room WHERE NOT is_online(user_id);

  -- Assign to a random waiting room (1-3)
  INSERT INTO waiting_room (user_id, room_number) 
  VALUES (user_id, floor(random() * 3) + 1);
  
  -- Try to find a match in the same waiting room
  WITH potential_match AS (
    SELECT wr.user_id AS matched_user
    FROM waiting_room wr
    WHERE wr.user_id != user_id 
      AND wr.room_number = (SELECT room_number FROM waiting_room WHERE user_id = user_id)
    ORDER BY RANDOM()
    LIMIT 1
    FOR UPDATE SKIP LOCKED
  )
  SELECT matched_user INTO matched_user FROM potential_match;
  
  IF matched_user IS NOT NULL THEN
    -- Found a match!
    DELETE FROM waiting_room WHERE user_id IN (user_id, matched_user);
    
    INSERT INTO matches (user1, user2, status) 
    VALUES (user_id, matched_user, 'active') 
    RETURNING match_id, user1, user2, status INTO match_id, user1, user2, status;
    
    RETURN QUERY SELECT match_id, user1, user2, 'matched'::TEXT;
  ELSE
    -- Stay in waiting room
    RETURN QUERY SELECT NULL::UUID, user_id, NULL::TEXT, 'waiting'::TEXT;
  END IF;
END;
$$ LANGUAGE plpgsql;</code></pre>

        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Here’s a quick, no-code explanation of how it works:</p>
        
      <ol class="list-decimal pl-6 mb-8 space-y-2 text-vercel-black">
  <li class="text-lg">We check if you're already chatting with someone (no double-dating here!).</li>
  <li class="text-lg">If you're in the waiting room, we match you with someone else from that same waiting room.</li>
  <li class="text-lg">If you just ghosted someone, you get placed in a different room, while the person you ghosted is placed in another.</li>
  <li class="text-lg">We clean up by removing rooms that are no longer active.</li>
  <li class="text-lg">We find you a match from your waiting room (not with ur ex-chat partner).</li>
  <li class="text-lg">If we find a match, we introduce you to each other and remove both of you from the waiting rooms. 🎉</li>
  <li class="text-lg">If no match is found, please wait for your partner :D (maybe take this time to practice your opening lines?).</li>
</ol>

        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">So what does this mean for you?</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">For AnimoChat user, this means less digital déjà vu and more fresh conversations. You can now hit "next" with confidence, knowing that your paths are unlikely to cross again with that person who thought your joke about String theory was "actually quantum physics" (ugh).</p>

    <p class="text-lg leading-relaxed mb-6 text-vercel-black">
  Social interactions can sometimes feel a bit overwhelming. That's why we've built a system that lets you smoothly transition to a new conversation without the awkwardness of running into the same person again. It's all about keeping things fresh and comfortable for you!
</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 italic my-8">
          <p class="text-xl text-gray-600">In a world where digital connections are random, the least we can do is make sure they're not repetitively random.</p>
        </blockquote>
        
        <h2 class="text-2xl font-bold mt-10 mb-4 text-vercel-black">Wrapping up</h2>
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">AnimoChat's three-room matchmaking isn't just a technical upgrade—it's an awkwardness avoidance system.</p>
        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">So next time you find yourself in a delightfully random conversation on AnimoChat, remember: there's a complex system of digital bouncers working tirelessly to ensure your next match will be someone completely new to judge your memes and typos.</p>
        
        <p class="text-lg leading-relaxed mb-6 text-vercel-black">Happy chatting! And remember, if the matchmaking ever feels slow, it's not the system—it's just that everyone else found their digital soulmate before you. (Just kidding :D)</p>
        
    <p class="text-lg leading-relaxed mt-8 italic text-gray-600">P.S. There's still a slight that that  you might match with your ex chat partner again. 😉</p>

    
      `,
};

export default function BlogPost() {
  //   const { slug } = params;
  // const post = posts["animochat-matchmaking-v3"];

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
            <p className="font-medium text-vercel-black text-xs">
              {post.author.name}
            </p>
            <p className="text-sm text-gray-500">{post.author.title}</p>
          </div>
          <Separator orientation="vertical" className="mx-4 h-8" />
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4 mr-1 text-gray-500" />
            <span className="mr-4 text-sm">{post.date}</span>
            <Clock3Icon className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-sx">{post.readTime}</span>
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

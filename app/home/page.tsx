'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  HomeIcon, 
  BellIcon, 
  MessageCircleIcon, 
  UserIcon, 
  BookmarkIcon, 
  SettingsIcon,
  HeartIcon,
  RepeatIcon,
  MessageSquareIcon,
  ShareIcon,
  ImageIcon,
  VideoIcon,
  LinkIcon,
  SmileIcon
} from 'lucide-react'
import { useRouter } from 'next/navigation'


const sidebarItems = [
  { icon: HomeIcon, label: 'Home', href: '#' },
  { icon: BellIcon, label: 'Notifications', href: '#' },
  { icon: MessageCircleIcon, label: 'Messages', href: '#' },
  { icon: UserIcon, label: 'Profile', href: '#' },
  { icon: BookmarkIcon, label: 'Bookmarks', href: '#' },
  { icon: SettingsIcon, label: 'Settings', href: '#' },
]

const initialPosts = [
  {
    id: 1,
    author: { name: 'John Doe', username: '@johndoe', avatar: '/placeholder.svg?height=50&width=50' },
    content: 'Just launched my new project! Check it out: https://example.com',
    image: '/placeholder.svg?height=300&width=500',
    likes: 42,
    comments: [
      { id: 1, author: 'Jane Smith', content: 'Congratulations! Looks amazing!' },
      { id: 2, author: 'Bob Johnson', content: 'Great work, can\'t wait to try it out!' }
    ],
    reposts: 3,
    timestamp: '2h ago'
  },
  {
    id: 2,
    author: { name: 'Jane Smith', username: '@janesmith', avatar: '/placeholder.svg?height=50&width=50' },
    content: 'Excited to announce that I\'ll be speaking at the upcoming tech conference!',
    likes: 128,
    comments: [
      { id: 3, author: 'Alice Williams', content: 'That\'s fantastic news! What will you be speaking about?' },
    ],
    reposts: 15,
    timestamp: '4h ago'
  },
  // Add more posts as needed
]

// Post component
const Post = ({ post, onLike, onComment }) => {
  const [newComment, setNewComment] = useState('')

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      onComment(post.id, newComment)
      setNewComment('')
    }
  }
 

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm">{post.author.name}</p>
          <p className="text-xs text-gray-500">{post.author.username} · {post.timestamp}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post image" className="rounded-lg w-full mb-2" />
        )}
        <div className="border-t border-b border-gray-200 py-2 mb-2">
          <div className="flex justify-between text-xs text-gray-500">
            <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={() => onLike(post.id)}>
              <HeartIcon className={`h-4 w-4 ${post.liked ? 'text-red-500 fill-red-500' : ''}`} />
              <span>{post.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <MessageSquareIcon className="h-4 w-4" />
              <span>{post.comments.length}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <RepeatIcon className="h-4 w-4" />
              <span>{post.reposts}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <ShareIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <BookmarkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          {post.comments.map((comment) => (
            <div key={comment.id} className="text-sm">
              <span className="font-semibold">{comment.author}</span>: {comment.content}
            </div>
          ))}
          <div className="flex space-x-2">
            <Input
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="text-xs"
            />
            <Button size="sm" onClick={handleCommentSubmit}>Post</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ content: '', image: null })

  const handlePostSubmit = () => {
    if (newPost.content) {
      const newPostObj = {
        id: Date.now(),
        author: { name: 'Current User', username: '@currentuser', avatar: '/placeholder.svg?height=50&width=50' },
        content: newPost.content,
        image: newPost.image,
        likes: 0,
        comments: [],
        reposts: 0,
        timestamp: 'Just now'
      }
      setPosts([newPostObj, ...posts])
      setNewPost({ content: '', image: null })
    }
  }

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } 
        : post
    ))
  }

  const handleComment = (postId, commentContent) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, { id: Date.now(), author: 'Current User', content: commentContent }] } 
        : post
    ))
  }
const router= useRouter();


  return (
    <div className="min-h-screen bg-purple-50 flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center space-x-3 mb-6">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Current User" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">Current User</p>
            <p className="text-xs text-gray-500">@currentuser</p>
          </div>
        </div>
        <nav>
        {sidebarItems.map((item, index) => (
  <button
    onClick={() => {
      if (item.label === "Messages") {
        router.push('/chat');
      } else if (item.label === "Profile") {
        router.push('/profile');
      }
    }}
    key={index}
    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg p-2 mb-2 transition-colors duration-200"
  >
    <item.icon className="h-5 w-5" />
    <span className="text-xs font-medium">{item.label}</span>
  </button>
))}

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Post Feed */}
        <div className="w-3/5 border-r border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-purple-600 mb-4">Home Feed</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Post post={post} onLike={handleLike} onComment={handleComment} />
              </motion.div>
            ))}
          </ScrollArea>
        </div>

        {/* New Post and Trending */}
        <div className="w-2/5 p-4">
          <Card className="mb-4">
            <CardHeader>
              <h3 className="text-md font-semibold text-purple-600">Create a New Post</h3>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What's on your mind?"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="mb-2 text-sm"
              />
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ImageIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs">Image</span>
                </Button>
                <Button variant="outline" size="sm">
                  <VideoIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs">Video</span>
                </Button>
                <Button variant="outline" size="sm">
                  <LinkIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs">Link</span>
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SmileIcon className="h-4 w-4 mr-1" />
                      <span className="text-xs">Emoji</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0">
                    {/* Emoji picker would go here */}
                    <div className="p-4 text-center">Emoji Picker Placeholder</div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePostSubmit} className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">
                Post
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-md font-semibold text-purple-600">Trending Topics</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['#TechNews', '#WebDev', '#AI', '#MachineLearning', '#Innovation'].map((topic, index) => (
                  <li key={index} className="text-xs hover:text-purple-600 cursor-pointer">
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
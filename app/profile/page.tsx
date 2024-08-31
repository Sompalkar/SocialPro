'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PenIcon, TrashIcon, ImageIcon, VideoIcon, SendIcon, LinkedinIcon, TwitterIcon, CameraIcon } from 'lucide-react'

export default function ProfilePage() {
  const [posts, setPosts] = useState([
    { id: 1, content: "Just launched my new project!", likes: 15, comments: 3, image: "/placeholder.svg?height=200&width=300", video: null },
    { id: 2, content: "Excited to attend the tech conference next week!", likes: 20, comments: 5, image: null, video: "/placeholder.svg?height=200&width=300" },
  ])
  const [newPost, setNewPost] = useState({ content: '', image: null, video: null })
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Passionate developer | Tech enthusiast",
    avatar: "/placeholder.svg?height=100&width=100",
    twitter: "johndoe",
    linkedin: "johndoe"
  })
  const [deleteConfirmation, setDeleteConfirmation] = useState({ isOpen: false, postId: null })

  const handlePostDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id))
    setDeleteConfirmation({ isOpen: false, postId: null })
  }

  const handleNewPost = () => {
    if (newPost.content) {
      setPosts([{ id: Date.now(), content: newPost.content, likes: 0, comments: 0, image: newPost.image, video: newPost.video }, ...posts])
      setNewPost({ content: '', image: null, video: null })
    }
  }

  const handleProfileUpdate = () => {
    // In a real app, you'd send this data to your backend
    setIsEditing(false)
  }

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile({ ...profile, avatar: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="relative mb-4 sm:mb-0 sm:mr-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <label htmlFor="profile-picture" className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 cursor-pointer">
                    <CameraIcon className="h-4 w-4 text-white" />
                    <input
                      type="file"
                      id="profile-picture"
                      className="hidden"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                    />
                  </label>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <p className="text-gray-500">{profile.bio}</p>
                  <div className="mt-2 flex justify-center sm:justify-start space-x-4">
                    <a href={`https://twitter.com/${profile.twitter}`} className="text-gray-400 hover:text-purple-600">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                    <a href={`https://linkedin.com/in/${profile.linkedin}`} className="text-gray-400 hover:text-purple-600">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 sm:mt-0 sm:ml-auto"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <PenIcon className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={profile.name} 
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      value={profile.bio} 
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input 
                      id="twitter" 
                      value={profile.twitter} 
                      onChange={(e) => setProfile({...profile, twitter: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input 
                      id="linkedin" 
                      value={profile.linkedin} 
                      onChange={(e) => setProfile({...profile, linkedin: e.target.value})}
                    />
                  </div>
                  <Button className='bg-purple-600' onClick={handleProfileUpdate}>Save Changes</Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="posts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="newPost">New Post</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {posts.map((post) => (
                <Card key={post.id} className="mb-4">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{post.content}</span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" onClick={() => setDeleteConfirmation({ isOpen: true, postId: post.id })}>
                            <TrashIcon className="h-5 w-5 text-red-500" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setDeleteConfirmation({ isOpen: false, postId: null })}>
                              Cancel
                            </Button>
                            <Button variant="destructive" onClick={() => handlePostDelete(post.id)}>
                              Delete
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {post.image && (
                      <img src={post.image} alt="Post image" className="w-full h-96 object-cover  rounded-lg mb-4" />
                    )}
                    {post.video && (
                      <video src={post.video} controls className="w-full h-96 rounded-lg mb-4">
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <p className="text-sm text-gray-500">
                      {post.likes} likes · {post.comments} comments
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="newPost">
            <Card>
              <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea 
                    placeholder="What's on your mind?"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  />
                  <div className="flex space-x-2">
                    <label htmlFor="post-image" className="cursor-pointer">
                      <Button variant="outline" as="span">
                        <ImageIcon className="h-5 w-5 mr-2" />
                        Add Image
                      </Button>
                      <input
                        type="file"
                        id="post-image"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setNewPost({...newPost, image: reader.result})
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                    </label>
                    <label htmlFor="post-video" className="cursor-pointer">
                      <Button variant="outline" as="span">
                        <VideoIcon className="h-5 w-5 mr-2" />
                        Add Video
                      </Button>
                      <input
                        type="file"
                        id="post-video"
                        className="hidden"
                        accept="video/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setNewPost({...newPost, video: reader.result})
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                    </label>
                    <Button className='bg-purple-600' onClick={handleNewPost}>
                      <SendIcon className="h-5 w-5 mr-2" />
                      Post
                    </Button>
                  </div>
                  {(newPost.content || newPost.image || newPost.video) && (
                    <Card className="mt-4">
                      <CardHeader>
                        <CardTitle>Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{newPost.content}</p>
                        {newPost.image && (
                          <img src={newPost.image} alt="New post image" className="w-full h-auto rounded-lg mt-4" />
                        )}
                        {newPost.video && (
                          <video src={newPost.video} controls className="w-full h-auto rounded-lg mt-4">
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
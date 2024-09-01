// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { SmileIcon, PaperclipIcon, SendIcon, ImageIcon, FileIcon, MicIcon } from 'lucide-react'
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'

// const friends = [
//   { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=50&width=50", status: "online" },
//   { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=50&width=50", status: "offline" },
//   { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg?height=50&width=50", status: "online" },
//   // Add more friends as needed
// ]

// const messages = [
//   { id: 1, sender: "Alice Johnson", content: "Hey there! How's it going?", timestamp: "10:30 AM", isMine: false },
//   { id: 2, sender: "Me", content: "Hi Alice! I'm doing great, thanks for asking. How about you?", timestamp: "10:32 AM", isMine: true },
//   { id: 3, sender: "Alice Johnson", content: "I'm good too! Just working on some projects. Have you seen the latest tech news?", timestamp: "10:35 AM", isMine: false },
//   { id: 4, sender: "Me", content: "Not yet, anything exciting?", timestamp: "10:36 AM", isMine: true },
//   { id: 5, sender: "Alice Johnson", content: "Yeah! There's a new AI breakthrough. I'll send you the article.", timestamp: "10:38 AM", isMine: false },
//   { id: 6, sender: "Alice Johnson", content: "Here's the link: https://example.com/ai-news", timestamp: "10:38 AM", isMine: false },
//   // Add more messages as needed
// ]

// export default function ChatPage() {
//   const [currentFriend, setCurrentFriend] = useState(friends[0])
//   const [inputMessage, setInputMessage] = useState("")
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false)
//   const chatEndRef = useRef(null)

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       // In a real app, you'd send this message to your backend
//       console.log("Sending message:", inputMessage)
//       setInputMessage("")
//     }
//   }

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0]
//     if (file) {
//       // In a real app, you'd upload this file to your backend
//       console.log("Uploading file:", file.name)
//     }
//   }

//   const handleEmojiSelect = (emoji) => {
//     setInputMessage(inputMessage + emoji.native)
//   }

//   return (
//     <div className="min-h-screen bg-purple-50 flex">
//       {/* Friends List */}
//       <div className="w-1/4 bg-white border-r border-gray-200 p-4">
//         <h2 className="text-2xl font-bold mb-4 text-purple-600">Chats</h2>
//         <ScrollArea className="h-[calc(100vh-8rem)]">
//           {friends.map((friend) => (
//             <div
//               key={friend.id}
//               className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer ${
//                 currentFriend.id === friend.id ? 'bg-purple-100' : 'hover:bg-gray-100'
//               }`}
//               onClick={() => setCurrentFriend(friend)}
//             >
//               <Avatar className="h-10 w-10 mr-3">
//                 <AvatarImage src={friend.avatar} alt={friend.name} />
//                 <AvatarFallback>{friend.name[0]}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="font-semibold">{friend.name}</p>
//                 <p className={`text-sm ${friend.status === 'online' ? 'text-green-500' : 'text-gray-500'}`}>
//                   {friend.status}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </ScrollArea>
//       </div>

//       {/* Chat Section */}
//       <div className="flex-1 flex flex-col">
//         {/* Chat Header */}
//         <div className="bg-white p-4 border-b border-gray-200 flex items-center">
//           <Avatar className="h-10 w-10 mr-3">
//             <AvatarImage src={currentFriend.avatar} alt={currentFriend.name} />
//             <AvatarFallback>{currentFriend.name[0]}</AvatarFallback>
//           </Avatar>
//           <div>
//             <h2 className="font-semibold">{currentFriend.name}</h2>
//             <p className="text-sm text-gray-500">
//               {currentFriend.status === 'online' ? 'Online' : 'Offline'}
//             </p>
//           </div>
//         </div>

//         {/* Messages */}
//         <ScrollArea className="flex-1 p-4">
//           {messages.map((message) => (
//             <motion.div
//               key={message.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`flex ${message.isMine ? 'justify-end' : 'justify-start'} mb-4`}
//             >
//               <Card className={`max-w-[70%] ${message.isMine ? 'bg-purple-100' : 'bg-white'}`}>
//                 <CardContent className="p-3">
//                   <p className={`text-sm ${message.isMine ? 'text-purple-800' : 'text-gray-800'}`}>
//                     {message.content}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//           <div ref={chatEndRef} />
//         </ScrollArea>

//         {/* Input Area */}
//         <div className="bg-white p-4 border-t border-gray-200">
//           <div className="flex items-center space-x-2">
//             <Button variant="ghost" size="icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
//               <SmileIcon className="h-6 w-6 text-gray-500" />
//             </Button>
//             <label htmlFor="file-upload" className="cursor-pointer">
//               <Button variant="ghost" size="icon"  >
//                 <PaperclipIcon className="h-6 w-6 text-gray-500" />
//               </Button>
//               <input
//                 id="file-upload"
//                 type="file"
//                 className="hidden"
//                 onChange={handleFileUpload}
//                 multiple
//               />
//             </label>
//             <Input
//               placeholder="Type a message..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               className="flex-1"
//             />
//             <Button onClick={handleSendMessage}>
//               <SendIcon className="h-5 w-5" />
//             </Button>
//           </div>
//           {showEmojiPicker && (
//             <div className="absolute bottom-20 right-4">
//               <Picker data={data} onEmojiSelect={handleEmojiSelect} />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* File Preview (you can expand this based on file types) */}
//       <div className="w-1/4 bg-white border-l border-gray-200 p-4 hidden lg:block">
//         <h3 className="text-lg font-semibold mb-4">Shared Files</h3>
//         <Tabs defaultValue="images">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="images">Images</TabsTrigger>
//             <TabsTrigger value="files">Files</TabsTrigger>
//             <TabsTrigger value="audio">Audio</TabsTrigger>
//           </TabsList>
//           <TabsContent value="images" className="mt-4">
//             <div className="grid grid-cols-2 gap-2">
//               <img src="/placeholder.svg?height=100&width=100" alt="Shared image" className="rounded-lg" />
//               <img src="/placeholder.svg?height=100&width=100" alt="Shared image" className="rounded-lg" />
//               {/* Add more images as needed */}
//             </div>
//           </TabsContent>
//           <TabsContent value="files" className="mt-4">
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <FileIcon className="h-6 w-6 mr-2 text-purple-600" />
//                 <span>document.pdf</span>
//               </div>
//               <div className="flex items-center">
//                 <FileIcon className="h-6 w-6 mr-2 text-purple-600" />
//                 <span>presentation.pptx</span>
//               </div>
//               {/* Add more files as needed */}
//             </div>
//           </TabsContent>
//           <TabsContent value="audio" className="mt-4">
//             <div className="space-y-2">
//               <div className="flex items-center">
//                 <MicIcon className="h-6 w-6 mr-2 text-purple-600" />
//                 <span>voice_message.mp3</span>
//               </div>
//               {/* Add more audio files as needed */}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  SmileIcon,
  PaperclipIcon,
  SendIcon,
  ImageIcon,
  FileIcon,
  MicIcon,
  SearchIcon,
  MoreVerticalIcon,
  PhoneIcon,
  VideoIcon,
} from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const friends = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "offline",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  {
    id: 4,
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  {
    id: 5,
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "offline",
  },
  {
    id: 6,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  {
    id: 7,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  {
    id: 8,
    name: "Charlie Brown",
    avatar: "/placeholder.svg?height=50&width=50",
    status: "online",
  },
  // Add more friends as needed
];

const messages = [
  {
    id: 1,
    sender: "Alice Johnson",
    content: "Hey there! How's it going?",
    timestamp: "10:30 AM",
    isMine: false,
  },
  {
    id: 2,
    sender: "Me",
    content: "Hi Alice! I'm doing great, thanks for asking. How about you?",
    timestamp: "10:32 AM",
    isMine: true,
  },
  {
    id: 3,
    sender: "Alice Johnson",
    content:
      "I'm good too! Just working on some projects. Have you seen the latest tech news?",
    timestamp: "10:35 AM",
    isMine: false,
  },
  {
    id: 4,
    sender: "Me",
    content: "Not yet, anything exciting?",
    timestamp: "10:36 AM",
    isMine: true,
  },
  {
    id: 5,
    sender: "Alice Johnson",
    content: "Yeah! There's a new AI breakthrough. I'll send you the article.",
    timestamp: "10:38 AM",
    isMine: false,
  },
  {
    id: 6,
    sender: "Alice Johnson",
    content: "Here's the link: https://example.com/ai-news",
    timestamp: "10:38 AM",
    isMine: false,
  },
  {
    id: 7,
    sender: "Me",
    content: "Not yet, anything exciting?",
    timestamp: "10:36 AM",
    isMine: true,
  },
  {
    id: 8,
    sender: "Alice Johnson",
    content: "Yeah! There's a new AI breakthrough. I'll send you the article.",
    timestamp: "10:38 AM",
    isMine: false,
  },
  {
    id: 9,
    sender: "Alice Johnson",
    content: "Here's the link: https://example.com/ai-news",
    timestamp: "10:38 AM",
    isMine: false,
  },
  {
    id: 10,
    sender: "Me",
    content: "Not yet, anything exciting?",
    timestamp: "10:36 AM",
    isMine: true,
  },
  {
    id: 11,
    sender: "Alice Johnson",
    content: "Yeah! There's a new AI breakthrough. I'll send you the article.",
    timestamp: "10:38 AM",
    isMine: false,
  },
  {
    id: 12,
    sender: "Alice Johnson",
    content: "Here's the link: https://example.com/ai-news",
    timestamp: "10:38 AM",
    isMine: false,
  },
  // Add more messages as needed
];

export default function ChatPage() {
  const [currentFriend, setCurrentFriend] = useState(friends[0]);
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // In a real app, you'd send this message to your backend
      console.log("Sending message:", inputMessage);
      setInputMessage("");
    }
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      // In a real app, you'd upload this file to your backend
      console.log("Uploading file:", file.name);
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    setInputMessage(inputMessage + emoji.native);
  };

  return (
    <>
      <div className="bg-purple-50 flex ">
        <div className="w-1/4 bg-white border-r border-gray-200 p-4">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Chats</h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer ${
                  currentFriend.id === friend.id
                    ? "bg-purple-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentFriend(friend)}
              >
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{friend.name}</p>
                  <p
                    className={`text-sm ${
                      friend.status === "online"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {friend.status}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src={currentFriend.avatar}
                  alt={currentFriend.name}
                />
                <AvatarFallback>{currentFriend.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">{currentFriend.name}</h2>
                <p className="text-sm text-gray-500">
                  {currentFriend.status === "online" ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <PhoneIcon className="h-5 w-5 text-purple-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <VideoIcon className="h-5 w-5 text-purple-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <SearchIcon className="h-5 w-5 text-purple-600" />
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVerticalIcon className="h-5 w-5 text-purple-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40">
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      View Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Mute Notifications
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Block User
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className=" ">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4 max-h-[510px] overflow-scroll">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.isMine ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <Card
                    className={`max-w-[70%] ${
                      message.isMine ? "bg-purple-100" : "bg-white"
                    }`}
                  >
                    <CardContent className="p-3">
                      <p
                        className={`text-sm ${
                          message.isMine ? "text-purple-800" : "text-gray-800"
                        }`}
                      >
                        {message.content}
                      </p>
                      <div className="mt-1 pt-1 border-t border-gray-200">
                        <p className="text-[10px] text-gray-500">
                          {message.timestamp}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </ScrollArea>
          </div>

          <div className="bg-white p-4 mt-1 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <SmileIcon className="h-6 w-6 text-purple-600" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0">
                  <Picker
                    data={data}
                    onEmojiSelect={handleEmojiSelect}
                    theme="light"
                    set="apple"
                    skinTonePosition="search"
                    previewPosition="none"
                    perLine={8}
                  />
                </PopoverContent>
              </Popover>
              <label htmlFor="file-upload" className="cursor-pointer">
                <Button variant="ghost" size="icon">
                  <PaperclipIcon className="h-6 w-6 text-purple-600" />
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  multiple
                />
              </label>
              <Input
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <SendIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="w-1/4 bg-white border-l border-gray-200 p-4 hidden lg:block">
          <h3 className="text-lg font-semibold mb-4 text-purple-600">
            Shared Files
          </h3>
          <Tabs defaultValue="images">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
            </TabsList>
            <TabsContent value="images" className="mt-4">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Shared image"
                  className="rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Shared image"
                  className="rounded-lg"
                /> 
              </div>
            </TabsContent>
            <TabsContent value="files" className="mt-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <FileIcon className="h-6 w-6 mr-2 text-purple-600" />
                  <span>document.pdf</span>
                </div>
                <div className="flex items-center">
                  <FileIcon className="h-6 w-6 mr-2 text-purple-600" />
                  <span>presentation.pptx</span>
                </div>
                

              </div>
            </TabsContent>
            <TabsContent value="audio" className="mt-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <MicIcon className="h-6 w-6 mr-2 text-purple-600" />
                  <span>voice_message.mp3</span>
                </div>
             
              </div>
            </TabsContent>
          </Tabs>
        </div> */}
      </div>
    </>
  );
}

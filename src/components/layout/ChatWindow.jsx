// // // // "use client";
// // // // import React, { useState, useEffect, useRef } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { X, Send, MessageCircle } from "lucide-react";
// // // // import Image from "next/image";
// // // // import { toast } from "sonner";
// // // // import {
// // // //   useStartSession,
// // // //   useSendMessage,
// // // // } from "../../hooks/chatbot/useChatbot";
// // // // import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
// // // // import { useTranslation } from "react-i18next";

// // // // const getErrorMessage = (err) =>
// // // //   err?.response?.data?.message ||
// // // //   err?.message ||
// // // //   "Something went wrong, please try again.";

// // // // const formatTime = (dateStr) => {
// // // //   const date = dateStr ? new Date(dateStr.replace(" ", "T")) : new Date();
// // // //   const valid = !isNaN(date.getTime()) ? date : new Date();
// // // //   return valid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// // // // };

// // // // let localMessageId = 0;
// // // // const nextLocalId = () => `local-${Date.now()}-${localMessageId++}`;

// // // // export default function ChatWindow({ isOpen, onClose }) {
// // // //   const [messages, setMessages] = useState([]);
// // // //   const [options, setOptions] = useState([]);
// // // //   const [navigationTip, setNavigationTip] = useState("");
// // // //   const [quickInfo, setQuickInfo] = useState(null);
// // // //   const [sessionKey, setSessionKey] = useState(null);
// // // //   const [inputValue, setInputValue] = useState("");
// // // //   const messagesEndRef = useRef(null);

// // // //   const user = useCurrentUser();
// // // //   const { t, i18n } = useTranslation();
// // // //   const lang = i18n?.language || "en";

// // // //   const { mutate: startSession, isPending: isStarting } = useStartSession();
// // // //   const { mutate: sendMessage, isPending: isSending } = useSendMessage();

// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   };

// // // //   useEffect(() => {
// // // //     scrollToBottom();
// // // //   }, [messages, options, isOpen]);

// // // //   const applySessionData = (data) => {
// // // //     setSessionKey(data.session_key);
// // // //     setOptions(data.options || []);
// // // //     setNavigationTip(data.navigation_tip || "");
// // // //     setQuickInfo(data.quick_info || null);

// // // //     const history = (data.messages || []).map((m) => ({
// // // //       id: m.id ?? nextLocalId(),
// // // //       text: m.message,
// // // //       sender: m.sender,
// // // //       time: formatTime(m.created_at),
// // // //     }));

// // // //     if (history.length === 0 && data.welcome_message) {
// // // //       history.push({
// // // //         id: nextLocalId(),
// // // //         text: data.welcome_message,
// // // //         sender: "bot",
// // // //         time: formatTime(),
// // // //       });
// // // //     }

// // // //     setMessages(history);
// // // //   };

// // // //   const handleStartSession = () => {
// // // //     const data = user?.user_id ? { lang, user_id: user.user_id } : { lang };

// // // //     startSession(data, {
// // // //       onSuccess: (response) => {
// // // //         if (response?.status === "success" && response?.data) {
// // // //           applySessionData(response.data);
// // // //         } else {
// // // //           toast.error(response?.message || "Unable to start chat session.");
// // // //         }
// // // //       },
// // // //       onError: (err) => toast.error(getErrorMessage(err)),
// // // //     });
// // // //   };

// // // //   const handleBotResponse = (response) => {
// // // //     if (response?.status !== "success" || !response?.data) {
// // // //       toast.error(
// // // //         response?.message || "Something went wrong, please try again.",
// // // //       );
// // // //       return;
// // // //     }

// // // //     const data = response.data;

// // // //     if (data.bot_answer) {
// // // //       setMessages((prev) => [
// // // //         ...prev,
// // // //         {
// // // //           id: nextLocalId(),
// // // //           text: data.bot_answer,
// // // //           sender: "bot",
// // // //           time: formatTime(),
// // // //         },
// // // //       ]);
// // // //     }

// // // //     setOptions(data.options || []);
// // // //     if (data.navigation_tip) setNavigationTip(data.navigation_tip);
// // // //   };

// // // //   const sendChatMessage = (messageKey, userLabel) => {
// // // //     if (!sessionKey || isSending) return;

// // // //     setMessages((prev) => [
// // // //       ...prev,
// // // //       {
// // // //         id: nextLocalId(),
// // // //         text: userLabel,
// // // //         sender: "user",
// // // //         time: formatTime(),
// // // //       },
// // // //     ]);

// // // //     sendMessage(
// // // //       { session_key: sessionKey, message: messageKey, lang },
// // // //       {
// // // //         onSuccess: handleBotResponse,
// // // //         onError: (err) => toast.error(getErrorMessage(err)),
// // // //       },
// // // //     );
// // // //   };

// // // //   const handleOptionClick = (option) => {
// // // //     sendChatMessage(
// // // //       option.key,
// // // //       option.label || option[`label_${lang}`] || option.label_en,
// // // //     );
// // // //   };

// // // //   const handleSend = (e) => {
// // // //     e.preventDefault();
// // // //     if (!inputValue.trim() || !sessionKey) return;
// // // //     window.open(
// // // //       `https://wa.me/201028195936?text=${encodeURIComponent(inputValue.trim())}`,
// // // //       "_blank",
// // // //     );
// // // //     // sendChatMessage(inputValue.trim(), inputValue.trim());
// // // //     // setInputValue("");
// // // //   };

// // // //   return (
// // // //     <AnimatePresence>
// // // //       {isOpen && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// // // //           animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
// // // //           exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// // // //           transition={{ type: "spring", stiffness: 300, damping: 25 }}
// // // //           className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 pointer-events-auto"
// // // //         >
// // // //           {/* Header */}
// // // //           <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
// // // //             <div className="flex items-center gap-3">
// // // //               <div className="w-10 h-10  backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
// // // //                 <Image
// // // //                   src="/SHAHD-IMAGE/Book/dr shahd.jpg.jpeg"
// // // //                   alt="Logo"
// // // //                   width={40}
// // // //                   height={40}
// // // //                   className="object-contain rounded-full"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h3 className="font-main text-lg leading-tight tracking-wide">
// // // //                   SHAHD AWAD
// // // //                 </h3>
// // // //                 <div className="flex items-center gap-1.5">
// // // //                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
// // // //                   <span className="text-xs opacity-90 font-poppins font-light italic">
// // // //                     Online Support
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <button
// // // //               onClick={onClose}
// // // //               className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
// // // //             >
// // // //               <X size={20} />
// // // //             </button>
// // // //           </div>

// // // //           {!sessionKey ? (
// // // //             /* Start Session */
// // // //             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30 text-center">
// // // //               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
// // // //                 <MessageCircle size={30} />
// // // //               </div>
// // // //               <p className="text-sm font-poppins text-gray-600">
// // // //                 Start a conversation with Dr. Shahd Awad's assistant to get help
// // // //                 with services, pricing, products, bookings and more.
// // // //               </p>
// // // //               <button
// // // //                 onClick={handleStartSession}
// // // //                 disabled={isStarting}
// // // //                 className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-poppins shadow-lg shadow-primary/20 disabled:opacity-60 transition-all"
// // // //               >
// // // //                 {isStarting ? "Starting..." : "Start Chat"}
// // // //               </button>
// // // //             </div>
// // // //           ) : (
// // // //             <>
// // // //               {/* Messages Area */}
// // // //               <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
// // // //                 {messages.map((msg) => (
// // // //                   <div
// // // //                     key={msg.id}
// // // //                     className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// // // //                   >
// // // //                     <div
// // // //                       className={`
// // // //                         max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative whitespace-pre-line
// // // //                         ${
// // // //                           msg.sender === "user"
// // // //                             ? "bg-primary text-white rounded-tr-none shadow-md"
// // // //                             : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
// // // //                         }
// // // //                       `}
// // // //                     >
// // // //                       <p className="leading-relaxed">{msg.text}</p>
// // // //                       <span className="text-[10px] mt-1.5 block opacity-50 text-right">
// // // //                         {msg.time}
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}

// // // //                 {isSending && (
// // // //                   <div className="flex justify-start">
// // // //                     <div className="bg-white text-gray-400 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 px-4 py-3 text-sm font-poppins">
// // // //                       ...
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 <div ref={messagesEndRef} />
// // // //               </div>

// // // //               {/* Options */}
// // // //               {options.length > 0 && (
// // // //                 <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
// // // //                   {options.map((option) => (
// // // //                     <button
// // // //                       key={option.key}
// // // //                       onClick={() => handleOptionClick(option)}
// // // //                       disabled={isSending}
// // // //                       className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1 disabled:opacity-60"
// // // //                     >
// // // //                       {option.image_url ? (
// // // //                         <Image
// // // //                           src={option.image_url}
// // // //                           alt={option.label || ""}
// // // //                           width={16}
// // // //                           height={16}
// // // //                           className="rounded-full object-cover w-4 h-4"
// // // //                         />
// // // //                       ) : (
// // // //                         option.icon && <span>{option.icon}</span>
// // // //                       )}
// // // //                       {option.label ||
// // // //                         option[`label_${lang}`] ||
// // // //                         option.label_en}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               )}

// // // //               {/* {navigationTip && (
// // // //                 <div className="px-4 text-[10px] text-gray-400 font-poppins">
// // // //                   {navigationTip}
// // // //                 </div>
// // // //               )} */}

// // // //               {/* Input Area */}
// // // //               <form
// // // //                 onSubmit={handleSend}
// // // //                 className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
// // // //               >
// // // //                 <div className="flex-1 relative">
// // // //                   <input
// // // //                     type="text"
// // // //                     value={inputValue}
// // // //                     onChange={(e) => setInputValue(e.target.value)}
// // // //                     placeholder="Type your message..."
// // // //                     disabled={isSending}
// // // //                     className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all disabled:opacity-60"
// // // //                   />
// // // //                 </div>
// // // //                 <button
// // // //                   type="submit"
// // // //                   disabled={isSending}
// // // //                   className={`
// // // //                     w-11 h-11 rounded-2xl flex items-center justify-center transition-all
// // // //                     ${inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100" : "bg-gray-100 text-gray-400 scale-95"}
// // // //                   `}
// // // //                 >
// // // //                   <Send size={20} />
// // // //                 </button>
// // // //               </form>
// // // //             </>
// // // //           )}
// // // //         </motion.div>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // }

// // // "use client";
// // // import React, { useState, useEffect, useRef } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { X, Send, MessageCircle } from "lucide-react";
// // // import Image from "next/image";
// // // import { toast } from "sonner";
// // // import {
// // //   useStartSession,
// // //   useSendMessage,
// // //   useGetHistory,
// // // } from "../../hooks/chatbot/useChatbot";
// // // import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
// // // import { useTranslation } from "react-i18next";

// // // const getErrorMessage = (err) =>
// // //   err?.response?.data?.message ||
// // //   err?.message ||
// // //   "Something went wrong, please try again.";

// // // const formatTime = (dateStr) => {
// // //   const date = dateStr ? new Date(dateStr.replace(" ", "T")) : new Date();
// // //   const valid = !isNaN(date.getTime()) ? date : new Date();
// // //   return valid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// // // };

// // // let localMessageId = 0;
// // // const nextLocalId = () => `local-${Date.now()}-${localMessageId++}`;

// // // export default function ChatWindow({ isOpen, onClose }) {
// // //   const [messages, setMessages] = useState([]);
// // //   const [options, setOptions] = useState([]);
// // //   const [navigationTip, setNavigationTip] = useState("");
// // //   const [quickInfo, setQuickInfo] = useState(null);
// // //   const [sessionKey, setSessionKey] = useState(null);
// // //   const [inputValue, setInputValue] = useState("");
// // //   const [hasLoadedHistory, setHasLoadedHistory] = useState(false);
// // //   const messagesEndRef = useRef(null);

// // //   const user = useCurrentUser();
// // //   const { t, i18n } = useTranslation();
// // //   const lang = i18n?.language || "en";

// // //   const { mutate: startSession, isPending: isStarting } = useStartSession();
// // //   const { mutate: sendMessage, isPending: isSending } = useSendMessage();

// // //   // Fetch chat history when sessionKey exists
// // //   const { data: historyData, isLoading: isLoadingHistory } = useGetHistory({
// // //     session_key: sessionKey,
// // //   });

// // //   const scrollToBottom = () => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   useEffect(() => {
// // //     scrollToBottom();
// // //   }, [messages, options, isOpen]);

// // //   // Load history when it's fetched
// // //   useEffect(() => {
// // //     if (historyData?.data?.messages && !hasLoadedHistory) {
// // //       const history = historyData.data.messages.map((m) => ({
// // //         id: m.id ?? nextLocalId(),
// // //         text: m.message,
// // //         sender: m.sender,
// // //         time: formatTime(m.created_at),
// // //       }));

// // //       setMessages(history);
// // //       setHasLoadedHistory(true);

// // //       // Update session key if it's different (though it should be the same)
// // //       if (historyData.data.session_key && !sessionKey) {
// // //         setSessionKey(historyData.data.session_key);
// // //       }
// // //     }
// // //   }, [historyData, hasLoadedHistory, sessionKey]);

// // //   // Check if there's a stored session when component mounts or opens
// // //   useEffect(() => {
// // //     if (isOpen && !sessionKey && !hasLoadedHistory) {
// // //       // Try to get session from localStorage
// // //       const storedSessionKey = localStorage.getItem("chat_session_key");
// // //       if (storedSessionKey) {
// // //         setSessionKey(storedSessionKey);
// // //       }
// // //     }
// // //   }, [isOpen, sessionKey, hasLoadedHistory]);

// // //   const applySessionData = (data) => {
// // //     const newSessionKey = data.session_key;
// // //     setSessionKey(newSessionKey);
// // //     setOptions(data.options || []);
// // //     setNavigationTip(data.navigation_tip || "");
// // //     setQuickInfo(data.quick_info || null);

// // //     // Store session key in localStorage for persistence
// // //     localStorage.setItem("chat_session_key", newSessionKey);

// // //     const history = (data.messages || []).map((m) => ({
// // //       id: m.id ?? nextLocalId(),
// // //       text: m.message,
// // //       sender: m.sender,
// // //       time: formatTime(m.created_at),
// // //     }));

// // //     if (history.length === 0 && data.welcome_message) {
// // //       history.push({
// // //         id: nextLocalId(),
// // //         text: data.welcome_message,
// // //         sender: "bot",
// // //         time: formatTime(),
// // //       });
// // //     }

// // //     setMessages(history);
// // //     setHasLoadedHistory(true);
// // //   };

// // //   const handleStartSession = () => {
// // //     const data = user?.user_id ? { lang, user_id: user.user_id } : { lang };

// // //     startSession(data, {
// // //       onSuccess: (response) => {
// // //         if (response?.status === "success" && response?.data) {
// // //           applySessionData(response.data);
// // //         } else {
// // //           toast.error(response?.message || "Unable to start chat session.");
// // //         }
// // //       },
// // //       onError: (err) => toast.error(getErrorMessage(err)),
// // //     });
// // //   };

// // //   const handleBotResponse = (response) => {
// // //     if (response?.status !== "success" || !response?.data) {
// // //       toast.error(
// // //         response?.message || "Something went wrong, please try again.",
// // //       );
// // //       return;
// // //     }

// // //     const data = response.data;

// // //     if (data.bot_answer) {
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         {
// // //           id: nextLocalId(),
// // //           text: data.bot_answer,
// // //           sender: "bot",
// // //           time: formatTime(),
// // //         },
// // //       ]);
// // //     }

// // //     setOptions(data.options || []);
// // //     if (data.navigation_tip) setNavigationTip(data.navigation_tip);
// // //   };

// // //   const sendChatMessage = (messageKey, userLabel) => {
// // //     if (!sessionKey || isSending) return;

// // //     setMessages((prev) => [
// // //       ...prev,
// // //       {
// // //         id: nextLocalId(),
// // //         text: userLabel,
// // //         sender: "user",
// // //         time: formatTime(),
// // //       },
// // //     ]);

// // //     sendMessage(
// // //       { session_key: sessionKey, message: messageKey, lang },
// // //       {
// // //         onSuccess: handleBotResponse,
// // //         onError: (err) => toast.error(getErrorMessage(err)),
// // //       },
// // //     );
// // //   };

// // //   const handleOptionClick = (option) => {
// // //     sendChatMessage(
// // //       option.key,
// // //       option.label || option[`label_${lang}`] || option.label_en,
// // //     );
// // //   };

// // //   const handleSend = (e) => {
// // //     e.preventDefault();
// // //     if (!inputValue.trim() || !sessionKey) return;
// // //     window.open(
// // //       `https://wa.me/201028195936?text=${encodeURIComponent(inputValue.trim())}`,
// // //       "_blank",
// // //     );
// // //   };

// // //   // Clear session on close
// // //   const handleClose = () => {
// // //     // Optionally clear session from localStorage if you want fresh start each time
// // //     // localStorage.removeItem('chat_session_key');
// // //     onClose();
// // //   };

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <motion.div
// // //           initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// // //           animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
// // //           exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// // //           transition={{ type: "spring", stiffness: 300, damping: 25 }}
// // //           className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 pointer-events-auto"
// // //         >
// // //           {/* Header */}
// // //           <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
// // //             <div className="flex items-center gap-3">
// // //               <div className="w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
// // //                 <Image
// // //                   src="/SHAHD-IMAGE/Book/dr shahd.jpg.jpeg"
// // //                   alt="Logo"
// // //                   width={40}
// // //                   height={40}
// // //                   className="object-contain rounded-full"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h3 className="font-main text-lg leading-tight tracking-wide">
// // //                   SHAHD AWAD
// // //                 </h3>
// // //                 <div className="flex items-center gap-1.5">
// // //                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
// // //                   <span className="text-xs opacity-90 font-poppins font-light italic">
// // //                     Online Support
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={handleClose}
// // //               className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
// // //             >
// // //               <X size={20} />
// // //             </button>
// // //           </div>

// // //           {!sessionKey ? (
// // //             /* Start Session */
// // //             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30 text-center">
// // //               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
// // //                 <MessageCircle size={30} />
// // //               </div>
// // //               <p className="text-sm font-poppins text-gray-600">
// // //                 Start a conversation with Dr. Shahd Awad's assistant to get help
// // //                 with services, pricing, products, bookings and more.
// // //               </p>
// // //               <button
// // //                 onClick={handleStartSession}
// // //                 disabled={isStarting}
// // //                 className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-poppins shadow-lg shadow-primary/20 disabled:opacity-60 transition-all"
// // //               >
// // //                 {isStarting ? "Starting..." : "Start Chat"}
// // //               </button>
// // //             </div>
// // //           ) : isLoadingHistory ? (
// // //             /* Loading History */
// // //             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30">
// // //               <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
// // //               <p className="text-sm font-poppins text-gray-500">
// // //                 Loading chat history...
// // //               </p>
// // //             </div>
// // //           ) : (
// // //             <>
// // //               {/* Messages Area */}
// // //               <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
// // //                 {messages.length === 0 ? (
// // //                   <div className="flex-1 flex items-center justify-center text-gray-400 text-sm font-poppins">
// // //                     No messages yet. Start the conversation!
// // //                   </div>
// // //                 ) : (
// // //                   messages.map((msg) => (
// // //                     <div
// // //                       key={msg.id}
// // //                       className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// // //                     >
// // //                       <div
// // //                         className={`
// // //                           max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative whitespace-pre-line
// // //                           ${
// // //                             msg.sender === "user"
// // //                               ? "bg-primary text-white rounded-tr-none shadow-md"
// // //                               : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
// // //                           }
// // //                         `}
// // //                       >
// // //                         <p className="leading-relaxed">{msg.text}</p>
// // //                         <span className="text-[10px] mt-1.5 block opacity-50 text-right">
// // //                           {msg.time}
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   ))
// // //                 )}

// // //                 {isSending && (
// // //                   <div className="flex justify-start">
// // //                     <div className="bg-white text-gray-400 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 px-4 py-3 text-sm font-poppins">
// // //                       ...
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 <div ref={messagesEndRef} />
// // //               </div>

// // //               {/* Options */}
// // //               {options.length > 0 && (
// // //                 <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
// // //                   {options.map((option) => (
// // //                     <button
// // //                       key={option.key}
// // //                       onClick={() => handleOptionClick(option)}
// // //                       disabled={isSending}
// // //                       className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1 disabled:opacity-60"
// // //                     >
// // //                       {option.image_url ? (
// // //                         <Image
// // //                           src={option.image_url}
// // //                           alt={option.label || ""}
// // //                           width={16}
// // //                           height={16}
// // //                           className="rounded-full object-cover w-4 h-4"
// // //                         />
// // //                       ) : (
// // //                         option.icon && <span>{option.icon}</span>
// // //                       )}
// // //                       {option.label ||
// // //                         option[`label_${lang}`] ||
// // //                         option.label_en}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               {/* Input Area */}
// // //               <form
// // //                 onSubmit={handleSend}
// // //                 className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
// // //               >
// // //                 <div className="flex-1 relative">
// // //                   <input
// // //                     type="text"
// // //                     value={inputValue}
// // //                     onChange={(e) => setInputValue(e.target.value)}
// // //                     placeholder="Type your message..."
// // //                     disabled={isSending}
// // //                     className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all disabled:opacity-60"
// // //                   />
// // //                 </div>
// // //                 <button
// // //                   type="submit"
// // //                   disabled={isSending}
// // //                   className={`
// // //                     w-11 h-11 rounded-2xl flex items-center justify-center transition-all
// // //                     ${inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100" : "bg-gray-100 text-gray-400 scale-95"}
// // //                   `}
// // //                 >
// // //                   <Send size={20} />
// // //                 </button>
// // //               </form>
// // //             </>
// // //           )}
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // }

// // "use client";
// // import React, { useState, useEffect, useRef } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { X, Send, MessageCircle } from "lucide-react";
// // import Image from "next/image";
// // import { toast } from "sonner";
// // import {
// //   useStartSession,
// //   useSendMessage,
// //   useGetHistory,
// // } from "../../hooks/chatbot/useChatbot";
// // import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
// // import { useTranslation } from "react-i18next";

// // const getErrorMessage = (err) =>
// //   err?.response?.data?.message ||
// //   err?.message ||
// //   "Something went wrong, please try again.";

// // const formatTime = (dateStr) => {
// //   const date = dateStr ? new Date(dateStr.replace(" ", "T")) : new Date();
// //   const valid = !isNaN(date.getTime()) ? date : new Date();
// //   return valid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// // };

// // let localMessageId = 0;
// // const nextLocalId = () => `local-${Date.now()}-${localMessageId++}`;

// // const getSessionKey = () => {
// //   return localStorage.getItem("chat_session_key")
// //     ? localStorage.getItem("chat_session_key")
// //     : "";
// // };

// // export default function ChatWindow({ isOpen, onClose }) {
// //   const [messages, setMessages] = useState([]);
// //   const [options, setOptions] = useState([]);
// //   const [navigationTip, setNavigationTip] = useState("");
// //   const [quickInfo, setQuickInfo] = useState(null);
// //   const [sessionKey, setSessionKey] = useState(null);
// //   const [inputValue, setInputValue] = useState("");
// //   const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
// //   const messagesEndRef = useRef(null);

// //   const user = useCurrentUser();
// //   const { t, i18n } = useTranslation();
// //   const lang = i18n?.language || "en";

// //   const { mutate: startSession, isPending: isStarting } = useStartSession();
// //   const { mutate: sendMessage, isPending: isSending } = useSendMessage();

// //   // Fetch chat history when sessionKey exists - ALWAYS enabled
// //   const {
// //     data: historyData,
// //     isLoading: isLoadingHistory,
// //     refetch: refetchHistory,
// //   } = useGetHistory({
// //     session_key: getSessionKey(),
// //   });

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages, options, isOpen]);

// //   // Check for existing session when component mounts or opens
// //   useEffect(() => {
// //     if (isOpen) {
// //       const storedSessionKey = localStorage.getItem("chat_session_key");
// //       console.log("Stored session key:", storedSessionKey); // Debug log

// //       if (storedSessionKey) {
// //         setSessionKey(storedSessionKey);
// //         // Force refetch when session key is set from localStorage
// //         setTimeout(() => {
// //           refetchHistory();
// //         }, 100);
// //       } else {
// //         // No session exists, show start chat
// //         setSessionKey(null);
// //       }
// //     }
// //   }, [isOpen]);

// //   // Load history when data is fetched
// //   useEffect(() => {
// //     console.log("History Data:", historyData); // Debug log

// //     if (historyData?.data?.messages && !isHistoryLoaded) {
// //       const history = historyData.data.messages.map((m) => ({
// //         id: m.id ?? nextLocalId(),
// //         text: m.message,
// //         sender: m.sender,
// //         time: formatTime(m.created_at),
// //       }));

// //       setMessages(history);
// //       setIsHistoryLoaded(true);

// //       // Update session key if needed
// //       if (historyData.data.session_key) {
// //         setSessionKey(historyData.data.session_key);
// //         localStorage.setItem("chat_session_key", historyData.data.session_key);
// //       }

// //       // Set options if available from history
// //       if (historyData.data.options) {
// //         setOptions(historyData.data.options);
// //       }
// //     }
// //   }, [historyData]);

// //   const applySessionData = (data) => {
// //     const newSessionKey = data.session_key;
// //     setSessionKey(newSessionKey);
// //     setOptions(data.options || []);
// //     setNavigationTip(data.navigation_tip || "");
// //     setQuickInfo(data.quick_info || null);

// //     // Store session key in localStorage for persistence
// //     localStorage.setItem("chat_session_key", newSessionKey);

// //     const history = (data.messages || []).map((m) => ({
// //       id: m.id ?? nextLocalId(),
// //       text: m.message,
// //       sender: m.sender,
// //       time: formatTime(m.created_at),
// //     }));

// //     if (history.length === 0 && data.welcome_message) {
// //       history.push({
// //         id: nextLocalId(),
// //         text: data.welcome_message,
// //         sender: "bot",
// //         time: formatTime(),
// //       });
// //     }

// //     setMessages(history);
// //     setIsHistoryLoaded(true);
// //   };

// //   const handleStartSession = () => {
// //     const data = user?.user_id ? { lang, user_id: user.user_id } : { lang };

// //     startSession(data, {
// //       onSuccess: (response) => {
// //         if (response?.status === "success" && response?.data) {
// //           applySessionData(response.data);
// //         } else {
// //           toast.error(response?.message || "Unable to start chat session.");
// //         }
// //       },
// //       onError: (err) => toast.error(getErrorMessage(err)),
// //     });
// //   };

// //   const handleBotResponse = (response) => {
// //     if (response?.status !== "success" || !response?.data) {
// //       toast.error(
// //         response?.message || "Something went wrong, please try again.",
// //       );
// //       return;
// //     }

// //     const data = response.data;

// //     if (data.bot_answer) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           id: nextLocalId(),
// //           text: data.bot_answer,
// //           sender: "bot",
// //           time: formatTime(),
// //         },
// //       ]);
// //     }

// //     setOptions(data.options || []);
// //     if (data.navigation_tip) setNavigationTip(data.navigation_tip);
// //   };

// //   const sendChatMessage = (messageKey, userLabel) => {
// //     if (!sessionKey || isSending) return;

// //     setMessages((prev) => [
// //       ...prev,
// //       {
// //         id: nextLocalId(),
// //         text: userLabel,
// //         sender: "user",
// //         time: formatTime(),
// //       },
// //     ]);

// //     sendMessage(
// //       { session_key: sessionKey, message: messageKey, lang },
// //       {
// //         onSuccess: handleBotResponse,
// //         onError: (err) => toast.error(getErrorMessage(err)),
// //       },
// //     );
// //   };

// //   const handleOptionClick = (option) => {
// //     sendChatMessage(
// //       option.key,
// //       option.label || option[`label_${lang}`] || option.label_en,
// //     );
// //   };

// //   const handleSend = (e) => {
// //     e.preventDefault();
// //     if (!inputValue.trim() || !sessionKey) return;
// //     window.open(
// //       `https://wa.me/201028195936?text=${encodeURIComponent(inputValue.trim())}`,
// //       "_blank",
// //     );
// //   };

// //   // Clear session and history
// //   const handleClose = () => {
// //     // Uncomment if you want to clear session on close
// //     // localStorage.removeItem('chat_session_key');
// //     // setSessionKey(null);
// //     // setIsHistoryLoaded(false);
// //     // setMessages([]);
// //     onClose();
// //   };

// //   // Debug log to see current state
// //   console.log("Current state:", {
// //     sessionKey,
// //     isHistoryLoaded,
// //     messagesLength: messages.length,
// //   });

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// //           animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
// //           exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
// //           transition={{ type: "spring", stiffness: 300, damping: 25 }}
// //           className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 pointer-events-auto"
// //         >
// //           {/* Header */}
// //           <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
// //             <div className="flex items-center gap-3">
// //               <div className="w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
// //                 <Image
// //                   src="/SHAHD-IMAGE/Book/dr shahd.jpg.jpeg"
// //                   alt="Logo"
// //                   width={40}
// //                   height={40}
// //                   className="object-contain rounded-full"
// //                 />
// //               </div>
// //               <div>
// //                 <h3 className="font-main text-lg leading-tight tracking-wide">
// //                   SHAHD AWAD
// //                 </h3>
// //                 <div className="flex items-center gap-1.5">
// //                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
// //                   <span className="text-xs opacity-90 font-poppins font-light italic">
// //                     Online Support
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //             <button
// //               onClick={handleClose}
// //               className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
// //             >
// //               <X size={20} />
// //             </button>
// //           </div>

// //           {!sessionKey ? (
// //             /* Start Session */
// //             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30 text-center">
// //               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
// //                 <MessageCircle size={30} />
// //               </div>
// //               <p className="text-sm font-poppins text-gray-600">
// //                 Start a conversation with Dr. Shahd Awad's assistant to get help
// //                 with services, pricing, products, bookings and more.
// //               </p>
// //               <button
// //                 onClick={handleStartSession}
// //                 disabled={isStarting}
// //                 className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-poppins shadow-lg shadow-primary/20 disabled:opacity-60 transition-all"
// //               >
// //                 {isStarting ? "Starting..." : "Start Chat"}
// //               </button>
// //             </div>
// //           ) : isLoadingHistory && !isHistoryLoaded ? (
// //             /* Loading History */
// //             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30">
// //               <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
// //               <p className="text-sm font-poppins text-gray-500">
// //                 Loading chat history...
// //               </p>
// //             </div>
// //           ) : (
// //             <>
// //               {/* Messages Area */}
// //               <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
// //                 {messages.length === 0 ? (
// //                   <div className="flex-1 flex items-center justify-center text-gray-400 text-sm font-poppins">
// //                     No messages yet. Start the conversation!
// //                   </div>
// //                 ) : (
// //                   messages.map((msg) => (
// //                     <div
// //                       key={msg.id}
// //                       className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
// //                     >
// //                       <div
// //                         className={`
// //                           max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative whitespace-pre-line
// //                           ${
// //                             msg.sender === "user"
// //                               ? "bg-primary text-white rounded-tr-none shadow-md"
// //                               : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
// //                           }
// //                         `}
// //                       >
// //                         <p className="leading-relaxed">{msg.text}</p>
// //                         <span className="text-[10px] mt-1.5 block opacity-50 text-right">
// //                           {msg.time}
// //                         </span>
// //                       </div>
// //                     </div>
// //                   ))
// //                 )}

// //                 {isSending && (
// //                   <div className="flex justify-start">
// //                     <div className="bg-white text-gray-400 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 px-4 py-3 text-sm font-poppins">
// //                       ...
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div ref={messagesEndRef} />
// //               </div>

// //               {/* Options */}
// //               {options.length > 0 && (
// //                 <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
// //                   {options.map((option) => (
// //                     <button
// //                       key={option.key}
// //                       onClick={() => handleOptionClick(option)}
// //                       disabled={isSending}
// //                       className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1 disabled:opacity-60"
// //                     >
// //                       {option.image_url ? (
// //                         <Image
// //                           src={option.image_url}
// //                           alt={option.label || ""}
// //                           width={16}
// //                           height={16}
// //                           className="rounded-full object-cover w-4 h-4"
// //                         />
// //                       ) : (
// //                         option.icon && <span>{option.icon}</span>
// //                       )}
// //                       {option.label ||
// //                         option[`label_${lang}`] ||
// //                         option.label_en}
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}

// //               {/* Input Area */}
// //               <form
// //                 onSubmit={handleSend}
// //                 className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
// //               >
// //                 <div className="flex-1 relative">
// //                   <input
// //                     type="text"
// //                     value={inputValue}
// //                     onChange={(e) => setInputValue(e.target.value)}
// //                     placeholder="Type your message..."
// //                     disabled={isSending}
// //                     className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all disabled:opacity-60"
// //                   />
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   disabled={isSending}
// //                   className={`
// //                     w-11 h-11 rounded-2xl flex items-center justify-center transition-all
// //                     ${inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100" : "bg-gray-100 text-gray-400 scale-95"}
// //                   `}
// //                 >
// //                   <Send size={20} />
// //                 </button>
// //               </form>
// //             </>
// //           )}
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Send, MessageCircle, ArrowLeft } from "lucide-react";
// import Image from "next/image";
// import { toast } from "sonner";
// import {
//   useStartSession,
//   useSendMessage,
//   useGetHistory,
// } from "../../hooks/chatbot/useChatbot";
// import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
// import { useTranslation } from "react-i18next";

// const getErrorMessage = (err) =>
//   err?.response?.data?.message ||
//   err?.message ||
//   "Something went wrong, please try again.";

// const formatTime = (dateStr) => {
//   const date = dateStr ? new Date(dateStr.replace(" ", "T")) : new Date();
//   const valid = !isNaN(date.getTime()) ? date : new Date();
//   return valid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// };

// let localMessageId = 0;
// const nextLocalId = () => `local-${Date.now()}-${localMessageId++}`;

// // Fix: Check if window is defined before accessing localStorage
// const getSessionKey = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("chat_session_key") || "";
//   }
//   return "";
// };

// export default function ChatWindow({ isOpen, onClose }) {
//   const [messages, setMessages] = useState([]);
//   const [options, setOptions] = useState([]);
//   const [navigationTip, setNavigationTip] = useState("");
//   const [quickInfo, setQuickInfo] = useState(null);
//   const [sessionKey, setSessionKey] = useState(null);
//   const [inputValue, setInputValue] = useState("");
//   const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
//   const messagesEndRef = useRef(null);

//   const user = useCurrentUser();
//   const { t, i18n } = useTranslation();
//   const lang = i18n?.language || "en";

//   const { mutate: startSession, isPending: isStarting } = useStartSession();
//   const { mutate: sendMessage, isPending: isSending } = useSendMessage();

//   // Fetch chat history when sessionKey exists - ALWAYS enabled
//   const {
//     data: historyData,
//     isLoading: isLoadingHistory,
//     refetch: refetchHistory,
//   } = useGetHistory({
//     session_key: getSessionKey(),
//   });

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, options, isOpen]);

//   // Check for existing session when component mounts or opens
//   useEffect(() => {
//     if (isOpen && typeof window !== "undefined") {
//       const storedSessionKey = localStorage.getItem("chat_session_key");

//       if (storedSessionKey) {
//         setSessionKey(storedSessionKey);
//         // Force refetch to reload past messages
//         setTimeout(() => {
//           refetchHistory();
//         }, 100);
//         // Resume the flow: ask the bot for the current step's options again
//         sendChatMessage(0, "", storedSessionKey);
//       } else {
//         // No session exists, show start chat
//         setSessionKey(null);
//       }
//     }
//   }, [isOpen]);

//   // Load history when data is fetched
//   useEffect(() => {
//     if (historyData?.data?.messages && !isHistoryLoaded) {
//       const history = historyData.data.messages.map((m) => ({
//         id: m.id ?? nextLocalId(),
//         text: m.message,
//         sender: m.sender,
//         time: formatTime(m.created_at),
//       }));

//       setMessages(history);
//       setIsHistoryLoaded(true);

//       // Update session key if needed
//       if (historyData.data.session_key) {
//         setSessionKey(historyData.data.session_key);
//         if (typeof window !== "undefined") {
//           localStorage.setItem(
//             "chat_session_key",
//             historyData.data.session_key,
//           );
//         }
//       }

//       // Set options if available from history
//       if (historyData.data.options) {
//         setOptions(historyData.data.options);
//       }
//     }
//   }, [historyData]);

//   const applySessionData = (data) => {
//     const newSessionKey = data.session_key;
//     setSessionKey(newSessionKey);
//     setOptions(data.options || []);
//     setNavigationTip(data.navigation_tip || "");
//     setQuickInfo(data.quick_info || null);

//     // Store session key in localStorage for persistence
//     if (typeof window !== "undefined") {
//       localStorage.setItem("chat_session_key", newSessionKey);
//     }

//     const history = (data.messages || []).map((m) => ({
//       id: m.id ?? nextLocalId(),
//       text: m.message,
//       sender: m.sender,
//       time: formatTime(m.created_at),
//     }));

//     if (history.length === 0 && data.welcome_message) {
//       history.push({
//         id: nextLocalId(),
//         text: data.welcome_message,
//         sender: "bot",
//         time: formatTime(),
//       });
//     }

//     setMessages(history);
//     setIsHistoryLoaded(true);
//   };

//   const handleStartSession = () => {
//     const data = user?.user_id ? { lang, user_id: user.user_id } : { lang };

//     startSession(data, {
//       onSuccess: (response) => {
//         if (response?.status === "success" && response?.data) {
//           applySessionData(response.data);
//         } else {
//           toast.error(response?.message || "Unable to start chat session.");
//         }
//       },
//       onError: (err) => toast.error(getErrorMessage(err)),
//     });
//   };

//   const handleBotResponse = (response) => {
//     if (response?.status !== "success" || !response?.data) {
//       toast.error(
//         response?.message || "Something went wrong, please try again.",
//       );
//       return;
//     }

//     const data = response.data;

//     if (data.bot_answer) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: nextLocalId(),
//           text: data.bot_answer,
//           sender: "bot",
//           time: formatTime(),
//         },
//       ]);
//     }

//     setOptions(data.options || []);
//     if (data.navigation_tip) setNavigationTip(data.navigation_tip);
//   };

//   const sendChatMessage = (messageKey, userLabel, keyOverride) => {
//     const activeSessionKey = keyOverride || sessionKey;
//     if (!activeSessionKey || isSending) return;

//     if (userLabel) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           id: nextLocalId(),
//           text: userLabel,
//           sender: "user",
//           time: formatTime(),
//         },
//       ]);
//     }

//     sendMessage(
//       { session_key: activeSessionKey, message: messageKey, lang },
//       {
//         onSuccess: handleBotResponse,
//         onError: (err) => toast.error(getErrorMessage(err)),
//       },
//     );
//   };

//   const handleOptionClick = (option) => {
//     sendChatMessage(
//       option.key,
//       option.label || option[`label_${lang}`] || option.label_en,
//     );
//   };

//   const handleGoBack = () => {
//     sendChatMessage(0, "Back");
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!inputValue.trim() || !sessionKey) return;
//     window.open(
//       `https://wa.me/201028195936?text=${encodeURIComponent(inputValue.trim())}`,
//       "_blank",
//     );
//   };

//   // Clear session and history
//   const handleClose = () => {
//     // Uncomment if you want to clear session on close
//     // if (typeof window !== "undefined") {
//     //   localStorage.removeItem('chat_session_key');
//     // }
//     // setSessionKey(null);
//     // setIsHistoryLoaded(false);
//     // setMessages([]);
//     onClose();
//   };

//   // Debug log to see current state
//   console.log("Current state:", {
//     sessionKey,
//     isHistoryLoaded,
//     messagesLength: messages.length,
//   });

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
//           animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
//           exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
//           transition={{ type: "spring", stiffness: 300, damping: 25 }}
//           className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 pointer-events-auto"
//         >
//           {/* Header */}
//           <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
//             <div className="flex items-center gap-3">
//               {sessionKey && (
//                 <button
//                   onClick={handleGoBack}
//                   disabled={isSending}
//                   className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors disabled:opacity-60"
//                 >
//                   <ArrowLeft size={20} />
//                 </button>
//               )}
//               <div className="w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
//                 <Image
//                   src="/SHAHD-IMAGE/Book/dr shahd.jpg.jpeg"
//                   alt="Logo"
//                   width={40}
//                   height={40}
//                   className="object-contain rounded-full"
//                 />
//               </div>
//               <div>
//                 <h3 className="font-main text-lg leading-tight tracking-wide">
//                   SHAHD AWAD
//                 </h3>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//                   <span className="text-xs opacity-90 font-poppins font-light italic">
//                     Online Support
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={handleClose}
//               className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {!sessionKey ? (
//             /* Start Session */
//             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30 text-center">
//               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                 <MessageCircle size={30} />
//               </div>
//               <p className="text-sm font-poppins text-gray-600">
//                 Start a conversation with Dr. Shahd Awad's assistant to get help
//                 with services, pricing, products, bookings and more.
//               </p>
//               <button
//                 onClick={handleStartSession}
//                 disabled={isStarting}
//                 className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-poppins shadow-lg shadow-primary/20 disabled:opacity-60 transition-all"
//               >
//                 {isStarting ? "Starting..." : "Start Chat"}
//               </button>
//             </div>
//           ) : isLoadingHistory && !isHistoryLoaded ? (
//             /* Loading History */
//             <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30">
//               <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-sm font-poppins text-gray-500">
//                 Loading chat history...
//               </p>
//             </div>
//           ) : (
//             <>
//               {/* Messages Area */}
//               <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
//                 {messages.length === 0 ? (
//                   <div className="flex-1 flex items-center justify-center text-gray-400 text-sm font-poppins">
//                     No messages yet. Start the conversation!
//                   </div>
//                 ) : (
//                   messages.map((msg) => (
//                     <div
//                       key={msg.id}
//                       className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                     >
//                       <div
//                         className={`
//                           max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative whitespace-pre-line
//                           ${
//                             msg.sender === "user"
//                               ? "bg-primary text-white rounded-tr-none shadow-md"
//                               : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
//                           }
//                         `}
//                       >
//                         <p className="leading-relaxed">{msg.text}</p>
//                         <span className="text-[10px] mt-1.5 block opacity-50 text-right">
//                           {msg.time}
//                         </span>
//                       </div>
//                     </div>
//                   ))
//                 )}

//                 {isSending && (
//                   <div className="flex justify-start">
//                     <div className="bg-white text-gray-400 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 px-4 py-3 text-sm font-poppins">
//                       ...
//                     </div>
//                   </div>
//                 )}

//                 <div ref={messagesEndRef} />
//               </div>

//               {/* Options */}
//               {options.length > 0 && (
//                 <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
//                   {options.map((option) => (
//                     <button
//                       key={option.key}
//                       onClick={() => handleOptionClick(option)}
//                       disabled={isSending}
//                       className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1 disabled:opacity-60"
//                     >
//                       {option.image_url ? (
//                         <Image
//                           src={option.image_url}
//                           alt={option.label || ""}
//                           width={16}
//                           height={16}
//                           className="rounded-full object-cover w-4 h-4"
//                         />
//                       ) : (
//                         option.icon && <span>{option.icon}</span>
//                       )}
//                       {option.label ||
//                         option[`label_${lang}`] ||
//                         option.label_en}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Input Area */}
//               <form
//                 onSubmit={handleSend}
//                 className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
//               >
//                 <div className="flex-1 relative">
//                   <input
//                     type="text"
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     placeholder="Type your message..."
//                     disabled={isSending}
//                     className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all disabled:opacity-60"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSending}
//                   className={`
//                     w-11 h-11 rounded-2xl flex items-center justify-center transition-all
//                     ${inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100" : "bg-gray-100 text-gray-400 scale-95"}
//                   `}
//                 >
//                   <Send size={20} />
//                 </button>
//               </form>
//             </>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import {
  useStartSession,
  useSendMessage,
  useGetHistory,
} from "../../hooks/chatbot/useChatbot";
import { useCurrentUser } from "../../hooks/auth/useCurrentUser";
import { useTranslation } from "react-i18next";

const getErrorMessage = (err) =>
  err?.response?.data?.message ||
  err?.message ||
  "Something went wrong, please try again.";

const formatTime = (dateStr) => {
  const date = dateStr ? new Date(dateStr.replace(" ", "T")) : new Date();
  const valid = !isNaN(date.getTime()) ? date : new Date();
  return valid.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

let localMessageId = 0;
const nextLocalId = () => `local-${Date.now()}-${localMessageId++}`;

// Fix: Check if window is defined before accessing localStorage
const getSessionKey = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("chat_session_key") || "";
  }
  return "";
};

export default function ChatWindow({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [navigationTip, setNavigationTip] = useState("");
  const [quickInfo, setQuickInfo] = useState(null);
  const [sessionKey, setSessionKey] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isHistoryLoaded, setIsHistoryLoaded] = useState(false);
  const messagesEndRef = useRef(null);

  const user = useCurrentUser();
  const { t, i18n } = useTranslation();
  const lang = i18n?.language || "en";

  const { mutate: startSession, isPending: isStarting } = useStartSession();
  const { mutate: sendMessage, isPending: isSending } = useSendMessage();

  // Fetch chat history when sessionKey exists - ALWAYS enabled
  const {
    data: historyData,
    isLoading: isLoadingHistory,
    refetch: refetchHistory,
  } = useGetHistory({
    session_key: getSessionKey(),
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, options, isOpen]);

  // Check for existing session when component mounts or opens
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const storedSessionKey = localStorage.getItem("chat_session_key");

      if (storedSessionKey) {
        setSessionKey(storedSessionKey);
        // Force refetch to reload past messages
        setTimeout(() => {
          refetchHistory();
        }, 100);
      } else {
        // No session exists, show start chat
        setSessionKey(null);
      }
    }
  }, [isOpen]);

  // Load history when data is fetched
  useEffect(() => {
    if (historyData?.data?.messages && !isHistoryLoaded) {
      const history = historyData.data.messages.map((m) => ({
        id: m.id ?? nextLocalId(),
        text: m.message,
        sender: m.sender,
        time: formatTime(m.created_at),
      }));

      setMessages(history);
      setIsHistoryLoaded(true);

      // Update session key if needed
      if (historyData.data.session_key) {
        setSessionKey(historyData.data.session_key);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "chat_session_key",
            historyData.data.session_key,
          );
        }
      }

      // Set options if available from history
      if (historyData.data.options) {
        setOptions(historyData.data.options);
      }
    }
  }, [historyData]);

  const applySessionData = (data) => {
    const newSessionKey = data.session_key;
    setSessionKey(newSessionKey);
    setOptions(data.options || []);
    setNavigationTip(data.navigation_tip || "");
    setQuickInfo(data.quick_info || null);

    // Store session key in localStorage for persistence
    if (typeof window !== "undefined") {
      localStorage.setItem("chat_session_key", newSessionKey);
    }

    const history = (data.messages || []).map((m) => ({
      id: m.id ?? nextLocalId(),
      text: m.message,
      sender: m.sender,
      time: formatTime(m.created_at),
    }));

    if (history.length === 0 && data.welcome_message) {
      history.push({
        id: nextLocalId(),
        text: data.welcome_message,
        sender: "bot",
        time: formatTime(),
      });
    }

    setMessages(history);
    setIsHistoryLoaded(true);
  };

  const handleStartSession = () => {
    const data = user?.user_id ? { lang, user_id: user.user_id } : { lang };

    startSession(data, {
      onSuccess: (response) => {
        if (response?.status === "success" && response?.data) {
          applySessionData(response.data);
        } else {
          toast.error(response?.message || "Unable to start chat session.");
        }
      },
      onError: (err) => toast.error(getErrorMessage(err)),
    });
  };

  const handleBotResponse = (response) => {
    if (response?.status !== "success" || !response?.data) {
      toast.error(
        response?.message || "Something went wrong, please try again.",
      );
      return;
    }

    const data = response.data;

    if (data.bot_answer) {
      setMessages((prev) => [
        ...prev,
        {
          id: nextLocalId(),
          text: data.bot_answer,
          sender: "bot",
          time: formatTime(),
        },
      ]);
    }

    setOptions(data.options || []);
    if (data.navigation_tip) setNavigationTip(data.navigation_tip);
  };

  const sendChatMessage = (messageKey, userLabel) => {
    if (!sessionKey || isSending) return;

    // Only add user message if there's a label (not for back button or system messages)
    if (userLabel) {
      setMessages((prev) => [
        ...prev,
        {
          id: nextLocalId(),
          text: userLabel,
          sender: "user",
          time: formatTime(),
        },
      ]);
    }

    sendMessage(
      { session_key: sessionKey, message: messageKey, lang },
      {
        onSuccess: handleBotResponse,
        onError: (err) => toast.error(getErrorMessage(err)),
      },
    );
  };

  const handleOptionClick = (option) => {
    sendChatMessage(
      option.key,
      option.label || option[`label_${lang}`] || option.label_en,
    );
  };

  // Go back to previous step - sends message key 0
  const handleGoBack = () => {
    if (!sessionKey || isSending) return;
    // Send "0" as the message key to go back
    sendChatMessage("back", ""); // Empty user label so no user message is added
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !sessionKey) return;
    window.open(
      `https://wa.me/201028195936?text=${encodeURIComponent(inputValue.trim())}`,
      "_blank",
    );
  };

  // Clear session and history
  const handleClose = () => {
    onClose();
  };



  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100, x: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed lg:bottom-4 lg:right-26 bottom-25 right-5 z-999999999999988 w-[90%] max-w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-100 pointer-events-auto"
        >
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-3">
              {sessionKey && (
                <button
                  onClick={handleGoBack}
                  disabled={isSending}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors disabled:opacity-60"
                  title="Go back"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div className="w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
                <Image
                  src="/SHAHD-IMAGE/Book/dr shahd.jpg.jpeg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-main text-lg leading-tight tracking-wide">
                  SHAHD AWAD
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs opacity-90 font-poppins font-light italic">
                    Online Support
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {!sessionKey ? (
            /* Start Session */
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle size={30} />
              </div>
              <p className="text-sm font-poppins text-gray-600">
                Start a conversation with Dr. Shahd Awad's assistant to get help
                with services, pricing, products, bookings and more.
              </p>
              <button
                onClick={handleStartSession}
                disabled={isStarting}
                className="px-6 py-3 bg-primary text-white rounded-2xl text-sm font-poppins shadow-lg shadow-primary/20 disabled:opacity-60 transition-all"
              >
                {isStarting ? "Starting..." : "Start Chat"}
              </button>
            </div>
          ) : isLoadingHistory && !isHistoryLoaded ? (
            /* Loading History */
            <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6 bg-[#fff9f7]/30">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-poppins text-gray-500">
                Loading chat history...
              </p>
            </div>
          ) : (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#fff9f7]/30 hide-scrollbar">
                {messages.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center text-gray-400 text-sm font-poppins">
                    No messages yet. Start the conversation!
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] p-3.5 rounded-2xl text-sm font-poppins relative whitespace-pre-line
                          ${
                            msg.sender === "user"
                              ? "bg-primary text-white rounded-tr-none shadow-md"
                              : "bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100"
                          }
                        `}
                      >
                        <p className="leading-relaxed">{msg.text}</p>
                        <span className="text-[10px] mt-1.5 block opacity-50 text-right">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))
                )}

                {isSending && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-400 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 px-4 py-3 text-sm font-poppins">
                      ...
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Options */}
              {options.length > 0 && (
                <div className="px-4 py-2 flex flex-wrap gap-2 bg-[#fff9f7]/30">
                  {options.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => handleOptionClick(option)}
                      disabled={isSending}
                      className="px-3 py-1.5 bg-white border border-primary/20 rounded-full text-xs font-poppins text-primary hover:bg-primary/10 transition-all flex items-center gap-1 disabled:opacity-60"
                    >
                      {option.image_url ? (
                        <Image
                          src={option.image_url}
                          alt={option.label || ""}
                          width={16}
                          height={16}
                          className="rounded-full object-cover w-4 h-4"
                        />
                      ) : (
                        option.icon && <span>{option.icon}</span>
                      )}
                      {option.label ||
                        option[`label_${lang}`] ||
                        option.label_en}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <form
                onSubmit={handleSend}
                className="p-4 bg-white border-t border-gray-100 flex items-center gap-3"
              >
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isSending}
                    className="w-full pl-4 pr-10 py-3 bg-gray-50 rounded-2xl text-sm font-poppins focus:outline-none focus:ring-1 focus:ring-primary/30 border border-transparent focus:border-primary/20 transition-all disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSending}
                  className={`
                    w-11 h-11 rounded-2xl flex items-center justify-center transition-all
                    ${inputValue.trim() ? "bg-primary text-white shadow-lg shadow-primary/20 scale-100" : "bg-gray-100 text-gray-400 scale-95"}
                  `}
                >
                  <Send size={20} />
                </button>
              </form>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

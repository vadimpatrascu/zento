"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send } from "lucide-react";

const conversations = [
  { id: "1", name: "Maria D.", initials: "MD", lastMessage: "Mulțumesc pentru tema de lucru!", time: "10:32", unread: 2 },
  { id: "2", name: "Alexandru P.", initials: "AP", lastMessage: "Am completat jurnalul", time: "Ieri", unread: 0 },
  { id: "3", name: "Elena S.", initials: "ES", lastMessage: "Pot reprograma ședința?", time: "Ieri", unread: 1 },
  { id: "4", name: "Ion M.", initials: "IM", lastMessage: "Am o întrebare despre exercițiu", time: "Lun", unread: 2 },
  { id: "5", name: "Andreea L.", initials: "AL", lastMessage: "Vă mulțumesc!", time: "Lun", unread: 0 },
];

const messages = [
  { from: "client", text: "Bună ziua, dr. Popescu! Am terminat tema pe care mi-ați dat-o.", time: "10:15" },
  { from: "specialist", text: "Bună, Maria! Mă bucur. Cum te-ai simțit completând exercițiul?", time: "10:18" },
  { from: "client", text: "La început a fost greu, dar apoi am observat că gândurile negative au început să se clarifice. Am reușit să identific 3 patterns.", time: "10:25" },
  { from: "specialist", text: "Excelent! Asta e exact progresul pe care îl urmăream. Vom discuta mai în detaliu la ședința de luni. Până atunci, continuă cu jurnalul zilnic.", time: "10:28" },
  { from: "client", text: "Mulțumesc pentru tema de lucru!", time: "10:32" },
];

export default function MesajePage() {
  const [selected, setSelected] = useState(conversations[0]);
  const [input, setInput] = useState("");

  return (
    <div className="flex h-full">
      {/* Conversation list */}
      <div className="w-80 border-r bg-background">
        <div className="border-b p-4">
          <h1 className="text-lg font-bold">Mesaje</h1>
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Caută conversație..." className="pl-9" />
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-140px)]">
          {conversations.map((conv) => (
            <button
              type="button"
              key={conv.id}
              onClick={() => setSelected(conv)}
              className={`flex w-full items-center gap-3 border-b p-4 text-left transition-colors hover:bg-accent/50 ${
                selected.id === conv.id ? "bg-accent/50" : ""
              }`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {conv.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{conv.name}</span>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="truncate text-xs text-muted-foreground">
                    {conv.lastMessage}
                  </span>
                  {conv.unread > 0 && (
                    <Badge className="ml-2 h-5 w-5 items-center justify-center rounded-full p-0 text-xs">
                      {conv.unread}
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b px-6 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {selected.initials}
          </div>
          <div>
            <div className="font-medium">{selected.name}</div>
            <div className="text-xs text-muted-foreground">
              Ultima activitate: azi la {selected.time}
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "specialist" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${
                    msg.from === "specialist"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`mt-1 text-right text-xs ${
                      msg.from === "specialist"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInput("");
            }}
            className="flex items-center gap-3"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrie un mesaj..."
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

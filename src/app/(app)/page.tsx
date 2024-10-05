'use client';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import messages from '@/messages.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Home() {
  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">
            Confess your thoughts, express your feelings, Go for the ultimate{" "}
            <span className={cn(
              "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent",
              "animate-gradient-x"
            )}>
              VERDICT
            </span>
          </h1>
          <p className={cn(
               "mt-3 md:mt-4 text-base md:text-lg",
               "font-bold bg-gradient-to-r from-blue-400 to-yellow-500 bg-clip-text text-transparent",
               "animate-gradient-x"
             )}>
            Here you can give your verdict anonymously.
          </p>
        </section>

        {/* Carousel for Messages */}
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full max-w-lg md:max-w-xl"
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-black text-white">
        © 2024 Verdict. Made by{" "}
        <Link href="https://github.com/hikki78" className={cn(
          "font-bold bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent",
          "hover:from-blue-500 hover:to-green-400 transition-all duration-300"
        )}>
          Me
        </Link>{" "}
        with ❤️.
      </footer>
    </>
  );
}
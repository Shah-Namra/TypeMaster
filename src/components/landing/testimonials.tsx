import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Software Developer',
    image: '',
    content: 'TypeMaster helped me increase my typing speed from 60 to 95 WPM in just two months. The real-time feedback is invaluable.',
  },
  {
    name: 'Someone Doe',
    role: 'Content Writer',
    image: '',
    content: 'The variety of practice modes keeps me engaged. I especially love the programming snippets feature.',
  },
  {
    name: 'Random Doe',
    role: 'Student',
    image: '',
    content: 'Perfect for preparing for coding interviews. The code snippets mode is a game-changer.',
  },
  {
    name: 'technical Doe',
    role: 'Technical Writer',
    image: '',
    content: 'The customizable themes and sound effects make typing practice actually enjoyable!',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container px-4 mx-auto py-24 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-muted-foreground">Join thousands of satisfied typists</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-background">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonials[currentIndex].image} />
                    <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{testimonials[currentIndex].content}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
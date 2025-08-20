"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formState);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success
    setTimeout(() => {
      setFormState({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub", color: "hover:text-gray-600" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter", color: "hover:text-blue-400" },
    { icon: MessageCircle, href: siteConfig.links.whatsapp, label: "WhatsApp", color: "hover:text-green-600" },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply have a great conversation about technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            <motion.div variants={fadeIn("right", 0.3)} className="lg:col-span-1">
              <div className="space-y-6">
                {/* Main Contact Card */}
                <Card className="card-gradient border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 7666387191</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">suyashambule1234@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                      <div className="p-2 rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Maharashtra, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="card-gradient border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl font-bold">Follow Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full hover:scale-105 transition-transform"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.icon className="h-4 w-4 mr-2" />
                            {social.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="card-gradient border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Availability</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Weekdays</span>
                        <Badge variant="secondary">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Weekends</span>
                        <Badge variant="secondary">Flexible</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Response Time</span>
                        <Badge variant="outline">Within 24h</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeIn("left", 0.3)} className="lg:col-span-2">
              <Card className="card-gradient border-0 shadow-lg h-full">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    I'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          placeholder="What's this about?"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell me more about your inquiry..."
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Info Section */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="text-center"
          >
            <Card className="card-gradient border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Quality Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Committed to delivering excellence
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Flexible Schedule</h4>
                    <p className="text-sm text-muted-foreground">
                      Available for both short and long-term projects
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

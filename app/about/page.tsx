"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Section */}
          <motion.div variants={fadeIn("right", 0.3)} className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">
              I am an AI/ML engineer passionate about building intelligent
              systems, automating workflows, and applying cutting-edge
              technologies to solve real-world problems. My focus lies in
              Natural Language Processing, Large Language Models, and MLOps
              practices.
            </p>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Journey</h2>
              <p className="text-muted-foreground">
                From engineering foundations to advanced AI/ML, I have worked on
                projects spanning intent classification, RAG pipelines, and
                automated ML workflows with MLOps. I believe in continuous
                learning and staying ahead in the evolving AI ecosystem.
              </p>
            </div>
            <Button className="mt-6" asChild>
              <a href="/suyash_ambule_.pdf" download>
                Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="relative h-[500px]"
          >
            <Image
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="Professional photo"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeIn("up", 0.1)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor’s degree in Engineering with specialization in
                  Artificial Intelligence, Machine Learning, and Data Science.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <p className="text-muted-foreground">
                  Completed internships and projects in NLP, LLM fine-tuning,
                  and MLOps deployment using tools like Hugging Face, MLflow,
                  Docker, and AWS SageMaker.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.3)}>
            <Card className="h-full card-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <p className="text-muted-foreground">
                  Proficient in Python, TensorFlow, PyTorch, Hugging Face,
                  FastAPI, and MLOps tools. Strong foundation in
                  problem-solving, collaboration, and building scalable AI
                  solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FileDown, ExternalLink, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function CertificatesPage() {
	const handleDownload = (pdfPath: string, title: string) => {
		// Create a temporary link element to trigger download
		const link = document.createElement('a');
		link.href = pdfPath;
		link.download = `${title.replace(/\s+/g, '_')}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleVerify = (url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional certifications and achievements that demonstrate my expertise
							and commitment to continuous learning.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient hover:shadow-lg transition-all duration-300">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<Award className="h-8 w-8 text-primary shrink-0" />
											<div>
												<h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
												<p className="text-muted-foreground">{cert.issuer}</p>
												<p className="text-sm text-muted-foreground mt-2">
													Issued: {cert.date}
												</p>
												{cert.id && (
													<p className="text-sm text-muted-foreground">
														Certificate ID: {cert.id}
													</p>
												)}
											</div>
										</div>
									</CardContent>
									<CardFooter className="p-6 pt-0 gap-2">
										{cert.url && (
											<Button 
												size="sm" 
												variant="outline" 
												onClick={() => handleVerify(cert.url!)}
												className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
											>
												<ExternalLink className="h-4 w-4 mr-2" />
												Verify
											</Button>
										)}
										{cert.pdf && (
											<Button 
												size="sm" 
												variant="outline" 
												onClick={() => handleDownload(cert.pdf!, cert.title)}
												className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
											>
												<FileDown className="h-4 w-4 mr-2" />
												Download
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
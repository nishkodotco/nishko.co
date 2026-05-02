import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function ResumePage() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 font-sans h-[calc(100vh-4rem)] flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col space-y-6">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
            <p className="text-muted-foreground mt-2">View or download my full professional resume.</p>
          </div>
          <Button className="flex items-center gap-2 shadow-sm">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <Card className="flex-1 shadow-sm border-[#E5E5E5] overflow-hidden flex flex-col min-h-[600px]">
          <CardContent className="p-0 flex-1 bg-zinc-100 flex items-center justify-center">
            {/* Replace the src below with the actual path to your resume PDF in the public folder */}
            {/* <iframe src="/resume.pdf" className="w-full h-full border-none" title="Resume PDF Viewer" /> */}
            
            <div className="text-center space-y-4">
              <p className="text-zinc-500">PDF Viewer Placeholder</p>
              <p className="text-sm text-zinc-400">Place your resume.pdf in the /public folder and update this iframe.</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

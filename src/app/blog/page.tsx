import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground text-lg">Thoughts, tutorials, and deep-dives into Azure and Cloud Engineering.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {/* Placeholder Article 1 */}
          <Card className="hover:border-primary/50 transition-colors shadow-sm border-[#E5E5E5] cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-xl">Architecting a GPT-4 RAG Pipeline on Azure</CardTitle>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Oct 12, 2024</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-700">A comprehensive guide on deploying a secure, enterprise-grade Retrieval-Augmented Generation pipeline using Azure OpenAI, Cognitive Search, and private endpoints.</p>
              <div className="flex gap-2">
                <Badge variant="secondary">Azure OpenAI</Badge>
                <Badge variant="secondary">Architecture</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder Article 2 */}
          <Card className="hover:border-primary/50 transition-colors shadow-sm border-[#E5E5E5] cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <CardTitle className="text-xl">Terraform Best Practices for Production Environments</CardTitle>
                <span className="text-sm text-muted-foreground whitespace-nowrap">Aug 05, 2024</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-700">How to structure your Terraform modules, manage state securely, and automate deployments using Azure DevOps pipelines.</p>
              <div className="flex gap-2">
                <Badge variant="secondary">Terraform</Badge>
                <Badge variant="secondary">DevOps</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}

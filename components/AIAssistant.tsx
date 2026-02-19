
import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, MessageSquare, Megaphone, FileText, Share2 } from 'lucide-react';
import { AIAction, AIActionType } from '../types';
import { generateMarketingContent } from '../services/geminiService';

const actions: AIAction[] = [
  { id: 'social', title: 'Social Media Desc', icon: 'Share2', description: 'Generate engaging posts for IG or FB.' },
  { id: 'proposal', title: 'Owner Proposal', icon: 'MessageSquare', description: 'Write a professional note to the gym owner.' },
  { id: 'bio', title: 'Google Business Bio', icon: 'FileText', description: 'Create a localized search-friendly bio.' },
  { id: 'flyer', title: 'Flyer Caption', icon: 'Megaphone', description: 'Hook local members with a catchy caption.' },
];

const AIAssistant: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<AIActionType | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (id: AIActionType) => {
    setSelectedAction(id);
    setLoading(true);
    setResult(null);
    const content = await generateMarketingContent(id);
    setResult(content);
    setLoading(false);
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div id="ai-tools" className="bg-zinc-900/50 border border-emerald-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-emerald-500/20 p-2 rounded-lg">
          <Sparkles className="text-emerald-500 w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold">G4 AI Marketing Suite</h2>
          <p className="text-zinc-400 text-sm">Powered by Gemini - Instant business promotion tools</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleGenerate(action.id)}
            disabled={loading}
            className={`p-4 rounded-xl border text-left transition-all hover:scale-105 active:scale-95 flex flex-col gap-3 group ${
              selectedAction === action.id 
                ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/40' 
                : 'bg-zinc-800 border-white/5 text-zinc-300 hover:border-emerald-500/50 hover:bg-zinc-800/80'
            }`}
          >
            <div className={`p-2 rounded-lg w-fit ${selectedAction === action.id ? 'bg-emerald-400/20' : 'bg-zinc-700 group-hover:bg-emerald-500/10'}`}>
              {getIcon(action.icon)}
            </div>
            <div>
              <div className="font-bold text-sm">{action.title}</div>
              <div className="text-xs opacity-60 leading-tight mt-1">{action.description}</div>
            </div>
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
          <p className="text-sm text-zinc-400 animate-pulse">Consulting the digital trainer...</p>
        </div>
      )}

      {result && !loading && (
        <div className="bg-zinc-950/50 border border-white/5 rounded-2xl p-6 relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-400 hover:text-white transition-all"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <div className="prose prose-invert prose-emerald max-w-none">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">Generated Content</h3>
            <div className="text-zinc-300 whitespace-pre-wrap leading-relaxed text-sm">
              {result}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

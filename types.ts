
export interface HouseDesign {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  tags: string[];
}

export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
  isGenerating?: boolean;
}

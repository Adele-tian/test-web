
import { HouseDesign } from './types';

export const INITIAL_DESIGNS: HouseDesign[] = [
  {
    id: '1',
    title: 'Scandinavian Hygge Retreat',
    description: 'A minimalist yet profoundly cozy space emphasizing natural wood, light textiles, and a central stone fireplace.',
    imageUrl: 'https://picsum.photos/seed/warmhouse1/1200/800',
    features: ['Floor-to-ceiling windows', 'White oak flooring', 'Soft ambient lighting'],
    tags: ['Minimalist', 'Nordic', 'Wood']
  },
  {
    id: '2',
    title: 'Modern Rustic Farmhouse',
    description: 'Blending contemporary clean lines with traditional rustic warmth. High vaulted ceilings with exposed beams.',
    imageUrl: 'https://picsum.photos/seed/warmhouse2/1200/800',
    features: ['Exposed timber beams', 'Large kitchen island', 'Wrap-around porch'],
    tags: ['Modern', 'Rustic', 'Spacious']
  },
  {
    id: '3',
    title: 'Cotswold Cottage Charm',
    description: 'A storybook home featuring warm stone walls, floral accents, and intimate, sun-drenched reading nooks.',
    imageUrl: 'https://picsum.photos/seed/warmhouse3/1200/800',
    features: ['Inglenook fireplace', 'Stone walls', 'Secret garden access'],
    tags: ['Cottagecore', 'Stone', 'Traditional']
  }
];

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'sample-test',
    question: 'Can I test your editing quality before placing an order?',
    answer: 'Absolutely! Send us your product photos or raw footage on WhatsApp. We will craft a free 10-second sample hook for your brand with zero obligation so you can verify our quality before paying anything.',
  },
  {
    id: 'turnaround',
    question: 'How long does it take to deliver a video?',
    answer: 'Standard delivery is within 48 to 72 hours per ad. Priority rush delivery (24-48 hours) is included with our Growth and Scale packs.',
  },
  {
    id: 'revisions',
    question: 'How many revisions do I get?',
    answer: 'The Single Test Ad includes 2 rounds of revisions. Our Growth and Scale packs include unlimited revisions until you are 100% satisfied with the finished video.',
  },
  {
    id: 'what-to-send',
    question: 'What do I need to provide to get started?',
    answer: 'Just your product photos, raw smartphone clips, or website link. If you have a specific style, song, or competitor ad you like, you can share that too. We handle all editing, motion graphics, hooks, and sound design.',
  },
  {
    id: 'formats',
    question: 'What formats will I receive?',
    answer: 'You will receive crisp Ultra HD MP4 files natively formatted for 9:16 vertical (TikTok, Instagram Reels, YouTube Shorts) as well as 1:1 or 16:9 versions upon request.',
  },
  {
    id: 'payment',
    question: 'How does payment work?',
    answer: 'We accept Bank Transfer, Wise, Payoneer, and PayPal. For new clients, you can inspect a free sample hook preview first, then pay 50% upfront to begin the full project and 50% upon final delivery.',
  },
]


import type React from 'react';

export const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.94 14.33c-2.47.06-4.9.4-7.1 1.25.9-4.34 4.03-7.68 8.16-8.5 2.1-.42 4.24-.4 6.36.1C18.6 7.7 19 8.8 19 10c0 .9-.2 1.7-.5 2.5" />
        <path d="m21.6 15.2-2.5-1.2-1.3 2.5.5 2.4 2.4.5 2.5-1.2 1.2-2.5-.5-2.4Z" />
        <path d="M11 2.5 10 5l-2.5.5.5 2.5L10 10l1.5-1-1-2.5.5-2.5Z" />
        <path d="M4.5 11.5 6 10l.5 2.5-2 1.5L2 14l1.5-1Z" />
    </svg>
);

export const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1v-1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6c0 3.86-3.03 6-6 6Z"/>
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1v-1h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6c0 3.86-3.03 6-6 6Z"/>
    </svg>
);

export const PartyPopperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5.8 11.3 2 22l10.7-3.79"/>
        <path d="m14.2 12.7 3.8-3.8 2.2 2.2 3.8-3.8"/>
        <path d="M12.7 14.2 10 17l3.8 3.8 2.2-2.2Z"/>
        <path d="m15.5 6.5 2-2"/>
        <path d="M3 3 1.5 4.5"/>
        <path d="M21 21 22.5 19.5"/>
        <path d="m12 3 1.5-1.5"/>
        <path d="M12 9 9 12"/>
    </svg>
);

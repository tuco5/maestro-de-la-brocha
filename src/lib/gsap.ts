export * from 'gsap';
export * from '@gsap/react';
export * from 'gsap/ScrollTrigger';
export * from 'gsap/SplitText';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

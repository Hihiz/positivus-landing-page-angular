import { Component } from '@angular/core';
import { TestimonialItem } from '../../../shared/models/testimonial-item';
import { CaseStudiesSectionComponent } from '../components/case-studies-section/case-studies-section.component';
import { CompanyLogosSectionComponent } from '../components/company-logos-section/company-logos-section.component';
import { ContactFormSectionComponent } from '../components/contact-form-section/contact-form-section.component';
import { CtaSectionComponent } from '../components/cta-section/cta-section.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { ServicesSectionComponent } from '../components/services-section/services-section.component';
import { TeamSectionComponent } from '../components/team-section/team-section.component';
import { TestimonialsSectionComponent } from '../components/testimonials-section/testimonials-section.component';
import { WorkingProcessSectionComponent } from '../components/working-process-section/working-process-section.component';
import { ProcessStep } from '../models/process-step';
import { ServiceCardItem } from '../models/service-card-item';
import { TeamItem } from '../models/team-item';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    CompanyLogosSectionComponent,
    ServicesSectionComponent,
    CtaSectionComponent,
    CaseStudiesSectionComponent,
    WorkingProcessSectionComponent,
    TeamSectionComponent,
    ContactFormSectionComponent,
    TestimonialsSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  serviceItems: ServiceCardItem[] = [
    {
      cardTheme: 'gray',
      title: 'Search engine optimization',
      cardIcon: '/img/cards/1.svg',
      linkIcon: '/img/links/Icon-green-link.svg',
      routerLink: '/',
      fragment: 'services',
    },
    {
      cardTheme: 'green',
      title: 'Pay-per-click advertising',
      cardIcon: '/img/cards/2.svg',
      linkIcon: '/img/links/Icon-green-link.svg',
      spanTheme: 'white',
      routerLink: '/',
      fragment: 'services',
    },
    {
      cardTheme: 'dark',
      title: 'Social Media Marketing',
      cardIcon: '/img/cards/3.svg',
      linkIcon: '/img/links/Icon-white.svg',
      spanTheme: 'white',
      routerLink: '/',
      fragment: 'services',
      pColor: 'white',
    },
    {
      cardTheme: 'gray',
      title: 'Email Marketing',
      cardIcon: '/img/cards/4.svg',
      linkIcon: '/img/links/Icon-green-link.svg',
      routerLink: '/',
      fragment: 'services',
    },
    {
      cardTheme: 'green',
      title: 'Content Creation',
      cardIcon: '/img/cards/5.svg',
      linkIcon: '/img/links/Icon-green-link.svg',
      spanTheme: 'white',
      routerLink: '/',
      fragment: 'services',
    },
    {
      cardTheme: 'dark',
      title: 'Analytics and Tracking',
      cardIcon: '/img/cards/6.svg',
      linkIcon: '/img/links/Icon-white.svg',
      routerLink: '/',
      fragment: 'services',
      pColor: 'white',
    },
  ];

  teams: TeamItem[] = [
    {
      userIcon: '/img/team/1.png',
      userIconAlt: 'John Smith CEO and Founder',
      name: 'John Smith',
      position: 'CEO and Founder',
      ariaLabel: 'Профиль John Smith',
      socialIcon: '/img/social-icons/in.svg',
      description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    },
    {
      userIcon: '/img/team/2.png',
      userIconAlt: 'Jane Doe Director of Operations',
      name: 'Jane Doe',
      position: 'Director of Operations',
      ariaLabel: 'Профиль Jane Doe',
      socialIcon: '/img/social-icons/in.svg',
      description:
        '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    },
    {
      userIcon: '/img/team/3.png',
      userIconAlt: 'Michael Brown Senior SEO Specialist',
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      ariaLabel: 'Профиль Michael Brown',
      socialIcon: '/img/social-icons/in.svg',
      description:
        '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    },
    {
      userIcon: '/img/team/4.png',
      userIconAlt: 'Emily Johnson PPC Manager',
      name: 'Emily Johnson',
      position: 'PPC Manager',
      ariaLabel: 'Профиль Emily Johnson',
      socialIcon: '/img/social-icons/in.svg',
      description:
        '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    },
    {
      userIcon: '/img/team/5.png',
      userIconAlt: 'Brian Williams Social Media Specialist',
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      ariaLabel: 'Профиль Brian Williams',
      socialIcon: '/img/social-icons/in.svg',
      description:
        '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    },
    {
      userIcon: '/img/team/6.png',
      userIconAlt: 'Sarah Kim Content Creator',
      name: 'Sarah Kim',
      position: 'Content Creator',
      ariaLabel: 'Профиль Sarah Kim',
      socialIcon: '/img/social-icons/in.svg',
      description:
        '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    },
  ];

  testimonials: TestimonialItem[] = [
    {
      text: `"Their SEO strategy completely transformed our organic
                      visibility. Within six months, we achieved first-page
                      rankings for our top competitive keywords, which led to a
                      150% boost in inbound inquiries. Their data-driven
                      approach and transparency made all the difference."`,
      author: 'John Smith',
      role: 'Marketing Director at XYZ Corp',
    },
    {
      text: `"Their SEO strategy completely transformed our organic
                      visibility. Within six months, we achieved first-page
                      rankings for our top competitive keywords, which led to a
                      150% boost in inbound inquiries. Their data-driven
                      approach and transparency made all the difference."`,
      author: 'Sarah Jenkins',
      role: 'Founder of Bloom & Co Retail',
    },
    {
      text: `"We were skeptical about digital ads until we partnered
                      with this team. They optimized our PPC campaigns from the
                      ground up, cutting our cost-per-acquisition in half while
                      doubling our monthly sales. Their ROI tracking is
                      incredibly precise and trustworthy."`,
      author: 'Michael Chang',
      role: 'VP of Growth at Apex Software',
    },
    {
      text: `"The social media strategy they developed truly captured
                      our brand's unique voice. Our engagement rates quadrupled
                      in just ninety days, and we've built a vibrant, loyal
                      community on Instagram and LinkedIn that directly drives
                      web traffic every single week."`,
      author: 'Emily Rodriguez',
      role: 'Chief Marketing Officer at Nova Aesthetics',
    },
    {
      text: `"They completely overhauled our email marketing and
                      retention flows. The personalized automation paths they
                      built now generate 30% of our total e-commerce revenue on
                      autopilot. They are proactive, deeply technical, and
                      exceptionally easy to collaborate with."`,
      author: 'David Kross',
      role: 'E-commerce Director at GearUp Apparel',
    },
    {
      text: `"What sets them apart is their holistic understanding of
                      B2B marketing. They integrated our content, social, and
                      search campaigns into one powerful engine. We've seen a
                      consistent, predictable stream of high-quality enterprise
                      leads since day one."`,
      author: 'Jessica Taylor',
      role: 'Head of Marketing at SecureNet Solutions',
    },
  ];

  steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description:
        'We will research your industry, competitors, and target market to develop a tailored strategy that aligns with your goals.',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'Our team will implement the strategy across all relevant channels, ensuring consistent messaging and execution.',
    },
    {
      number: '04',
      title: 'Monitoring and Optimization',
      description:
        'We continuously monitor campaign performance and make data-driven optimizations to maximize results.',
    },
    {
      number: '05',
      title: 'Reporting and Communication',
      description: 'Regular reports and open communication keep you informed about progress and results.',
    },
    {
      number: '06',
      title: 'Continual Improvement',
      description: 'Based on insights and feedback, we refine strategies to ensure sustained growth and success.',
    },
  ];

  onServiceLearnMore(event: ServiceCardItem): void {
    console.log('Service learn more:', event.title);
  }

  onTeamSocialClick(s: { member: TeamItem; platform: string }): void {
    console.log('Team social click:', s);
  }
}

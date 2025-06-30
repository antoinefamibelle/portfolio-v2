// Assets
import EndlessCustomerApp from '@/assets/endless-customer-app-min.png';
import EndlessCustomerArea from '@/assets/customer-area-min.jpg';
import Nudiet from '@/assets/nudiet-min.png';
import Leclerc from '@/assets/leclerc-min.png';
import Pertimm from '@/assets/pertimm-min.png';
import Vetapp from '@/assets/vetapp-min.png';
import Buddy from '@/assets/buddy-min.png';
import ClickNLerins from '@/assets/clicknlerins-min.png';
import Hospitalidee from '@/assets/hospitalidee-min.png';
import IntranetInside from '@/assets/intranet-inside-min.png';
import AntoineFamibelleDev from '@/assets/antoine-dev-min.png';
import BlingBling from '@/assets/blingbling-min.png';

export interface Project {
  title: string;
  link: string;
  thumbnail: string;
  techno: string[];
}

export const workProjects: Project[] = [
  {
    title: 'Nudiet',
    link: 'https://nudiet.fr/',
    thumbnail: Nudiet,
    techno: ['react', 'ts', 'node', 'postgres', 'sql', 'drizzle']
  },
  {
    title: 'VetApp',
    link: '',
    thumbnail: Vetapp,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Pertimm',
    link: 'https://www.pertimm.com/',
    thumbnail: Pertimm,
    techno: ['vue', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Endless customer app',
    link: 'https://customer.endless.com/',
    thumbnail: EndlessCustomerApp,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Endless customer area',
    link: '',
    thumbnail: EndlessCustomerArea,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Leclerc',
    link: '',
    thumbnail: Leclerc,
    techno: ['vue', 'ts', 'node', 'postgres', 'sql']
  }
];

export const personalProjects: Project[] = [
  {
    title: 'Buddy',
    link: 'https://buddy.com/',
    thumbnail: Buddy,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Click n Lerins',
    link: 'https://clicknlerins.com/',
    thumbnail: ClickNLerins,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Hospitalidee',
    link: 'https://hospitalidee.com/',
    thumbnail: Hospitalidee,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Intranet Inside',
    link: '',
    thumbnail: IntranetInside,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  },
  {
    title: 'Antoine Famibelle Dev',
    link: 'https://antoinefamibelle.dev/',
    thumbnail: AntoineFamibelleDev,
    techno: ['react', 'ts', 'vite', 'tailwind']
  },
  {
    title: 'Bling Bling',
    link: '',
    thumbnail: BlingBling,
    techno: ['react', 'ts', 'node', 'postgres', 'sql']
  }
];

export const allProjects: Project[] = [...workProjects, ...personalProjects];
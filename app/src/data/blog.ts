import { BlogPost } from '@/lib/types';
import moment from 'moment';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Driving Traffic with Markdown and SEO on a Next.js Blog',
    excerpt: 'How I leveraged Markdown, Next.js, and SEO best practices to grow organic traffic for Nüdiet through a targeted blog strategy.',
    content: `# Driving Traffic with Markdown and SEO on a Next.js Blog

## Introduction

To boost the visibility of **Nüdiet**, I added a blog section focused on wellness and nutrition.  
🗓️ I publish **2 to 3 articles per week**, all written in **Markdown**.

## Technical Stack

On the tech side, I'm using:

- \`next-mdx\` and \`rehype\` for clean and flexible content rendering
- \`generateMetadata\` from **Next.js** to optimize SEO per article

The blog stack allows me to combine developer productivity with long-term content discoverability.

### Performance Metrics

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Page Load Time | 3.2s | 1.8s | 44% faster |
| SEO Score | 65/100 | 92/100 | +27 points |
| Organic Traffic | 1.2K/month | 8.7K/month | +625% |

## The Goal

The idea behind this approach is simple:

> Generate **relevant, helpful content** that both assists users and improves the site's **organic search visibility**.

### Key Benefits

1. **Better SEO Performance**
   - Optimized meta tags
   - Structured data markup
   - Fast loading times

2. **Developer Experience**
   - Markdown-based content
   - Hot reloading
   - Type-safe components

3. **Content Management**
   - Easy to write and edit
   - Version control friendly
   - Automated publishing

## Code Example

Here's how I structure my blog posts:

\`\`\`typescript
interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  slug: string;
}
\`\`\`

And the rendering component:

\`\`\`tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const BlogPost = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
};
\`\`\`

## Reflections

I'd love to get your feedback:

- ➡️ Have you tried this strategy before?
- ➡️ Do you use other methods to drive traffic to your site?
- ➡️ Do you see this as a best practice or more of a workaround?

## Conclusion

Writing content in Markdown, optimizing it with metadata, and rendering it with modern tools like Next.js creates a robust content pipeline that serves both technical and marketing goals.

Let me know what you think in the comments! 👇

---

## 🇫🇷 Version Française

### Attirer du trafic grâce au Markdown et au SEO ? ✍️📈

Pour améliorer la visibilité de **Nüdiet**, j'ai mis en place une section blog dédiée au bien-être, à la nutrition et à la santé.  
🗓️ Mon objectif : publier régulièrement **2 à 3 articles par semaine**, rédigés directement en **Markdown**.

### Pourquoi ce choix ?

Parce que le contenu est roi. Et un contenu bien structuré, informatif et ciblé peut non seulement **aider les visiteurs**, mais aussi **booster naturellement le référencement** du site.

### Stack technique

Voici la stack utilisée pour garantir à la fois performance, flexibilité et SEO :

- \`next-mdx\` pour intégrer facilement du contenu Markdown dans des composants React
- \`rehype\` pour enrichir le rendu avec des transformations personnalisées
- La fonction \`generateMetadata\` de **Next.js 13+** pour optimiser dynamiquement les balises meta de chaque article (titre, description, open graph…)

### Les avantages

✅ Meilleur **référencement naturel (SEO)**  
✅ Un **temps de chargement optimisé** grâce à la génération statique  
✅ Une **expérience de lecture fluide**  
✅ Une **pipeline de publication simple** pour écrire, publier et itérer rapidement

### Et vous ?

Je suis curieux d'avoir vos retours :

- ➡️ Est-ce que vous utilisez le Markdown pour votre blog ou documentation ?
- ➡️ Avez-vous déjà testé une stratégie similaire sur vos projets ?
- ➡️ Quelles approches vous donnent les meilleurs résultats pour générer du trafic ?

### Conclusion

Adopter cette stratégie me permet de **gagner du temps côté développement**, tout en **créant un canal d'acquisition pérenne** basé sur le contenu.  
Une solution simple, efficace, et scalable.

Vos retours sont les bienvenus en commentaires 👇
`,
    author: 'Antoine Famibelle',
    publishedAt: '2024-06-25',
    readingTime: 5,
    tags: ['SEO', 'Next.js', 'Growth', 'Markdown', 'Content Strategy'],
    slug: 'driving-traffic-markdown-nextjs-seo',
    featured: true
  },
  {
    id: '2',
    title: 'Créer une vraie expérience client dans le secteur de la diététique et du bien-être',
    excerpt: 'Depuis que je suis CTO de Nüdiet, je travaille à offrir une véritable expérience client — personnalisée, rassurante, et enrichie de contenus gratuits en nutrition et bien-être.',
    content: `# Créer une vraie expérience client dans le secteur de la diététique et du bien-être
  
  ## Mon constat depuis que je suis CTO de Nüdiet
  
  Depuis que j’ai pris la direction technique de **Nüdiet**, une franchise spécialisée dans la diététique et le bien-être avec plus de **3 500 clients**, un constat s’est imposé à moi :  
  👉 Dans ce secteur, **on donne l’impression d’une expérience haut de gamme**, mais **la réalité est souvent très différente**.
  
  Voici pourquoi :
  
  - 🌐 La majorité des entreprises utilisent les **mêmes solutions SAAS** sans les adapter à leurs clients finaux.
  - 💳 Pour 90 % des sites, **l’expérience utilisateur s’arrête à la réservation et au paiement**, alors que les centres communiquent une image de “luxe”.
  - ❌ Après la réservation, **le suivi client est souvent minimal et peu personnalisé**.
  
  ## Notre mission chez Nüdiet
  
  Mon objectif en tant que CTO est simple :  
  > Offrir une **vraie expérience client**, cohérente, rassurante, et accessible, **même pour ceux qui ne sont pas encore patients**.
  
  ### Concrètement, cela signifie :
  
  - 🤝 Rassurer les utilisateurs avec des contenus pédagogiques
  - 🧭 Proposer un accompagnement **personnalisé et adaptable**
  - 📝 Fournir gratuitement **du contenu autour de la santé, de la nutrition et du bien-être**
  - 📚 Mettre en place une section **recettes** ouverte à tous
  - 📰 Créer un **blog** avec des articles réguliers sur nos technologies, nos expertises, et des conseils pratiques
  
  ## Une santé accessible à tous
  
  Nous croyons qu’un vrai suivi santé ne commence pas à la première consultation, mais **dès la première visite sur le site**. C’est pourquoi nous mettons tout en œuvre pour créer un environnement sain et informatif.
  
  Notre but ?  
  🎯 Rendre la santé et le bien-être **accessibles au plus grand nombre, gratuitement et sans engagement**.
  
  ---
  
  ## 🇬🇧 English Version — Building Real User Experience in Nutrition and Wellness
  
  ### Becoming CTO of Nüdiet
  
  Since taking over as **CTO of Nüdiet**, a wellness and nutrition franchise with over **3,500 clients**, one thing became clear to me:  
  👉 The industry *pretends* to deliver a premium experience, but **often fails to deliver one**.
  
  ### The problems I’ve identified:
  
  - 🌐 Most businesses rely on the **same generic SAAS tools** without tailoring them to the end user.
  - 💳 For 90% of websites, the user journey stops at **booking and payment**, despite the luxury branding.
  - ❌ Once a session is booked, **follow-up is minimal and not personalized**.
  
  ### Our Vision at Nüdiet
  
  As CTO, my mission is clear:  
  > Deliver a **genuine, human-centered experience**, even for people who haven’t booked a session yet.
  
  ### This involves:
  
  - 🤝 Providing helpful, educational content to build trust
  - 🧭 Offering personalized and flexible support journeys
  - 📝 Publishing free articles and content about nutrition and wellness
  - 📚 Launching a **public recipe section** on our site
  - 📰 Maintaining a **blog** with valuable information about our tech, our care philosophy, and actionable advice
  
  ### Wellness should be free and accessible
  
  We believe that the user journey starts **before the first appointment**, which is why we aim to build a healthy and supportive online space.
  
  🎯 Our mission: **Make wellness and health support accessible to everyone — no strings attached.**
  
  ---
  `,
    author: 'Antoine Famibelle',
    publishedAt: '2024-06-29',
    readingTime: 6,
    tags: ['Product', 'Nüdiet', 'CTO'],
    slug: 'veritable-experience-client-nudiet',
    featured: true
  },
  {
    id: '6',
    title: 'Ma première erreur en tant que CTO',
    excerpt: 'Lancer vite, c’est bien. Mais lancer bien, c’est mieux. Retour sur ma première erreur stratégique en tant que CTO de Nüdiet, entre choix techniques précipités et dette opérationnelle.',
    content: `# Ma première erreur en tant que CTO
  
  ## Des ambitions claires dès le départ
  
  Depuis le début de l’aventure **Nüdiet**, j’ai fixé des objectifs précis pour la direction technique :
  
  - 🚀 Faire de la technologie **un levier**, jamais un frein au développement.
  - 🔧 Offrir des outils efficaces **à nos équipes terrain** dans les centres.
  - 🌱 Permettre à la franchise de **s’étendre rapidement**, avec une stack fiable et réplicable.
  
  Mais très vite, deux contraintes fortes sont apparues :
  
  - ❌ **Aucune roadmap claire** pour le développement de la franchise
  - 🕐 **Une pression de temps énorme** : pas de site web, alors que la concurrence en avait déjà un
  - 🔄 En parallèle, **un rebranding complet** et un changement de positionnement : passer de centres diététiques à **centres de bien-être** (un sujet à part entière que je traiterai dans un autre article)
  
  ## La mauvaise décision
  
  Dans l’urgence et l’excitation, j’ai opté pour une stack que je maîtrise parfaitement, et qui me permettait d’aller vite :
  
  - Express.js
  - React + Tailwind CSS
  - PostgreSQL (Neon)
  - Drizzle ORM (Serverless)
  - Vercel
  - GitHub + CI/CD
  
  📦 Résultat : en **2 semaines**, le site était en ligne, avec **réservation et paiement** intégrés.
  
  ## Les problèmes sont arrivés vite...
  
  La plateforme fonctionnait… mais elle est vite devenue un **fardeau** :
  
  - ⚠️ **Double booking** : pas d’intégration avec le système de réservation existant, le développement allait être long
  - 🔐 **Gestion fastidieuse** des environnements, clés API, secrets…
  - 📞 Chaque modification basique (adresse, téléphone…) **dépendait de moi**
  - 🧪 **Aucun test automatisé**, ce qui entraînait des **régressions** fréquentes entre les déploiements
  
  ## Le paradoxe
  
  J’avais conçu une solution censée me **libérer**, mais elle est rapidement devenue **une cage**.  
  Pourquoi ? Parce que je n’ai **pas pris le temps** de poser les bases :
  
  > 🧠 Prendre du recul pour penser **l’architecture long terme** aurait évité une bonne partie de ces problèmes.
  
  ---
  
  ## 🇬🇧 English Version — My First Mistake as a CTO
  
  ### Clear goals, blurry reality
  
  From day one at **Nüdiet**, I had a clear vision:
  
  - 🚀 Make technology a **growth accelerator**, not a blocker
  - 🧰 Empower our wellness centers with **reliable tools**
  - 🌍 Build a scalable foundation for **franchise expansion**
  
  But I quickly ran into some harsh constraints:
  
  - ❌ No defined **product roadmap**
  - 🕐 Huge **time pressure** — we had no website, competitors did
  - 🔄 The franchise was undergoing **full rebranding** from “diet centers” to **holistic wellness spaces** (more on that in a future article)
  
  ### Building fast… too fast
  
  Caught up in urgency, I defaulted to a stack I knew well — one that let me move fast:
  
  - Express.js  
  - React + Tailwind  
  - PostgreSQL (Neon)  
  - Drizzle (Serverless)  
  - Vercel  
  - GitHub (CI/CD)
  
  In just **2 weeks**, we launched a landing page with **online booking and payment**.
  
  ### And then… the issues started
  
  Despite its speed, the system quickly became a **burden**:
  
  - ⚠️ **Double bookings** due to lack of sync with our existing reservation software
  - 🔐 **API keys & environments** were a pain to manage
  - 🛠️ Every minor edit (like address or phone number) had to go through me
  - 🧪 No automated tests = frequent **regressions** during deployment
  
  ### The trap I fell into
  
  I had created a system that **should have freed me**, but it ended up **slowing me down**.
  
  > If I had taken a bit more time to architect properly from day one, I could have avoided these growing pains.
  
  ---
  
  ## Conclusion
  
  Lancer vite peut paraître agile, mais **lancer sans plan solide**, c’est risquer de s’auto-piéger.  
  Ma première erreur en tant que CTO m’a appris une chose essentielle :  
  > 🔄 Même dans l’urgence, **penser long terme** est un investissement qui évite des mois de rattrapage.
  
  `,
    author: 'Antoine Famibelle',
    publishedAt: '2025-07-02',
    readingTime: 7,
    tags: ['CTO', 'Architecture', 'Tech', 'Nüdiet'],
    slug: 'premiere-erreur-cto-nudiet',
    featured: true
  }
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured && moment(post.publishedAt).isBefore(moment().subtract(1, 'day')));
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};
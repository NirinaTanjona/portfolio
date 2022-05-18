import type { NextPage } from 'next';
import { Hero } from '../../src/components/hero';
import BlogPostSection from '@/components/blog-post-section';
import { SkillSection } from '@/components/skill-section';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-16">
      <Hero />
      <SkillSection />
      <BlogPostSection />
    </div>
  );
};

export { Home };

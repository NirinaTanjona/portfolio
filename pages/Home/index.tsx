import type { NextPage } from "next"
import { Hero } from "../../src/components/hero"
import BlogPostSection from "../../src/components/blog-post-section"
import SkillSection from "../../src/components/skill-section"

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <SkillSection />
      <BlogPostSection />
    </div>
  )
}

export { Home }

import HeroImage from './hero-image'
import HeroSocials from './hero-socials'

const Hero = () => {
  return (
    <div className="flex flex-col-reverse  md:flex-row">
      <div className="space-y-3">
        <h1 className="font-heading text-3xl mb-5 text-center md:text-left ">
          Hi, I'm Tanjona Randrianasolo
        </h1>
        <p>
          I'm an engineer in automation and Industrial data processing. I'm also
          highly passionate about IT and especially web development. my 3 main
          languages are python, ruby and javascript
        </p>
        <HeroSocials />
      </div>
      <HeroImage />
    </div>
  )
}
export default Hero

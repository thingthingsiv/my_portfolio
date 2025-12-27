import React from 'react'

/**
 * Components
 * 
 */
import{ ButtonPrimary,ButtonOutline } from "./Button";



const Hero = () => {
  return (
    <section
    id = "home"
    className ="pt-28 lg:pt-36"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src="images/logo2.png" 
              width={40}
              height={40}
              alt="protait" 
              className="img-cover"/>

            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
         
              Available for work

            </div>

          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-w[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
             I am a Automate QA Engineer
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary 
              label="Warm Welcome"
              icon="waving_hand"
              />
            <ButtonOutline 
              href="#about"
              label="Scroll down"
              icon="expand_more"
            />

          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[4000px] ml-auto rounded-[30px] overflow-hidden">
            <img src="images/sivthingthing.png" 
            width={400}
            height={400}
            alt="sivthingthing"
            className="w-full h-auto" />

          </figure>
          

        </div>

      </div>

      
    </section>
  )
}

export default Hero
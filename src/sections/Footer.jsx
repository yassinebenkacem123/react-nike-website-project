import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-col gap-10  items-start">
        <img src={footerLogo} alt="footerLogo"/>
        <p className="text-slate-200 xl:max-w-xl text-lg font-montserrat ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nam blanditiis eius ad. Nemo voluptatum nihil veniam beatae quos eos in! Sed reiciendis obcaecati deleniti consectetur, pariatur possimus fuga! Illo!</p>
        <div className="flex gap-10">
          {socialMedia.map((socialMediaIcon,index)=>
            <div className="bg-white rounded-full flex justify-center items-center w-20 h-20" key={index}>
              <img key={index} width={50} src={socialMediaIcon.src} alt={socialMediaIcon.alt} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-around gap-20 max-lg:gap-30">
        {footerLinks.map((footerLink,index)=>
          <div key={index}>
            <h1 className=" mb-6 text-2xl font-bold font-palanquin text-white">{footerLink.title}</h1>
             <ul>
               {footerLink.links.map((link,index1)=><li  className="mb-3" key={index1}>
                <a className="text-white" href={link.link}>{link.name}</a>
                </li>)}
            </ul>
          </div>
          )}
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
         <div className="flex gap-3 items-center">
         <img src={copyrightSign} alt="copyright-logo" />
          <p className="text-gray-300 text-[10px] font-montserrat">,copyright all rights reserved</p>
         </div>
         <div>
          <p className="text-white">Created by Yassine ben kacem</p>
         </div>
         
      </div>
    </footer>
  )
}

export default Footer

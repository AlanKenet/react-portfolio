import { SocialMediaBarElement } from './SocialMediaBarElement'

import { SOCIALMEDIA_ELEMENTS } from '@/constants/socialMediaElements'

export function SocialMediaBar () {
  return (
    <ul className='social-bar'>
      {
        SOCIALMEDIA_ELEMENTS.map(({ id, url, icon }) => (
          <SocialMediaBarElement
            className='hover-upscale'
            key={id}
            url={url}
            icon={icon}
          />
        ))
      }
    </ul>
  )
}

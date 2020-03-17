import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

const ProjectImage = ({image}) => {
  if (!image || !image.asset || !image.asset._id) { return null }
  const fluidProps = getFluidGatsbyImage(
    image.asset._id,
    {
      maxWidth: 3000
    },
    clientConfig.sanity
  )

  return (
    <figure>
      <Img
        fluid={fluidProps}
        alt={image.alt}
        fadeIn
        backgroundColor={image.asset.metadata.palette.dominant.background}
        durationFadeIn={3000} />
    </figure>
  )
}

export default ProjectImage

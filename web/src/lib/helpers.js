import {format, isFuture} from 'date-fns'
import {useState, useEffect} from 'react'

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({slug}) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture ({publishedAt}) {
  return !isFuture(publishedAt)
}

export function buildImageObj (source = {asset: {}}) {
  const imageObj = {
    asset: {_ref: source.asset._ref || source.asset._id}
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

export function toPlainText (blocks) {
  if (!blocks) {
    return ''
  }
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}

export const getWidth = () => {
  if (typeof window === `undefined`) return null

  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth  
}

export function useCurrentWidth () {
  let [width, setWidth] = useState(getWidth())

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}

export function useCurrentNYTime () {
  const [time, setTime] = useState(new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})))

  useEffect(() => {
    const id = setInterval(() => setTime(new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}))), 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return time
}

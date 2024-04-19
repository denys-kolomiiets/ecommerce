import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'

import classes from './index.module.scss'

interface CategoryCardProps {
  category: Category
}
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const media = category.media as Media
  return (
    <Link
      href="/products"
      className={classes.card}
      style={{
        backgroundImage: `url(${media.url})`,
      }}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard

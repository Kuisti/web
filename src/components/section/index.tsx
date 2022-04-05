import { FC } from 'react'
import './style.css'

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="section">
      <p className="section-title">{title}</p>
      <div className="section-content">
        {children}
      </div>
    </div>
  )
}

export default Section
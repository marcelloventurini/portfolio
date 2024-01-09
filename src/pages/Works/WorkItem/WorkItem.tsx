import styles from './WorkItem.module.scss'

interface WorkItemProps {
  href: string
  title: string
  description: string
}

const WorkItem = ({ href, title, description }: WorkItemProps) => {
  return (
    <>
      <a href={href} target='_blank' className={styles.title}>
        {title}
      </a>
      <p>{description}</p>
    </>
  )
}

export default WorkItem

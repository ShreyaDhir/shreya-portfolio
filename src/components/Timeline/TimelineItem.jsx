import React from 'react'

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">{data.category.tag}</span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <a target="_blank" rel="noopener noreferrer" href={data.link.url}>
                {data.link.text}
            </a>
            <span className="circle">text</span>
        </div>
    </div>
  )
}

export default TimelineItem
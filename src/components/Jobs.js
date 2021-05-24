import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data=useStaticQuery(query);
  const {
    allStrapiJobs: {nodes:jobs},
  } =data
  const [value,setValue] =React.useState(0);
  const {company,position,date,desc} = jobs[value]
  return <section className="section jobs">
    <Title title="Experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item,index)=>{
          return <button key ={item.strapiId}>{item.company}</button>

        })}
      </div>
    </div>
  </section>
}

export default Jobs

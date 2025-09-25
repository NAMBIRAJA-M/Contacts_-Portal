

function Overview(props) {
    
  
    const data = [
        {
            id: 1,
            heading: "Total Contacts",
            value: 247,
            src: "/friends.png",
            description: "All contacts in your database",
            trend: "+12%",
            trendType: "positive"
        },
        {
            id: 2,
            heading: "New This Month",
            value: 23,
            src: "/date-of-birth.png",
            description: "Contacts added this month",
            trend: "+8%",
            trendType: "positive"
        },
        {
            id: 3,
            heading: "Active Contacts",
            value: 189,
            src: "/interface.png",
            description: "Engaged in last 30 days",
            trend: "+5%",
            trendType: "positive"
        },
        {
            id: 4,
            heading: "Inactive Contacts",
            value: 58,
            src: "/interface.png",
            description: "No activity in 90+ days",
            trend: "-3%",
            trendType: "negative"
        },
        {
            id: 5,
            heading: "Missing Email",
            value: 12,
            src: "/delete.png",
            description: "Contacts without email",
            trend: "-2%",
            trendType: "positive"
        },
        {
            id: 6,
            heading: "Duplicates Found",
            value: 7,
            src: "/document.png",
            description: "Potential duplicate entries",
            trend: "+1%",
            trendType: "negative"
        },
        {
            id: 7,
            heading: "Top Company Size",
            value: "50-100",
            src: "/profile.png",
            description: "Most common company size",
            trend: "Stable",
            trendType: "neutral"
        },
        {
            id: 8,
            heading: "Birthdays This Month",
            value: 15,
            src: "/birthday-cake.png",
            description: "Upcoming celebrations",
            trend: "+3",
            trendType: "positive"
        },
        
    ]
    
    
    
    return (

            <div className="overview-section">
                {data.map((e,index)=> (
                    <div className='details-section primary' key={e.id} >
                        <div className='article-section'>
                            <div className='circle'> 
                                <img src={e.src} alt='icon'
                                    style={{
                                        width: "30px", height: "30px",
                                    }} />
                            </div>
                            <div className="card-content">
                                <p className="heading">{e.heading}</p>
                                <p className="value">{e.value}</p>
                                <p className="description">{e.description}</p>
                                <div className={`trend ${e.trendType}`}>
                                    <span className="trend-text">{e.trend}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



     
    )
}


export default Overview;
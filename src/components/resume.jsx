import React, { Component } from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ProjectComponent from './projectComponent';
import prof from '../images/juvonBwIcon.jpg'
export default class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img className="cb"
                        src={prof}
                        alt="avatar"
                        style={{width: '300px'}}
                    
                        />
                    </div>
                    <h2 style={{paddingTop: '1em'}}>Juvon Hyatt</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Hello, my name Is Juvon Hyatt I am a full-stack developer with a history in law, sales, stock market, and fulfillment industries. 
                    Seeking to further my current expertise in full-stack software development. 
                    </p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <h5>Address</h5>
                    <p>123 Sesame Street, PBS kids NY, 10009 </p> 
                    <p style={{fontSize: '8px'}}>No but really, why would I ever put this up on the internet, not that you would ever find me to prove I really exist beyond the figments of your imagination</p>
                    <p>Last Seen: New York </p> 
                    <p>Email: juvonhyatt@yahoo.com </p>
                    <p>Website: http://juvonhyattportfolio.com</p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2015}
                        endYear={2019}
                        schoolName='SUNY College at Old Westbury'
                        schoolDescription="Here I studied computer science and its related technologies including how to code and handel various data and information. "
                        highlight ="In my senior year my team was assigned a project to create a web-based school management system. I took the lead on this successful team project and we created an interactive and engaging website. "
                        />
                        <hr stye={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience
                        startYear={2022}
                        endYear={2024}
                        jobName="Software Engineer II"
                        company= "StoneX"
                        jobDescription ="Wrote, maintained, debugged, and improved StoneX code daily, and ensured servers were up and running correctly on virtual machines, supported test environments, and ran deployment or software releases. 
                        Have excellent troubleshooting and analytical skills and facilitated code reviews.
                        Wrote automated tests and QA, while documenting procedures.
                        Managed the database, writing SQL stored procedures, finetuning, and optimizing queries. Troubleshoot basic network, and software issues for clients and managed the help desk. 
                        Learned company codebase with menial direction, and submitted code changes promptly.
                        Worked daily using C# .Net core, SQL, Visual Studio, ReSharper, Git, API, mRemoteNG, Bitbucket, Azure DevOps, Asp.net MVC Razor, Jira, and PagerDuty."
                        />
                        <Experience
                        startYear={2021}
                        endYear={2022}
                        jobName="Assistant IT Manager / Software Engineer"
                        company= "Fulfillment Plus Inc"
                        jobDescription ="Day-to-day management of FPI’s computer systems. monitor, operate, coordinate, and assist others in the operation of computer hardware, software, and peripherals to achieve desired results.
                        Developed the company's web-based time-tracking software from scratch utilizing PHP, SQL, Ajax, JS, Bootstrap, and HTML
                        Developed and managed automation/calculation programs in Python and executed data analysis in Excel and SQL. 
                        Wrote custom software solutions for the company to exponentially speed up data processing and throughput.
                        Developed Python software for automation of tasks, cleaning of data, data analysis, and various in-house solutions.
                        Collaborated directly with the owner to Develop new in-house software for data analysis and cleanup using .NET, C#, and SQL.
                        Identified and fixed bugs in pre-existing code and updated them using troubleshooting technologies such as .Net Debugger. As a result in an improvement in quality and efficiency.
                        Executed T-SQL queries and analyzed results to identify problems in the customer order database
                        "
                        />

                        <Experience
                        startYear={2020}
                        endYear={2021}
                        jobName="Legal Software Engineer"
                        company= "Smart Advocate LLC"
                        jobDescription ="Developed web applications and fixed bugs using C# ASP.NET MVC. Between writing new code and bug fixing.
                        Provided direct assistance and troubleshooting to clients (Law-firms), Resulting in them understanding the Case Management System. 
                        Changes or fixes to code were made in the test server and after being approved by the Teach lead, I would get the latest version of the page or function and then merge or update it successfully using Visual Studio TFS, DevOps.
                        GoToAssist was used to directly help clients on their workstations and to work closely with IT and Development teams we maintain and sustain a stable high-performing application environment.
                        Collaborated with The Owner, Clients, testers, developers, and other teams to complete new feature requests on time for Software Updates.
                        Designed and updated UI pages using ASPX, Bootstrap, CSS, SASS, JavaScript, and jQuery
                        "
                        />

                        <Experience
                        startYear={2019}
                        endYear={2020}
                        jobName="Application Software Engineer "
                        company= "PC Richard & Son"
                        jobDescription ="Provided Tier 2 support technical support by utilizing various web-based programs, code languages, and software. 
                        Programmed and debugged code that had errors, making sure they worked properly. I worked to add code to already existing programs to complete specified requirements and update old ones. 
                        Resolved requests and general IT support using SQL to insert, change, remove, and extract information from databases, and put them into spreadsheets in Excel for clients. 
                        Documented changes and standard of procedures in Confluence.
                        Help maintain code quality, organization, and coding projects using JIRA within a small team
                        Qlik was also used to analyze data for various purposes and put them into charts or graphs. I used RPGLE to code new options or features in back-end programs. Most of this was written in IBM Rational Developer.  These programs were used by staff to run the stores on their point-of-sale program or other back-end services. HTML, CSS, SQL, and SQLRPGLE were used to add or change data that showed up on their web pages.
                        "
                        />

                        <Experience
                        startYear={2019}
                        endYear={2019}
                        jobName="Oracle Inventory Analyst / IT Support"
                        company= " Altice USA"
                        jobDescription ="Converted serial numbers from various databases from CSV and Microsoft Access, updating or transferring it into Oracle R12. 
                        Used Oracle R12 I would use administrative abilities to change or update records and fix issues for end users of Oracle Mobile and its database.
                        Developed SQL queries to troubleshoot various problems and made tickets using Remedy. SQL data would be extracted and put into Excel spreadsheets and sent to clients or from who it was requested.
                        Developed a virtual assistant called Codex. This was done in Java using Eclipse IDE to analyze the data in different situations, create programmatic solutions, and automate tedious tasks. 
                        Provided IT support helping with software technical issues over chat or phone. 
                        "
                        />
                        
                        <Experience
                        startYear={2015}
                        endYear={2018}
                        jobName="Stock Clerk"
                        company="Northestern Conference of Seventh-Day Adventists"
                        jobDescription ="Responsible for receiving merchandise, unloading or unpacking it, marking it with codes to be identified, stocking shelves, and helping customers place orders."
                        />
                        <hr stye={{borderTop: '3px solid #e22947'}} />
                        <h2>Projects</h2>

                        <ProjectComponent
                        startYear={2019}
                        endYear={2021}
                        projectName="My Portfolio Website"
                        projectDesc="(I coded and designed my portfolio website in React utilizing JS, CSS, HTML. this website uses the following: react-mdl, react-router-dom. It’s used as a hub to route to all my code projects, websites and other works like my music. It was also written is VS Code)"
                        />

                        <ProjectComponent
                        startYear={2019}
                        endYear={2019}
                        projectName="C.O.D.E.X Assistant"
                        projectDesc="(This is a Java based work automation code I developed to help my it supports go faster. It automatically opened programs for me just by talking to the Siri like A.I I created in its menu. The functionality was current job specific and was unfinished when no longer needed)"
                        />
                        <ProjectComponent 
                        startYear={2018}
                        endYear={2019}
                        projectName="School Management System"
                        projectDesc="(Coded front and back end of website using php, html, JS, CSS, SQL. I also Lead in coding and development as well as data entry via relation Database. I used php to interact with the database to update/ display information such as grades, classes and page state changes based on if the user was logged in or not. The code was tested manually and using Selenium)"
                        />

                        <ProjectComponent 
                        startYear={2018}
                        endYear={2019}
                        projectName="Hotel Management System"
                        projectDesc="(Java based program. This program handled Room occupancy via HashMap/linked list, stored data in the list of each person and where they are located. It also had Checking in/out functionality and general guest information)"
                        />

                        <ProjectComponent 
                        startYear={2018}
                        endYear={2019}
                        projectName="Android Music Production App"
                        projectDesc="(Wrote code in AndroidStudio for a drumming and beat making app. Using MVC design pattern, background threads, media Player and sound files. Including state changes based on selected app theme. I Produced music & sounds for the game including the Images and Logos.)"
                        />
                        
                        <ProjectComponent 
                        startYear={2017}
                        endYear={2017}
                        projectName="E-commerce/web Based Inventory Management System"
                        projectDesc="(Worked with end users to get a functional shopping cart working including the adding, editing, user accounts and overall management of stock using SQL queries to keep track of data and inventory movement using PHP and SQL code.) This was later implimented into my e-commerce website found in my projects page. It is still unfinished."
                        />
                        



                        <hr stye={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills
                        skill="C#"
                        progress = "100"
                        />

                        <Skills
                        skill="Java"
                        progress = "95"
                        />

                        <Skills
                        skill=".NET Framework"
                        progress = "100"
                        />

                        <Skills
                        skill="SQL"
                        progress = "100"
                        />

                        <Skills
                        skill="Git"
                        progress = "100"
                        />

                        <Skills
                        skill="Debugging"
                        progress = "100"
                        />

                        <Skills
                        skill="IT Support/Problem solving"
                        progress = "100"
                        />

                        <Skills
                        skill="Python"
                        progress = "80"
                        />

                        <Skills
                        skill="HTML"
                        progress = "100"
                        />
                        
                        <Skills
                        skill="CSS"
                        progress = "100"
                        />

                        <Skills
                        skill="Bootstrap"
                        progress = "100"
                        />

                        <Skills
                        skill="Java"
                        progress = "95"
                        />

                        <Skills
                        skill="Python"
                        progress = "90"
                        />

                        <Skills
                        skill="React"
                        progress = "80"
                        />
                        <Skills
                        skill="javaScript"
                        progress = "75"
                        />
                        <Skills
                        skill="C++"
                        progress = "60"
                        />

                        <Skills
                        skill="Postman API"
                        progress = "70"
                        />
                        
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}


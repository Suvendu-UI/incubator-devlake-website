"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1613],{34551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));n(61839);const r={title:"DORA - Lead Time for Changes",description:"DORA - Lead Time for Changes\n",sidebar_position:19},l=void 0,o={unversionedId:"Metrics/LeadTimeForChanges",id:"Metrics/LeadTimeForChanges",title:"DORA - Lead Time for Changes",description:"DORA - Lead Time for Changes\n",source:"@site/docs/Metrics/LeadTimeForChanges.md",sourceDirName:"Metrics",slug:"/Metrics/LeadTimeForChanges",permalink:"/zh/docs/next/Metrics/LeadTimeForChanges",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Metrics/LeadTimeForChanges.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"DORA - Lead Time for Changes",description:"DORA - Lead Time for Changes\n",sidebar_position:19},sidebar:"docsSidebar",previous:{title:"DORA - Deployment Frequency",permalink:"/zh/docs/next/Metrics/DeploymentFrequency"},next:{title:"DORA - Median Time to Restore Service",permalink:"/zh/docs/next/Metrics/MTTR"}},s={},m=[{value:"What is this metric?",id:"what-is-this-metric",level:2},{value:"Why is it important?",id:"why-is-it-important",level:2},{value:"Which dashboard(s) does it exist in",id:"which-dashboards-does-it-exist-in",level:2},{value:"How is it calculated?",id:"how-is-it-calculated",level:2},{value:"How to improve?",id:"how-to-improve",level:2}],d={toc:m};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-this-metric"},"What is this metric?"),(0,i.kt)("p",null,"The median amount of time for a commit to be deployed into production."),(0,i.kt)("h2",{id:"why-is-it-important"},"Why is it important?"),(0,i.kt)("p",null,"This metric measures the time it takes to commit code to the production environment and reflects the speed of software delivery. A lower average change preparation time means that your team is efficient at coding and deploying your project."),(0,i.kt)("h2",{id:"which-dashboards-does-it-exist-in"},"Which dashboard(s) does it exist in"),(0,i.kt)("p",null,"DORA dashboard. See ",(0,i.kt)("a",{parentName:"p",href:"https://grafana-lake.demo.devlake.io/grafana/d/qNo8_0M4z/dora?orgId=1"},"live demo"),"."),(0,i.kt)("h2",{id:"how-is-it-calculated"},"How is it calculated?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find the deployments whose finished_date falls into the time range that users select"),(0,i.kt)("li",{parentName:"ol"},"Calculate the commits diff between each deployment by deployments' commit_sha"),(0,i.kt)("li",{parentName:"ol"},"Find the PRs mapped to the commits in step 2, now we have the relation of Deployment - Deployed_commits - Deployed_PRs."),(0,i.kt)("li",{parentName:"ol"},"Calculate PR Deploy Time by using finish_time of deployment minus merge_time of PR")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7515).Z,width:"4000",height:"1954"})),(0,i.kt)("p",null,"PR cycle time is pre-calculated when dora plugin is triggered. You can connect to DevLake's database and find it in the field ",(0,i.kt)("inlineCode",{parentName:"p"},"change_timespan")," in ",(0,i.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/DataModels/DevLakeDomainLayerSchema/#pull_requests"},"table.pull_requests"),"."),(0,i.kt)("p",null,"Below are the benchmarks for different development teams from Google's report. However, it's difficult to tell which group a team falls into when the team's median lead time for changes is ",(0,i.kt)("inlineCode",{parentName:"p"},"between one week and one month"),". Therefore, DevLake provides its own benchmarks to address this problem:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Groups"),(0,i.kt)("th",{parentName:"tr",align:null},"Benchmarks"),(0,i.kt)("th",{parentName:"tr",align:null},"DevLake Benchmarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elite performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one day and one week"),(0,i.kt)("td",{parentName:"tr",align:null},"Less than one week")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium performers"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one month and six months"),(0,i.kt)("td",{parentName:"tr",align:null},"Between one week and six months")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Low performers"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months"),(0,i.kt)("td",{parentName:"tr",align:null},"More than six months")))),(0,i.kt)("p",null,(0,i.kt)("i",null,"Source: 2021 Accelerate State of DevOps, Google")),(0,i.kt)("b",null,"Data Sources Required"),(0,i.kt)("p",null,"This metric relies on deployments collected in multiple ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open APIs of Jenkins, GitLab, GitHub, etc."),(0,i.kt)("li",{parentName:"ul"},"Webhook for general CI tools."),(0,i.kt)("li",{parentName:"ul"},"Releases and PR/MRs from GitHub, GitLab APIs, etc.")),(0,i.kt)("b",null,"Transformation Rules Required"),(0,i.kt)("p",null,"This metric relies on the deployment configuration in Jenkins, GitLab or GitHub transformation rules to let DevLake know what CI builds/jobs can be regarded as deployments."),(0,i.kt)("b",null,"SQL Queries"),(0,i.kt)("p",null,"If you want to measure the monthly trend of median lead time for changes as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95784).Z,width:"1352",height:"606"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"with _pr_stats as (\n-- get PRs' cycle lead time in each month\n    SELECT\n        pr.id,\n        date_format(pr.merged_date,'%y/%m') as month,\n        pr.change_timespan as pr_cycle_time\n    FROM\n        pull_requests pr\n    WHERE\n        pr.merged_date is not null\n        and pr.change_timespan is not null\n        and $__timeFilter(pr.merged_date)\n),\n\n_find_median_clt_each_month as (\n    SELECT x.month, x.pr_cycle_time as med_change_lead_time \n    FROM _pr_stats x JOIN _pr_stats y ON x.month = y.month\n    GROUP BY x.month, x.pr_cycle_time\n    HAVING SUM(SIGN(1-SIGN(y.pr_cycle_time-x.pr_cycle_time)))/COUNT(*) > 0.5\n),\n\n_find_clt_rank_each_month as (\n    SELECT\n        *,\n        rank() over(PARTITION BY month ORDER BY med_change_lead_time) as _rank \n    FROM\n        _find_median_clt_each_month\n),\n\n_clt as (\n    SELECT\n        month,\n        med_change_lead_time\n    from _find_clt_rank_each_month\n    WHERE _rank = 1\n),\n\n_calendar_months as(\n-- to deal with the month with no incidents\n    SELECT date_format(CAST((SYSDATE()-INTERVAL (month_index) MONTH) AS date), '%y/%m') as month\n    FROM ( SELECT 0 month_index\n            UNION ALL SELECT   1  UNION ALL SELECT   2 UNION ALL SELECT   3\n            UNION ALL SELECT   4  UNION ALL SELECT   5 UNION ALL SELECT   6\n            UNION ALL SELECT   7  UNION ALL SELECT   8 UNION ALL SELECT   9\n            UNION ALL SELECT   10 UNION ALL SELECT  11\n        ) month_index\n    WHERE (SYSDATE()-INTERVAL (month_index) MONTH) > SYSDATE()-INTERVAL 6 MONTH \n)\n\nSELECT \n    cm.month,\n    case \n        when _clt.med_change_lead_time is null then 0 \n        else _clt.med_change_lead_time/60 end as med_change_lead_time_in_hour\nFROM \n    _calendar_months cm\n    left join _clt on cm.month = _clt.month\nORDER BY 1\n")),(0,i.kt)("p",null,"If you want to measure in which category your team falls into as the picture shown below, run the following SQL in Grafana."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(94320).Z,width:"617",height:"189"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'with _pr_stats as (\n-- get PRs\' cycle time in the selected period\n    SELECT\n        pr.id,\n        pr.change_timespan as pr_cycle_time\n    FROM\n        pull_requests pr\n    WHERE\n        pr.merged_date is not null\n        and pr.change_timespan is not null\n        and $__timeFilter(pr.merged_date)\n),\n\n_median_change_lead_time as (\n-- use median PR cycle time as the median change lead time\n    SELECT x.pr_cycle_time as median_change_lead_time from _pr_stats x, _pr_stats y\n    GROUP BY x.pr_cycle_time\n    HAVING SUM(SIGN(1-SIGN(y.pr_cycle_time-x.pr_cycle_time)))/COUNT(*) > 0.5\n    LIMIT 1\n)\n\nSELECT \n  CASE\n    WHEN median_change_lead_time < 60 then "Less than one hour"\n    WHEN median_change_lead_time < 7 * 24 * 60 then "Less than one week"\n    WHEN median_change_lead_time < 180 * 24 * 60 then "Between one week and six months"\n    ELSE "More than six months"\n    END as median_change_lead_time\nFROM _median_change_lead_time\n')),(0,i.kt)("h2",{id:"how-to-improve"},"How to improve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Break requirements into smaller, more manageable deliverables"),(0,i.kt)("li",{parentName:"ul"},"Optimize the code review process"),(0,i.kt)("li",{parentName:"ul"},'"Shift left", start QA early and introduce more automated tests'),(0,i.kt)("li",{parentName:"ul"},"Integrate CI/CD tools to automate the deployment process")))}h.isMDXComponent=!0},95784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lead-time-for-changes-monthly-7086f1b85f30342aa7385a1baaa026d1.jpeg"},94320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lead-time-for-changes-text-a2c1a9e801ca354b58cba010b5de51c4.jpeg"},7515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pr-commit-deploy-07f6b9b71ae1b0bd2febe090fa233207.jpeg"}}]);
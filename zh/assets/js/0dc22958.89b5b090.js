"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5809],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"GitHub",description:"GitHub Plugin\n"},u="Github",s={unversionedId:"Plugins/github",id:"Plugins/github",title:"GitHub",description:"GitHub Plugin\n",source:"@site/docs/03-Plugins/github.md",sourceDirName:"03-Plugins",slug:"/Plugins/github",permalink:"/zh/docs/Plugins/github",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/03-Plugins/github.md",tags:[],version:"current",frontMatter:{title:"GitHub",description:"GitHub Plugin\n"},sidebar:"docsSidebar",previous:{title:"GitExtractor",permalink:"/zh/docs/Plugins/gitextractor"},next:{title:"GitLab",permalink:"/zh/docs/Plugins/gitlab"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Screenshot",id:"screenshot",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Provider (Datasource) Connection",id:"provider-datasource-connection",level:3},{value:"Provider (Datasource) Settings",id:"provider-datasource-settings",level:3},{value:"Regular Expression Configuration",id:"regular-expression-configuration",level:3},{value:"Sample Request",id:"sample-request",level:2}],m={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github"},"Github"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin gathers data from ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," to display information to the user in ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana"),". We can help tech leaders answer such questions as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Is this month more productive than last?"),(0,a.kt)("li",{parentName:"ul"},"How fast do we respond to customer requirements?"),(0,a.kt)("li",{parentName:"ul"},"Was our quality improved or not?")),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Here are some examples of what we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," data to show:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avg Requirement Lead Time By Assignee"),(0,a.kt)("li",{parentName:"ul"},"Bug Count per 1k Lines of Code"),(0,a.kt)("li",{parentName:"ul"},"Commit Count over Time")),(0,a.kt)("h2",{id:"screenshot"},"Screenshot"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(552).Z,width:"1229",height:"431"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"provider-datasource-connection"},"Provider (Datasource) Connection"),(0,a.kt)("p",null,"The connection aspect of the configuration screen requires the following key fields to connect to the ",(0,a.kt)("strong",{parentName:"p"},"GitHub API"),". As GitHub is a ",(0,a.kt)("em",{parentName:"p"},"single-source data provider")," at the moment, the connection name is read-only as there is only one instance to manage. As we continue our development roadmap we may enable ",(0,a.kt)("em",{parentName:"p"},"multi-source")," connections for GitHub in the future."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connection-in-config-ui",src:n(6287).Z,width:"869",height:"415"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection Name")," ","[",(0,a.kt)("inlineCode",{parentName:"li"},"READONLY"),"]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u26a0\ufe0f Defaults to "',(0,a.kt)("strong",{parentName:"li"},"Github"),'" and may not be changed.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Endpoint URL")," (REST URL, starts with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"http://"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This should be a valid REST API Endpoint eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api.github.com/")),(0,a.kt)("li",{parentName:"ul"},"\u26a0\ufe0f URL should end with",(0,a.kt)("inlineCode",{parentName:"li"},"/")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Auth Token(s)")," (Personal Access Token)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For help on ",(0,a.kt)("strong",{parentName:"li"},"Creating a personal access token"),", please see official ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub Docs on Personal Tokens")),(0,a.kt)("li",{parentName:"ul"},"Provide at least one token for Authentication."),(0,a.kt)("li",{parentName:"ul"},"This field accepts a comma-separated list of values for multiple tokens. The data collection will take longer for GitHub since they have a ",(0,a.kt)("strong",{parentName:"li"},"rate limit of 5k requests per hour"),". You can accelerate the process by configuring ",(0,a.kt)("em",{parentName:"li"},"multiple")," personal access tokens.")))),(0,a.kt)("p",null,'"For API requests using ',(0,a.kt)("inlineCode",{parentName:"p"},"Basic Authentication")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth"),", you can make up to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting"},"5,000 requests"),' per hour."'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/overview/resources-in-the-rest-api"},"https://docs.github.com/en/rest/overview/resources-in-the-rest-api"))),(0,a.kt)("p",null,"If you have a need for more api rate limits, you can set many tokens in the config file, and we will use all of your tokens."),(0,a.kt)("p",null,"NOTE: You can get 15000 requests/hour/token if you pay for ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," enterprise."),(0,a.kt)("p",null,"For an overview of the ",(0,a.kt)("strong",{parentName:"p"},"GitHub REST API"),", please see official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest"},"GitHub Docs on REST")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Connection")," to update connection settings."),(0,a.kt)("h3",{id:"provider-datasource-settings"},"Provider (Datasource) Settings"),(0,a.kt)("p",null,"Manage additional settings and options for the GitHub Datasource Provider. Currently there is only one ",(0,a.kt)("strong",{parentName:"p"},"optional")," setting, ",(0,a.kt)("em",{parentName:"p"},"Proxy URL"),". If you are behind a corporate firewall or VPN you may need to utilize a proxy server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GitHub Proxy URL ","[ ",(0,a.kt)("inlineCode",{parentName:"strong"},"Optional"),"]"),"\nEnter a valid proxy server address on your Network, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Settings")," to update additional settings."),(0,a.kt)("h3",{id:"regular-expression-configuration"},"Regular Expression Configuration"),(0,a.kt)("p",null,"Define regex pattern in .env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GITHUB_PR_BODY_CLOSE_PATTERN: Define key word to associate issue in pr body, please check the example in .env.example")),(0,a.kt)("h2",{id:"sample-request"},"Sample Request"),(0,a.kt)("p",null,"In order to collect data, you have to compose a JSON looks like following one, and send it by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Mode")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Pipeline Run")," page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "plugin": "github",\n      "options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    }\n  ]\n]\n')),(0,a.kt)("p",null,"You can also trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n    "name": "github 20211126",\n    "tasks": [[{\n        "plugin": "github",\n        "options": {\n            "repo": "lake",\n            "owner": "merico-dev"\n        }\n    }]]\n}\n\'\n')),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}d.isMDXComponent=!0},6287:function(e,t,n){t.Z=n.p+"assets/images/github-connection-in-config-ui-4b7b18bd828af1166659a8bc13a36fc3.png"},552:function(e,t,n){t.Z=n.p+"assets/images/github-demo-79e8e82fb6d7778e8ea342d81182e46e.png"}}]);
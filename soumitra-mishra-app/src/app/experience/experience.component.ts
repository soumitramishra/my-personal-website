import { Component, OnInit } from '@angular/core';
import { Experience } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  list_of_experience = new Array();
  description = null;
  company = null;
  title=null;
  
  
  
  neu= new Array();
  constructor() { }

  ngOnInit(): void {

    let versa_se = new Array(
      'Plan, Develop and debugged and automated test cases for networking features such as DHCP, BGP, SDWAN Policies, Forwarding \
      Profiles, FEC, Replication, Speed tests for Versa Networks’ Flex-VNF software using Python Scripting.',
      'Automated the regression testing for Versa Director and Analytics Web GUI using Selenium and Python scripting.',
      'Report and verify various bugs in network functionalities like Forward Error Correction, Policy based routing, \
      Replication by generating network traffic using tools like Spirent, hping3 and iperf, capturing with TCPDump \
      and analyzing it by using Wireshark'
    );
    this.list_of_experience.push(new Experience('Software Engineer in Test and Automation','Versa Networks', 'San Jose, CA',versa_se, 'Mar 2021-Present'));
    let versa_intern= new Array(
      'Implemented speed tests for Versa Networks FlexVNF software that resides in networking devices such \
      as gateways, bridges, and routers using Python Socket programming and integrated it to Web GUI based orchestrator \
      called Versa Director using REST-API.',
      'Accelerated the test and deployment cycle for the Versa Networks SDWAN solution by automating the functionality \
      tests using Jenkins and Python pexpect library which resulted in 20% fewer production bugs and saved 2-4 days per release.',
      'Expanded the test coverage for REST-API based Versa Director module by architecting a framework that takes \
      JSON file having request headers and expected responses and send an email report to configured E-mail addresses \
      using Python smtplib library.');
      this.list_of_experience.push(new Experience('Software Engineer Intern', 'Versa Networks', 'San Jose, CA', versa_intern, 'May 2019-Dec 2019'))
    let infosys_sse= new Array(
      'Designed, Developed and Deployed a single page web application in MVC style using Angular, Bootstrap, \
      Java REST API, and MySQL for centralized event monitoring in Gateway Devices, minimizing the reaction time \
      to resolve the issues by 60%.',
      'Enhanced the existing Gateway Management UI to display logs generated at different levels (INFO, DEBUG, WARNING) \
      using JPA and MySQL which facilitated Support Engineers to debug small issues without logging into console of \
      underlying devices.'
    );
    this.list_of_experience.push(new Experience('Senior Systems Software Engineer', 'Infosys Ltd', 'Bangalore, India', infosys_sse, 'Apr 2017-Jun 2018'))
    let infosys_se= new Array(
      'Remodeled and automated test cases for Gateway devices for features like TCP/UDP Port Forwarding, \
      Port Triggering, Parental control, IP/MAC address blocking by writing Bash Shell Scripts and integrating \
      Jenkins into the existing web application for Continuous Integration and Continuous Deployment (CI/CD) which \
      resulted in accelerated test as well as overall Scrum cycle.'
    );
    this.list_of_experience.push(new Experience('Systems Software Engineer', 'Infosys Ltd', 'Bangalore, India', infosys_se, 'Dec 2015-Mar 2017'))
  }
}

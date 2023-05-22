import { PortfolioData } from "../models/portfolio";


export const PORTFOLIOS: PortfolioData[] = [
    {id: "portfolioModal1", name: 'NgNET', technology_used:'Bootstrap 5, Angular 15, ASP.NET 7.0 Core Web API, PostgreSQL, PgAmdin, Docker',
    description: 'NgNET is a boilerplate CRUD application featuring Docker, Angular 15 frontend with hot reload, Bootstrap 5, .NET 7.0 WebApi backend, automatic PostgreSQL database migration, and PgAdmin. The main motivation of this project is to run the whole full-stack application with Single command docker-compose up command', img_url: 'assets/img/portfolio/ngnet.png', project_url: 'N/A', github_url: 'https://github.com/codebangla/ngnet'},

    {id: "portfolioModal2", name: 'Strapstone', technology_used:'Bootstrap 5, Angular 13, ASP.NET Core Web API', description: 'Strapstone is a job portal prototype application using Angular 13 and ASP.NET Core 5.0 Web API. For Backend I\'ve used DTO, Repository and UOW pattern, EntityFramework Core, SQL Sever, Bearer JWT Token. For Frontend I used model, services, feature components, Reactive Forms, HTTP Interception. Both Frontend and Backend have validation. The application lets user to register, login and CRUD job applications. ', img_url: 'assets/img/portfolio/strapstone.png', project_url: 'N/A', github_url: 'https://github.com/codebangla/strapstone-frontend'},

    {id: "portfolioModal3", name: 'Romy\'s Portfolio Website', technology_used: 'Angular 13, Bootstrap 5, Fontawesome', description: 'It\'s a simple portfolio website where I converted an opensource Bootstrap 5 Web Template into an Angular 13 App. I used Arrays of porfolio object as data. I\'ve also used feature component here.', img_url: 'assets/img/portfolio/romy-portfolio.png', project_url: 'https://demo.codebangla.com', github_url: 'https://github.com/codebangla/portfolio'},

    {id: "portfolioModal4", name: 'RomiRx', technology_used: 'Windows Form, C#, .NET 4.5', description: ' RomiRx is a prescription Writing and Printing Windows Desktop application for the Doctors in Bangladesh. The full demo of the application can be found at the Youtube Video link below.', img_url: 'assets/img/portfolio/romirx.png', project_url: 'https://www.youtube.com/watch?v=5qYO_60J3UI', github_url: 'N/A'},

    {id: "portfolioModal5", name: '1000+ Love Quotes', technology_used: 'C#, XAML', description: ' It is a Windows Store App for Windows Phone 8. 1000+ beautiful love quotes by poets, authors, novelists, scholars and famous persons. Share these love quotes via SMS, email, facebook and other social medi Listen these love quotes in your installed phone voice.', img_url: 'assets/img/portfolio/love-quotes.jpg', project_url: 'N/A', github_url: 'N/A'},

    {id: "portfolioModal6", name: 'Learn Accounting', technology_used: 'Apache Cordova, JS', description: 'Accounting Basic learning app developed in Apache Cordova for Windows Phone 8 and Windows 8 devices.', img_url: 'assets/img/portfolio/learn-accounting.jpg', project_url: 'N/A', github_url: 'https://github.com/codebangla/Accounting-Learning-App'},

    {id: "portfolioModal7", name: 'MaxCal', technology_used: 'WordPress, PHP, JQuery, SQL Server', description: 'a Complex Search Interface for XBox, PS4 and other Console game pre-release from a remote SQL server Database views and embed in WordPress CMS using IFrame with WordPress Authentication for a USA client.', img_url: 'assets/img/portfolio/console-game-release.png', project_url: 'N/A', github_url: 'N/A'}
];

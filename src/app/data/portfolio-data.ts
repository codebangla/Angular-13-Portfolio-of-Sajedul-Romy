import { PortfolioData } from "../models/portfolio";


export const PORTFOLIOS: PortfolioData[] = [
    {id: "portfolioModal1", name: 'Strapstone', technology_used:'Bootstrap 5, Angular 13, ASP.NET Core Web API', description: 'Strapstone is a job portal prototype application using Angular 13 and ASP.NET Core 5.0 Web API. For Backend I\'ve used DTO, Repository and UOW pattern, EntityFramework Core, SQL Sever, Bearer JWT Token. For Frontend I used model, services, feature components, Reactive Forms, HTTP Interception. Both Frontend and Backend have validation. The application lets user to register, login and CRUD job applications. ', img_url: 'assets/img/portfolio/strapstone.png'},
    {id: "portfolioModal2", name: 'Romy\'s Portfolio Website', technology_used: 'Angular 13, Bootstrap 5, Fontawesome', description: 'It\'s a simple portfolio website where I converted an opensource Bootstrap 5 Web Template into an Angular 13 App. I used Arrays of porfolio object as data. I\'ve also used feature component here.', img_url: 'assets/img/portfolio/romy-portfolio.png'}
];

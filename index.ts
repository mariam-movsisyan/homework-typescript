type typeIsProject = {
    name: string;
}
type typeIsManager ={
    name: string;
    surname: string;
    projects: typeIsProject[];
}


type typeIsTeamLead ={
    name: string;
    surname: string;
}
type typeIsDeveloper = {
    name:string;
    surname: string;
}

class Employee {
    name: string;
    surname: string;
    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }
}
enum Sphere{
    FrontEnd = 'Frontend developer',
    Backend = 'Backend developer'
}
class Director extends Employee {
    private managers!: typeIsManager[];
    public teamLeade!:typeIsTeamLead[]

    constructor(name: string, surname: string){
        super(name, surname);
        this.managers = [];
    }
    addManager(manager: typeIsManager){
        this.managers.push(manager);
    }
    getAllManagers(){
        return this.managers;
    }
    getAllProjects(){
        let projectsResult = []
        if(this.managers.length !== 0){
            for(let i: number = 0; i < this.managers.length; i++){
                projectsResult.push(this.managers[i].projects);
            }
        }
        return projectsResult;
    }
}
class Manager extends Employee {
    public projects: typeIsProject[];
    constructor(name: string, surname: string){
        super(name, surname);
        this.projects = []
    }

    addNewProject(project: typeIsProject){
        this.projects.push(project);
    }
    getProjects(){
        return this.projects;
    }
}

class Project {
    public name!: string;
    public teamLeadResult!: typeIsTeamLead;
    constructor(name: string){
        this.name = name;
    }
    addTeamLeads(teamLead: typeIsTeamLead){
        this.teamLeadResult = teamLead;
    }
    getTeamLeads(){
        return this.teamLeadResult
    }
}

class TeamLead extends Employee{
    public developers: typeIsDeveloper[];
    constructor(name:string, surname: string){
        super(name, surname);
        this.developers = [];
    }

    addDevelopers(developer:typeIsDeveloper){
        this.developers.push(developer);
    }

    getDevelopers(){
        return this.developers;
    }

}
class Developer extends Employee{
    public sphere!: string
    constructor(name: string, surname: string, sphere: Sphere ){
        super(name, surname)
        this.sphere = sphere
    }
}


let director = new Director('Mariam', 'Movsisyan');
let manager = new Manager('Anna', 'Harutyunyan');
let manager2 = new Manager ('Varduhi', 'Karapetyan');
let project = new Project('TypeScript Project');
let project2 = new Project('Angular Project');
let teamLead = new TeamLead('Marine', 'Grigoryan');
let teamLead2 = new TeamLead('Vahan', 'Gasparyan');
let developer = new Developer('Karen', 'Hayrapetyan', Sphere.FrontEnd);
let developer2 = new Developer('Levon', 'Safaryan', Sphere.Backend);

director.addManager(manager)
director.addManager(manager2)
manager.addNewProject(project)
manager2.addNewProject(project2);
project.addTeamLeads(teamLead);
project2.addTeamLeads(teamLead2); 
teamLead.addDevelopers(developer);
teamLead2.addDevelopers(developer2);

console.log(director.getAllManagers());
console.log(director.getAllProjects());
console.log(manager.getProjects());
console.log(project2.getTeamLeads());
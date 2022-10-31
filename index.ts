interface IEmployee {
    name: string;
    surname: string;
}
enum Sphere{
    FrontEnd = 'Frontend developer',
    Backend = 'Backend developer'
}
enum Profession{
    DIRECTOR = 'Director',
    MANAGER = 'Manager',
    TEAMLEAD = 'TeamLead',
    DEVELOPER = 'Developer'
}
class Employee implements IEmployee {
    public name: string;
    public surname: string;
    public prfession :Profession

    constructor (name: string, surname: string, profession: Profession){
        this.name = name;
        this.surname = surname;
        this.prfession = profession;
    }
}
class Developer extends Employee{
    public sphere!: string
    constructor(name: string, surname: string,profession: Profession, sphere: Sphere ){
        super(name, surname,profession);
        this.sphere = sphere;
    }
}

class TeamLead extends Employee{
    public developers: Developer[]
    constructor(name:string, surname: string, profession: Profession){
        super(name, surname, profession);
        this.developers = [];
    }
    addDevelodep(developer: Developer){
        this.developers.push(developer);
    }
    getDevelopers(){
        return this.developers
    }
}

class Project {
    public name: string;
    public teamLeads : TeamLead[]
    constructor(name: string){
        this.name = name;
        this.teamLeads = [];
    }
    addTeamLeads(teamLead: TeamLead){
        this.teamLeads.push(teamLead)
    }
    getTeamLeads(){
        return this.teamLeads
    }
}

class Manager extends Employee {
    public projects: Project[];
    constructor(name: string, surname: string, profession: Profession){
        super(name, surname,profession);
        this.projects = []
    }

    addNewProject(project: Project){
        this.projects.push(project);
    }
    getProjects(){
        return this.projects;
    }
}

class Director extends Employee {
    public managers!: Manager[];
    constructor(name: string, surname: string, profession: Profession){
        super(name, surname, profession);
        this.managers = [];
    }
    addManager(manager: Manager){
        this.managers.push(manager);
    }
    getAllManagers(){
        return this.managers;
    }
    findValuesWithkey(arr: any, argKey: string) {
        const filteredData: any[] = [];
        for (const item of arr) {
            for (const key in item) {
                if (key === argKey) {
                    filteredData.push(item[key]);
                }
                if (typeof item[key] === 'object') {
                    if (Array.isArray(item[key])) {
                        filteredData.push(...this.findValuesWithkey(item[key], argKey))
                    } else {
                        filteredData.push(...this.findValuesWithkey([item[key]], argKey))
                    }
                }
            }
        } 
        return filteredData;
    }
}

let developer = new Developer('Karen', 'Hayrapetyan',Profession.DEVELOPER, Sphere.FrontEnd);
let developer2 = new Developer('Levon', 'Safaryan',Profession.DEVELOPER, Sphere.Backend);
let teamLead = new TeamLead('Marine', 'Grigoryan',Profession.TEAMLEAD);
let teamLead2 = new TeamLead('Vahan', 'Gasparyan', Profession.TEAMLEAD);
let project = new Project('TypeScript Project');
let project2 = new Project('Angular Project');
let manager = new Manager('Anna', 'Harutyunyan', Profession.MANAGER);
let manager2 = new Manager ('Varduhi', 'Karapetyan', Profession.MANAGER);
let director = new Director('Mariam', 'Movsisyan',Profession.DIRECTOR);

teamLead.addDevelodep(developer)
teamLead2.addDevelodep(developer2);
project.addTeamLeads(teamLead)
project2.addTeamLeads(teamLead2)
manager.addNewProject(project)
manager2.addNewProject(project2);
director.addManager(manager)
director.addManager(manager2)

let x = []
x.push(director);
console.log(director.findValuesWithkey(x, 'managers'))
console.log(director.findValuesWithkey(x, 'projects'))
console.log(director.findValuesWithkey(x, 'teamLeads'))
console.log(director.findValuesWithkey(x, 'developers'))

// console.log(teamLead.getDevelopers())
// console.log(teamLead2.getDevelopers())
// console.log(project.getTeamLeads())
// console.log(project2.getTeamLeads())
// console.log(manager.getProjects());
// console.log(manager2.getProjects());
// console.log(director.getAllManagers());
// console.log(director.getAllProjects());
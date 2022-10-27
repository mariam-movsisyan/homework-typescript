var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Employee;
}());
var Sphere;
(function (Sphere) {
    Sphere["FrontEnd"] = "Frontend developer";
    Sphere["Backend"] = "Backend developer";
})(Sphere || (Sphere = {}));
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director(name, surname) {
        var _this = _super.call(this, name, surname) || this;
        _this.managers = [];
        return _this;
    }
    Director.prototype.addManager = function (manager) {
        this.managers.push(manager);
    };
    Director.prototype.getAllManagers = function () {
        return this.managers;
    };
    Director.prototype.getAllProjects = function () {
        var projectsResult = [];
        if (this.managers.length !== 0) {
            for (var i = 0; i < this.managers.length; i++) {
                projectsResult.push(this.managers[i].projects);
            }
        }
        return projectsResult;
    };
    return Director;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, surname) {
        var _this = _super.call(this, name, surname) || this;
        _this.projects = [];
        return _this;
    }
    Manager.prototype.addNewProject = function (project) {
        this.projects.push(project);
    };
    Manager.prototype.getProjects = function () {
        return this.projects;
    };
    return Manager;
}(Employee));
var Project = /** @class */ (function () {
    function Project(name) {
        this.name = name;
    }
    Project.prototype.addTeamLeads = function (teamLead) {
        this.teamLeadResult = teamLead;
    };
    Project.prototype.getTeamLeads = function () {
        return this.teamLeadResult;
    };
    return Project;
}());
var TeamLead = /** @class */ (function (_super) {
    __extends(TeamLead, _super);
    function TeamLead(name, surname) {
        var _this = _super.call(this, name, surname) || this;
        _this.developers = [];
        return _this;
    }
    TeamLead.prototype.addDevelopers = function (developer) {
        this.developers.push(developer);
    };
    TeamLead.prototype.getDevelopers = function () {
        return this.developers;
    };
    return TeamLead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, surname, sphere) {
        var _this = _super.call(this, name, surname) || this;
        _this.sphere = sphere;
        return _this;
    }
    return Developer;
}(Employee));
var director = new Director('Mariam', 'Movsisyan');
var manager = new Manager('Anna', 'Harutyunyan');
var manager2 = new Manager('Varduhi', 'Karapetyan');
var project = new Project('TypeScript Project');
var project2 = new Project('Angular Project');
var teamLead = new TeamLead('Marine', 'Grigoryan');
var teamLead2 = new TeamLead('Vahan', 'Gasparyan');
var developer = new Developer('Karen', 'Hayrapetyan', Sphere.FrontEnd);
var developer2 = new Developer('Levon', 'Safaryan', Sphere.Backend);
director.addManager(manager);
director.addManager(manager2);
manager.addNewProject(project);
manager2.addNewProject(project2);
project.addTeamLeads(teamLead);
project2.addTeamLeads(teamLead2);
teamLead.addDevelopers(developer);
teamLead2.addDevelopers(developer2);
console.log(director.getAllManagers());
console.log(director.getAllProjects());
console.log(manager.getProjects());
console.log(project2.getTeamLeads());

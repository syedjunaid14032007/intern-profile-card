class Intern{
    constructor(name, track){
        this.name = name;
        this.track = track;
        this.taskDone = 0;
    }
    completeTask(){
        this.taskDone++;
        console.log(`${this.name} has completed ${this.track} task`);
    }
}

const sc = new Intern("Junaid","Mobile Apps");
sc.completeTask();

class ProjectLead extends Intern{
    constructor(name, track, teamsize){
        super(name,track);
        this.teamsize=teamsize;
    }
    assignTask(){
        console.log(`${this.name} is assiging a task to ${this.teamsize} teammates.`);
    }

}
const rh = new ProjectLead("Junaid","Web Dev",4);
rh.completeTask();
rh.assignTask();
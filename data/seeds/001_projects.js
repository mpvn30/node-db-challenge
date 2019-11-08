exports.seed = function(knex) {
  return knex('project_resources').truncate()
    .then(() => knex('resources').truncate())
    .then(() => knex('projects').truncate())
    .then(() => knex('tasks').truncate())
    .then(() => {
      return knex('projects').insert([
        {id: 1, name: "Build an animal orphanage", description: "A home for abandoned pets"},
        {id: 2, name: "Ultimate Business Party", description: "An open party project for to display our product"},
        {id: 3, name: "Create Business Website", description: "Develop a website that suits our company and that can spread awareness about our company"}
      ])
    })
    .then(()=> {
      return knex('resources').insert([
        {id: 1, name: "Construction Company", description: "Provides all construction needs and work"},
        {id: 2, name: "Accounting manager", description: "Manages the project finances"},
        {id: 3, name: "Employees", description: "Manpower"},
        {id: 4, name: "Organizers", description: "Organizes parties and events"},
        {id: 5, name: "Caterers", description: "Provides food and drinks in events and meetings"},
        {id: 6, name: "Developers", description: "Develops websites and manages data"}
      ])
    })
    .then(()=> {
      return knex('project_resources').insert([
        //1
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2},
        {project_id: 1, resource_id: 3},
        //2
        {project_id: 2, resource_id: 2},
        {project_id: 2, resource_id: 4},
        {project_id: 2, resource_id: 5},
        //3
        {project_id: 3, resource_id: 2},
        {project_id: 3, resource_id: 6}
      ])
    })

    .then(()=> {
      return knex('tasks').insert([
        //1
        {project_id: 1, description: "Call construction company", notes: "ask about expenses"},
        {project_id: 1, description: "Schedule appointment for construction", notes: "a flexible date please"},
        {project_id: 1, description: "Find potential employees", notes: "Check linkedIn"},
        //2
        {project_id: 2, description: "Set party location", notes: "enough for at least 100 people"},
        {project_id: 2, description: "Hire organizers", notes: "A formal party and not a kids party"},
        {project_id: 2, description: "Contact Caterers", notes: "Cater to at least 120 guests with vegetarian substitutes and no pizza with pineapples"},
        //3
        {project_id: 3, description: "Hire a developer from Lambda School", notes: "That's it! Now, watch him or her do magic with your website!"},
      ])
    })

};
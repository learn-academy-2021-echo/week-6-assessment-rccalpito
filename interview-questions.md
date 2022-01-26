# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: A developer can update a database to include a foreign key by first creating a migration. The migration should reference the change that is being made (editing a column, updating a column, etc), and then add the code required to perform the change in the migration file. After the migration file has been updating to include the correct code, the user inputs rails db:migrate into the console to update the schema. The foreign key would be named student_id. The foreign key would be located on the Student model as a student can have only one cohort, but the Cohort model will have many students. 

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: 
  Show -> requires which instance should be desplayed
  create -> requires the data that the user wants to create for a new entry
  edit -> requires a user to pass which instance should be updated
  update -> passes the data the user wants to udpate
  destroy -> requires which instance the user wants to destroy 

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: 
  
  rails generate migration <model_name.rb> ==> Generates a migration file that is used to update the model
  rails generate resource <model_name.rb> ==> Generates a resource file. This creates all of the routes used by the controller
  rails generate rspec:install ==> generates the associations needed for testing environment rspec
 
  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students          
show

action: "POST"   route: /students       
create

action: "GET"    route: /students/new
new

action: "GET"    route: /students/2  
show

action: "GET"    route: /students/2/edit    
edit

action: "PATCH"  route: /students/2      
update

action: "DELETE" route: /students/2   
destroy   



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Story: as a developer i can create a to-do-list database that have the following information. items
Story: as a user i can see all of the items in the list.
Story: as a user i can add additional items to the list.
Story: as a user i can remove items from my list.
Story: as a user i can check whether an item has been completed
Story: as a user i can create different lists with different to do items
Story: as a user i can see all of the lists i have created
Story: as a user i can remove a list from the database
Story: as a upser i can open each individual list and see whether or not all items have been checked off.

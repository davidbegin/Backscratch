Project.delete_all
Todo.delete_all
one = Project.create(name: 'Mobile App', client: 'Rich Uncle Pennybags', description: 'An app to track all the various real estate endeavours of our favorite monocled-man', finish_date: Time.now)  
two = Project.create(name: 'Wine Reccomender', client: 'Yellow Tail', description: 'An App that will keep track or what is in your wine cellar and the choose the best pairing for the meal you will be eating that night. While Also at the same time always siggesting to go buy Yellow Tail', finish_date: Time.now)
three = Project.create(name: 'Natty Calculator', client: 'Natty Light', description: 'A simple App the converts the number of alcoholic beverages you have consumed into nattys and then tells you how much money you could have saved', finish_date: Time.now)

Todo.create(content: 'Build App', project_id: one.id)
Todo.create(content: 'Run Tests', project_id: one.id)
Todo.create(content: 'Refactor Code', project_id: one.id)
Todo.create(content: 'Add Additional Features', project_id: two.id)
Todo.create(content: 'Build Admin Area', project_id: three.id)
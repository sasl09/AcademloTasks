//Regular Callback HeLL:

function requestHandler(request, response) { //Request is coming from the user, and response is what we'll get from the server.
  User.findById(request.userId, function(error, user) { //The first part of the user's request needs us to get a "user id" from the server,
//and the callback func will make our code wait until we get a response from server with the info requested, or an error (it makes our code synchronous.
    if(error) {
      response.send(error); //if error (e.g: "no info found") we return the error.
    } else {
      Tasks.findById(user, tasksId, function(error, tasks) { //collect info requested and proceed with the second part of the request. In this case, access this user's Tasks.
        if(error) {
          return response.send(error); //if no tasks found for this user, or whatever problem found, return the error.
        } else {
          tasks.completed = true; //set tasks to completed.
          tasks.save(function (error) { //and save the task performed (if any) in the user's tasks.
            if(error) {
              return response.send(error); //return error if tasked couldn't be saved.
            } else {
              response.send("Task completed.") //return this message to user.
            }
          })
        }
      })
    }
  })

}

requestHandler("saul")
//Promises:

//This would be the simplest way to do it with just 1 request:

function requestHandler(request, response) {
  User.findById(request.userId)
    .then(function(user) {
      response.send(user)
    })

    .catch(function(error) {
      response.send(error);
    })
}


//This would be the same as the "Callback Hell" code above:

function requestHandler(request, response) {
  User.findById(request.userId)
    .then(function(user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function(tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function() {
      response.send("Tasks Completed")
    })
    .catch(function(errors) {
      response.send(errors);
    })
}



//Async-Await:

async function requestHandler(request, response) {

  try {
    const user = await User.findById(request.userId);
    const tasks= await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    response.send("Task Completed");
  }

    .catch(function(e) {
      response.send(e);
    }
}

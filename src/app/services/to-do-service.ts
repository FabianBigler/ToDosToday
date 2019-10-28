import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ToDoService {    
    private todos = [        
            {
            "Name" : "Angular App",
            "Description" : "Create a new angular App",
            "Priority" : 1,
            "CreatedAt": '2019-10-28T18:25:43.511Z',
            "Done": false
            },
            {
            "Name" : "Coffe Break",
            "Description" : "Having a coffee is always great.",
            "CreatedAt": '2019-10-25T18:25:43.511Z',
            "Priority" : 99,
            "Done": true
            }
    ];

    GetAll(){
        return this.todos;
    }

    Create(todo)
    {
        this.todos.push(todo);
    }    

    Delete(todo)
    {

    }
}

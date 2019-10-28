import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../interfaces/to-do';
import {ToDoService} from '../../services/to-do-service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  private toDos : ToDo[] = [];
  private newToDo: ToDo = {
    Name : '',
    Description: '',
    Done: false,
    CreatedAt: new Date()
   };

  constructor(private toDoService: ToDoService) {         
  }
     
  createToDo()
  {
    this.toDoService.Create(this.newToDo);
  }


  ngOnInit() {        
    this.toDos = this.toDoService.GetAll();
    console.log(this.toDos);

  }
}

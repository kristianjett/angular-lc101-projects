import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLanding() {
    if (this.color === 'blue' && this.height > 0) {
      window.alert('Prepare for landing...');
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Shuttle has landed.';
    }
  }

  handleAbortMission() {
    if (this.color === 'blue' && this.height > 0) {
      let result = window.confirm('Are you sure you want to abort mission?');
      if (result){
        this.color = 'green';
        this.height = 0;
        this.width = 0;
        this.message = 'Mission aborted. Shuttle has landed.';
      }
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent{

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl,
      phone: new FormControl
    }),
    topics: new FormArray([])
  })

  //FORM BUILDER -- use constructor to build form with slightly more terse code (same result as above)
  // constructor(fb: FormBuilder){
  //   this.form = fb.group({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email: [],
  //       phone: []
  //     })
  //   })
  // }


  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }

  get topics() {
    return this.form.get('topics') as FormArray
  }
}

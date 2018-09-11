import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class EmitcomService {

	@Output() change: EventEmitter<any> = new EventEmitter();

	/*
	For communication between components i've used an event emitter service that uses simple JSON objects
	I could compact everything into one simple method that accepts an object parameter however I wanted to keep the action
	separate incase I wanted to expand on them later.
	*/
	sendData(data: string) {
		let sendData = {
			type: "ipo",
			data: data
		};
		this.change.emit(sendData);
	}

	destroyChart() {
		let sendData = {
			type: "action",
			data: "destroyChart"
		};
		this.change.emit(sendData);
	}

	updateWatcher() {
		let sendData = {
			type: "action",
			data: "updateWatcher"
		};
		this.change.emit(sendData);
	}

	constructor() { }
}

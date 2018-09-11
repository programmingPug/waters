import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class EmitcomService {

	@Output() change: EventEmitter<any> = new EventEmitter();

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

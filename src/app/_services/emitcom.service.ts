import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class EmitcomService {

	@Output() change: EventEmitter<number> = new EventEmitter();

	sendData( data: number ) {
		this.change.emit( data );
	}

	constructor() { }
}

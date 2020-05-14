import {IInputs, IOutputs} from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalendarAnchor, ICalendar } from './ReactCalendar';
import { debug } from "util";

export class Calendar implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private container: HTMLDivElement;
	private props: ICalendar = {
		weekStartsOn: 1
	};

	constructor()
	{

	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this.container = container;
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		this.props.weekStartsOn = context.parameters.weekStartsOn.raw!;
		ReactDOM.render(
			React.createElement(CalendarAnchor, this.props), this.container
		);
		console.log("hello there!");
	}

	public getOutputs(): IOutputs
	{
		return {};
	}

	public destroy(): void
	{
		ReactDOM.unmountComponentAtNode(this.container);
	}
}
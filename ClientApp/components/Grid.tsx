import * as React from 'react';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../store';
import * as GridStore from '../store/Grid';
import FlexRow from './FlexRow';
import FlexColumn from './FlexColumn';

class Grid extends React.Component<any, void> {
    public render() {
    	let images = this.props.images;
    	let images_part_1 = images.splice(0,5);
    	let images_part_2 = images.splice(0,5);
    	let images_part_3 = images.splice(0,5);
    	let images_part_4 = images.splice(0,5);

        return <div className="flex-container">
            <h1>Grid</h1>
			<FlexRow images={images_part_1} />
			<FlexColumn images={images_part_2} />
			<FlexRow images={images_part_3} />
			<FlexColumn images={images_part_4} />
			<FlexRow images={images_part_2} />
			<FlexColumn images={images_part_3} />
			<FlexRow images={images_part_1} />
			<FlexColumn images={images_part_4} />
        </div>;
    }
}

// Build the CounterProps type, which allows the component to be strongly typed
const provider = provide(
    (state: ApplicationState) => state.grid, // Select which part of global state maps to this component
    GridStore.actionCreators                 // Select which action creators should be exposed to this component
);
export default provider.connect(Grid);
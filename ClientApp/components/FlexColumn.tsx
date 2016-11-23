import * as React from 'react';

export default class FlexColumn extends React.Component<any, void> {
    public render() {
        let random = Math.floor(Math.random() * 5);
        console.log(random);
        return <div className='flex-column'>
            {
                this.props.images.map((image, key) => {
                    return <div key={key} className={ key == random ? 'flex-column-item bg basis' : 'flex-column-item bg'}
                            style={{backgroundImage: `url(${image})`}}>
                        {image}
                    </div>
                })
            }
        </div>
    }
}